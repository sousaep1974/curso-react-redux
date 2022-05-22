import React from "react";
import FamiliaMembro from "./FamiliaMembro";

function Familia(props) {
return (
<div>
<FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
<FamiliaMembro nome="Ana " {...props} />
<FamiliaMembro nome="Gustavo" sobrenome={props.sobrenome} />
</div>
);
}

export default Familia;
