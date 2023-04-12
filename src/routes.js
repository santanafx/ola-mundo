import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./paginas/Inicio/Inicio";
import { SobreMim } from "./paginas/SobreMim/SobreMim";
import { Menu } from "./componentes/Menu/Menu";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobremim' element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
