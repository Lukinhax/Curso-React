import { useEffect, useState } from 'react'

export function App() {
    const [usuario, setUsuario] = useState("");
    const [count, setCount] = useState(0);
    const [usuarios, setUsuarios] = useState(["Pablo", "José", "Manoel"])

function addUser (){
    setUsuarios([...usuarios, usuario]); 
    setUsuario("");
};

useEffect(() => {
  setCount(usuarios.length);
}, [usuarios]);


  return(
    <div>
      <h1>Hello DIO!</h1>
      <h3>Total: {count}</h3>

        <input 
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
        />
        <button onClick={addUser}>adicionar</button>
        <hr />
      {usuarios.map((item) => (
        <p>{item}</p>
      ))}
       </div>
  )
}


