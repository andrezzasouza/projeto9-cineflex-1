import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import GlobalStyle from "./Components/GlobalStyles";

export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                    //
            </Routes>
        </BrowserRouter>

    );
}