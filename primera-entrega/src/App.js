import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./css/Style.css"
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
