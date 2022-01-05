const { User } = require("../models");

class UserController {
  // register
  static async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).send(user);
    } catch {
      res.sendStatus(500);
    }
  }

  static async login(req, res) {
    res.send(req.user);
  }

  static async logout(req, res) {
    req.logout();
    res.sendStatus(200);
  }
  
  static async me(req, res) {
    if (!req.user) {
      return res.sendStatus(401);
    }
    res.send(req.user);
  }
}

module.exports = UserController;
