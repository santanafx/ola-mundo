import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./paginas/Inicio/Inicio";
import { SobreMim } from "./paginas/SobreMim/SobreMim";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobremim' elemento={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
