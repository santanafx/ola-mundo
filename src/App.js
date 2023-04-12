import { Inicio } from "./paginas/Inicio/Inicio";
import { SobreMim } from "./paginas/SobreMim/SobreMim";


console.log(window.location)

const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />

function App() {
  return (
    pagina
  );
}

export default App;
