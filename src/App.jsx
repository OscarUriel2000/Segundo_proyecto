const App = () => {
  const miObjeto = {
    nombre: "Oscar",
    segnombre: "Uriel",
    apPaterno: "Alcocer",
    apMaterno: "Delfin",
    edad: 21,
  };
  
  const atributo = "apPaterno";

  return (
    <div className="App">
      {/* EcmaScript 5*/}
    <h1> {`MI nombre es ${miObjeto.nombre} ${miObjeto.segnombre} ${miObjeto.apPaterno} ${miObjeto.apMaterno} y tengo ${miObjeto.edad} años`}</h1>
    </div>
  );
};

export default App;