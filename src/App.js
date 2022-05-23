import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import ResetCSS from "./Components/ResetCSS";
import GlobalStyle from "./Components/GlobalStyles";
import MainPage from "./Components/MainPage";
import Sessions from "./Components/Sessions";
import Seats from "./Components/Seats";
import Success from "./Components/Success";

export default function App(){
    const [movieInfo, setMovieInfo] = useState({});
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [seatsId, setSeatsId] = useState([]);

    return (
        <BrowserRouter>
            <ResetCSS />
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element = {<MainPage />} />
                <Route path="/sessoes/:movieID" element = {<Sessions />} />
                <Route path="/assentos/:sessionID" element={<Seats movieInfo={movieInfo} setMovieInfo={setMovieInfo} name={name} setName={setName} cpf={cpf} setCpf={setCpf} seatsId={seatsId} setSeatsId={setSeatsId} />} />
                <Route path="/sucesso" element={<Success movieInfo={movieInfo} name={name} cpf={cpf} seatsId={seatsId} />} />
            </Routes>
        </BrowserRouter>
    );
}