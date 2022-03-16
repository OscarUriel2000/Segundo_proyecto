const App = () => {
  const miObjeto = {
    nombre: "Bartholome",
    apellido: "Simpson",
    edad: 10,
    direccion: {
      calle: "Avenida Siempre Viva",
      numExt: 742,
      numInt: "",
      ciudad: "Springfield",
    },
  };
  const { edad, nombre, apellido } = miObjeto;
  const { calle, numExt, ciudad } = miObjeto.direccion;
  const familia = ["Homer", "Margorie", "Lisa", "Maggie"] ;
  const [padre, madre, hermana1, hermana2] = familia;
  return (
    <div className="App">
    <h3> {`Mi nombre es ${nombre} ${apellido}, tengo ${edad} años y vivo en ${calle} numero ${numExt}, ${ciudad}`}</h3>
    <br />
    {"Mi familia la conforman:"}
    <ul>
      <li>`Mi padre: ${padre}`</li>
      <li>`Mi madre: ${madre}`</li>
      <li>`Mis hermanas: ${hermana1} y ${hermana2}`</li>
    </ul>
    </div>
  );
};

export default App;