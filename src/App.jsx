import ListaUsuarios from "./pages/ListaUsuarios"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  

  return(

    <>
    <Navbar/>
      <Home/>
      <div className="container">
        <h1 className="text-center mb-5">Pratica guiada Lista de usuarios</h1>
          <ListaUsuarios/>
      </div>
    <Footer/>
    </>

  );
  

}

export default App
