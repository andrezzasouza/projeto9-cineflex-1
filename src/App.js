import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ResetCSS from "./Components/ResetCSS";
import GlobalStyle from "./Components/GlobalStyles";
import MainPage from "./Components/MainPage";

export default function App(){
    return (
        <BrowserRouter>
            <ResetCSS />
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element = {<MainPage />} />
                {/* <Route path="/sessoes" element = {} />
                <Route path="/assentos" element = {} /> */}
            </Routes>
        </BrowserRouter>

    );
}