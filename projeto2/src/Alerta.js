import React from 'react';
function Alerta(props) {
  const logado = props.logado;
  if (logado) {
    return <Usermsg />;
  }
  return <Convidadomsg />;
}
function Usermsg(props) {
  return (<div><h1>Gesonel mestre dos disfarces, você está logado!</h1>
  < img src="gesonel.jfif" alt="Irmão do Jorel" />
  </div>);
}

function Convidadomsg(props) {
  return (<div>
  < img src="Irmão-do-Jorel.png" alt="Gesonel, mestre dos disfarces"/>
  </div>);
}
  export default Alerta;