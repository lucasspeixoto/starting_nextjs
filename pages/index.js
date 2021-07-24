import { useState } from 'react';

function Calculator() {
 
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div style={{ background: '#afff', border: '1px solid', width: '30%' }}>
      <h3>Calculator</h3>
      <input
        type="number"
        style={{ width: '30px', margin: '5px' }}
        onChange={x => setX(+x.target.value)}>
      </input>
      <span>+</span>
      <input
        type="number"
        style={{ width: '30px', margin: '5px' }}
        onChange={y => setY(+y.target.value)}></input>
      <span> = {x + y}</span>

    </div >
  )
}

export default Calculator;