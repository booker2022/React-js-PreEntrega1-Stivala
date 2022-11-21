import React from "react";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItmListContainer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <dir>
      <NavBar />
      <ItemListContainer greeting={"ELECTRO CASA   Confianza & garantia para tu hogar"} />
      <Main />
      <Footer />
    </dir>
  );
}

export default App;

