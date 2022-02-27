import logo from './images/logo.svg'
import { useState } from 'react';

import './App.scss'
function App() {

  const [inputBill, setInputBill] = useState('')
  const [inputPeople, setInputPeople] = useState('')
  const [buttonActive, setButtonActive] = useState(null)


  const tips = [5, 10, 15, 25, 50, 'Custom']

  function handleClick(tip) {
    setButtonActive(tip)
    }

  return (
    <div className="container">

      <div className="container-title">
        <img src={logo} alt='logo' />
      </div>

      <div className="container-calculator">

        <div className="container-calculator__input">
          <div className="calculator-input__bill">
            <p>Bill</p>
            <input className="input" type="number"  placeholder='0' value={inputBill} onChange={e => setInputBill(e.target.value)}/>
          </div>

          <div className="tip">
            <p>Select tip %</p>
            <div className="tip-buttons">
              {tips.map(tip => {
                return (
                  <div
                  key={tip}
                  onClick={() => handleClick(tip)}
                  className={buttonActive === tip ? 'button button-active' : null}
                  >
                    {tip}{typeof(tip) === 'number' ? '%' : null}
                  </div>
              )
              })}
          </div>
        </div>

        <div className="calculator-input__people">
          <p>Number of People</p>
          <input className="input" type="number" placeholder='0' value={inputPeople} onChange={e => setInputPeople(e.target.value)}/>
        </div>

      </div>

      <div className="container-calculator__output">

        <div className='output-values'>
          <div className='output-values__tip'>

            <div className='text'>
              <div className='text-title'>Tip Amount</div>
              <p className='text-description'> /person</p>
            </div>

            <div className='value'><span></span></div>
          </div>

          <div className='output-values__total'>

            <div className='text'>
              <div className='text-title'>Total</div>
              <p className='text-description'> /person</p>
            </div>

            <div className='value'><span>$</span></div>
          </div>

        </div>

        <button>RESET</button>

      </div>
    </div>
    </div>
  );
}

export default App;
