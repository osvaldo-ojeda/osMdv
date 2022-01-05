// server configs
const express = require("express");
const app = express();
const db = require("./config/db");
const routes = require("./routes");
const { User } = require("./models");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
//para pintar los eerores del backend
const volleyball = require("volleyball");

//midllewars

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "osmdb",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// -----passport

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "pass"
    },
    function (email, pass, done) {
      User.findOne({ where: { email } })
        .then(user => {
          if (!user) {
            return done(null, false);
          }
          user.hash(pass, user.salt)
          .then(hash => {
            if (hash !== user.pass) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

// -----
app.use("/api", routes);
db.sync({ force: false}).then(() => {
  app.listen(3001, () => {
    console.log("listening on port 3001");
  });
});
