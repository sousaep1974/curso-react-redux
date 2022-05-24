import React from "react";

function UsuarioInfo(props) {
  const usuario = props.usuario || {};

  return (
    <div>
      <div test={usuario && usuario.nome}>
        Seja bem vindo,<strong> {usuario.nome}</strong>!
        <br />
      </div>
    </div>
  );
}
export default UsuarioInfo;
