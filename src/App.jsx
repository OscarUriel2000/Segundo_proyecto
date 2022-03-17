const App = () => {
  const persona = {
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
  const contactoPersona = {
    telefono: "2871234567",
    email: "bart.s@live.com",
    web: "www.thesimpsons.com",
  };
  
  const infoPersona = { ...persona, ...contactoPersona, empresa: "Disney" };
  
  infoPersona.apodo = "Bart";

  infoPersona.telefono= "5555555555"

  //console.table(infoPersona);

  const { edad, nombre, apellido } = persona;
  const { calle, numExt, ciudad } = persona.direccion;
  const humanos = ["Homer", "Margorie", "Lisa", "Maggie"] ;
  const [padre, madre, hermana1, hermana2] = humanos;
  const mascotas = ["Santa's help", "Snow ball"];

  const familia = [...humanos, ...mascotas];
  console.log(familia);
  
  return (
    <div className="App">
    <h3> {`Mi nombre es ${nombre} ${apellido}, tengo ${edad} años y vivo en ${calle} numero ${numExt}, ${ciudad}`}</h3>
    <br />
    {"Mi familia la conforman:"}
    <ul>
      <li>`Mi padre: ${padre}`</li>
      <li>`Mi madre: ${madre}`</li>
      <li>`Mis hermanas: ${hermana1} y ${hermana2}'</li>
    </ul>
    </div>
  );
};

export default App;