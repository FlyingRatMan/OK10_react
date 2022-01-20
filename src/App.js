import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";

import "./App.css";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import Layout from "./components/layout/Layout";


function App() {


    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/users"} element={<UsersPage/>}/>
                    <Route path={"/posts"} element={<PostsPage/>}/>
                </Route>
            </Routes>
        </>

    )
}

export default App;