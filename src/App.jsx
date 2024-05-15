import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import StartPage from "./components/StartPage";
import MainPage from "./components/MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="loginForm">Sign In</NavLink>
          <NavLink to="mainPage">Main</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="loginForm" element={<LoginForm />} />
          <Route path="MainPage" element={<MainPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
