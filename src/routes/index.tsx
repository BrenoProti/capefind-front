import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ResultsPage from "../pages/Results";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/results" element={<ResultsPage />} />
            </Routes>
        </BrowserRouter>
    )
}
