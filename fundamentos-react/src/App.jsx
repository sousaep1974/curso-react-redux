import "./App.css";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmanto";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import ListaAlunos from "./components/repetição/ListaAlunos";
import TabelaProdutos from "./components/repetição/TabelaProdutos";

function App() {
return (
<div className="App">
<h1>FUNDAMENTOS REACT</h1>

<div className="Cards">
<Card titulo="#7 - Desafio Repetição">
<TabelaProdutos />
</Card>

<Card titulo="#6 - Repetição">
<ListaAlunos />
</Card>

<Card titulo="#5 - Componentes com Filhos">
<Familia sobrenome="Ferreira" />
</Card>

<Card titulo="#4 - Desdafio Aleatório">
<Aleatorio min={1} max={60} />
</Card>

<Card titulo="#3 - Fragmento">
<Fragmento />
</Card>

<Card titulo="#2 - Com Parâmetro">
<ComParametro aluno="Aluno Edivan Sousa tirou a nota: " nota={9.5} />
</Card>

<Card titulo="#1 - Primeiro Componente">
<Primeiro></Primeiro>
</Card>
</div>
</div>
);
}
export default App;
