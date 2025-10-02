import { useEffect, useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbylQ39n51tkxwxlz_eOTixGKSALggFDPM2Zgga7BAylLeWKndBHNWrs2EH0P42KO_w8Sw/exec") // tu URL de Apps Script
      .then((res) => res.json())
      .then((data) => {
        if (data.estado === "ok") {
          setUsuarios(data.usuarios);
        }
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Usuarios desde Google Sheets</h2>
      <ul>
        {usuarios.map((fila, i) => (
          <li key={i}>
            {fila[0]} - {fila[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
