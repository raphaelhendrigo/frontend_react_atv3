import React, { useState } from 'react';
import Alerta from './Alerta';

function Login() {

	  const [entrar, setEntrar] = useState(false);
	  let botao;
	  if (entrar) {
      botao=<button onClick={()=> setEntrar(false)}>
      Sair
    </button>
    }else{
     botao=<button onClick={()=> setEntrar(true)}>
      Entrar
		  </button>};
	  return(
		  <div>
		  <Alerta logado={entrar} />
			  {botao}
	  </div>);
  }
  export default Login;