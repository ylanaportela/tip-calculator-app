import logo from './images/logo.svg'
import { useEffect, useState } from 'react';
import IconDollar from './images/icon-dollar.svg'

import './App.scss'
import IconX from './components/IconX';
function App() {

  const [inputBill, setInputBill] = useState(0)
  const [inputPeople, setInputPeople] = useState(0)
  const [buttonActive, setButtonActive] = useState(0)

  const [tipValue, setTipValue] = useState(0)
  const [totalValue, setTotalValue] = useState(0)


  useEffect(() => {
    if (inputBill > 0 && inputBill !== []) {
    setTipValue(Number(inputBill)  * Number(buttonActive/100))}
  }, [inputBill, buttonActive])

  
  useEffect(() => {
    if (inputBill > 0 && inputBill !== [] && inputPeople > 0 && inputPeople !== []  ) {
      (setTotalValue((Number(inputBill)  * (Number(buttonActive)/100) / Number(inputPeople)) + Number(inputBill)/Number(inputPeople)))
    }
  }, [inputBill, buttonActive , inputPeople])


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

            <input 
            type='number'
            className={inputBill === 0 ? 'input-value input-value__default' : 'input-value input-value__active' }
            placeholder='0'

            value={inputBill}

            onFocus = {() => setInputBill([])}
            onChange={e => setInputBill(e.target.value)}            
            />


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
          <input
          type='number'
          className={inputPeople === 0 ? 'input-value input-value__default' : 'input-value input-value__active' }
          placeholder='0'
          value={inputPeople}
          onFocus = {() => setInputPeople([])}
          onChange={e => setInputPeople(e.target.value)}/>
        </div>

      </div>

      <div className="container-calculator__output">

        <div className='output-values'>
          <div className='output-values__tip'>

            <div className='text'>
              <div className='text-title'>Tip Amount</div>
              <p className='text-description'>/ person</p>
            </div>

            <div className='value'> <IconX />{tipValue} </div>
          </div>

          <div className='output-values__total'>

            <div className='text'>
              <div className='text-title'>Total</div>
              <p className='text-description'>/ person</p>
            </div>

            <div className='value'> <IconX /> {totalValue} </div>
          </div>

        </div> 

        <button>RESET</button>

      </div>
    </div>
    </div>
  );
}

export default App;
