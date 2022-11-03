import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import CatApp from "./Cats/CatApp";
import WeatherApp from "./Weather/WeatherApp";
import YoutubeApp from "./YouTube/components/YoutubeApp";

const App = () => {
    return (
        <>
        <Menu />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="src/Cats" element={<CatApp />} />
            <Route path="src/Weather" element={<WeatherApp />} />
            <Route path="src/YouTube" element={<YoutubeApp />} />
        </Routes>
        </>
    )
}
export default App;