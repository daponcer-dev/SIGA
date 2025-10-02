
function App() {
  const [mensaje, setMensaje] = React.useState("");

  function llamarAppsScript() {
    google.script.run
      .withSuccessHandler((res) => setMensaje(res))
      .miFuncionDeAppsScript(); // función definida en tu Code.gs
  }

  return (
    <div>
      <h1>React + Apps Script + Blogger</h1>
      <button onClick={llamarAppsScript}>Llamar Apps Script</button>
      <p>Respuesta: {mensaje}</p>
    </div>
  );
}

export default App;
