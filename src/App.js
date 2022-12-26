import "./App.css";
import PageHome from "./pages/PageHome";
import PageForm from "./pages/PageForm";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<PageHome/>}/>
        <Route path="/PageForm" element={<PageForm/>}/>
      </Routes>
    </div>
  );
}
