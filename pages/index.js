import { useState } from 'react';

function Home() {
  return (
    <>
    <div>Home</div>
    <Contador />
    </>
  )
}

function Contador() {
  const [cont, setCont] = useState(1);

  function addCont() {
    setCont(cont + 1)
  }
  function subCont() {
    setCont(cont - 1)
  }

  return (
    <div>
      <div>{cont}</div>
      <button onClick={addCont}>Add</button>
      <p></p>
      <button onClick={subCont}>Remove</button>
    </div>
  )
}

export default Home;