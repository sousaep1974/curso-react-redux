import React from "react";
import alunos from "../../data/alunos";

function ListaAlunos() {
console.log(alunos);
const listaTodosAlunos = alunos.map((aluno) => {
return (
<li key={aluno.id}>
{aluno.id} {aluno.nome} -> {aluno.nota}
</li>
);
});
return (
<div>
<ul style={{ listStyle: "none" }}>
<li>{listaTodosAlunos}</li>
</ul>
</div>
);
}

export default ListaAlunos;
