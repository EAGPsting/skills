import './App.css';
import Presentacion from './Componets/Presentacion';
import Carrera from './Componets/Carrera';
import Skill from './Componets/Skills';

function App() {
  const Perfil={
     name:"Esteban Alexander Gámez Pérez",
     carrera: "Ingenieria en Ciencias de la computacion",
     skill: ".NET",
     skill1: ".NET Core",
     skill2: "Sql Server",
     skill3: "SISS",
     skill4: "ReportingServices",
     skill5: "React"
  }
  return (
    <div className="App">
      <Presentacion {...Perfil}></Presentacion>
      <Carrera  {...Perfil}></Carrera>
      <Skill {...Perfil}></Skill>
    </div>
  );
}

export default App;
