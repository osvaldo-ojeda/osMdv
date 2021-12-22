import React from 'react';
// import { useDispatch } from "react-redux";
// import { getPeliculas } from "./store/peliculas";
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
    // const dispatch = useDispatch();
    //  useEffect(() => {
    //     dispatch(getPeliculas());
    // }, [dispatch]);
    return (
        <div>
            <Header />
            <Main/>
               
            <footer>
                <h3>footer</h3>
            </footer>
        </div>
    )
}

export default App
