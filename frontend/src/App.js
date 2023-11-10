import Header from "./components/Header";
import Footer from "./components/Footer"
import CardArr from "./components/CardArr";
import CreateCard from "./components/CreateCard";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Info from "./pages/Info"
import { useState } from "react";

function App() {
  // const [cardInputs, setCardInputs] = useState({
  //   inputQues: "",
  //   inputAns: ""
  // })

  const [toAdd, setToAdd] = useState(false)
  return (
    <div>
      <BrowserRouter>
        <Header setToAdd={setToAdd} />
        {toAdd &&
          <CreateCard
            setToAdd={setToAdd}
          />}
        <Routes>
          <Route path="/" element={<CardArr />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
