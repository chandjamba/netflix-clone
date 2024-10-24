import { BrowserRouter, Routes, Route, NavLink, } from "react-router-dom";
import StartPage from "./components/StartPage";
import LoginForm from "./components/LoginForm";
import MainPage from "./components/MainPage";
import MovieInfoCard from "./components/MovieInfoCard";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          div.
          <NavLink to="loginForm">Sign In</NavLink>
          <NavLink to="mainPage">Main</NavLink>
          
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="loginForm" element={<LoginForm />} />
          <Route path="mainPage" element={<MainPage />} />
          <Route path="/movie/:movieId" element={<MovieInfoCard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
