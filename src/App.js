import { useEffect, useState } from 'react';
import IconX from './components/IconX';
import './App.scss'
import logo from './images/logo.svg'

function App() {

  const [inputBill, setInputBill] = useState(0)
  const [inputPeople, setInputPeople] = useState(0)
  const [buttonActive, setButtonActive] = useState(0)
  const [buttonCustom, setButtonCustom] = useState('Custum')

  const [tipValue, setTipValue] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const [reset, setReset] = useState(false) 


  useEffect(() => {
    if (inputBill > 0 && inputBill !== [] && typeof(buttonActive) == 'number') {
      let tip  = (inputBill) * (buttonActive / 100)

      setTipValue(tip)
    }
  }, [inputBill, buttonActive])


  useEffect(() => {
    if (inputBill > 0 && inputBill !== [] && inputPeople > 0 && inputPeople !== [] ) {
      let total = (inputBill) * ((buttonActive) / 100) / (inputPeople) + (inputBill) / (inputPeople)

      setTotalValue(total)
    }
  }, [inputBill, buttonActive, inputPeople])


  const tips = [5, 10, 15, 25, 50, buttonCustom]

  function handleClick(tip) {

    if (tip === buttonCustom) { 
      setButtonCustom(
      <input className='input-costum' type='number' onChange={e => setButtonActive(Number(e.target.value))}/>
      )
    }
   
    setButtonActive(tip)
  }

  function handleClickReset(){

    setReset(setInputBill(0), setButtonActive(0), setInputPeople(0), setTipValue(0), setTotalValue(0))
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
              className={inputBill === 0 ? 'input input-value input-value__default' : 'input input-value input-value__active'}
              placeholder='0'

              value={inputBill}

              onFocus={() => setInputBill([])}
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
                    {tip}{typeof (tip) === 'number' ? '%' : null}
                  </div>

                )
              })}
            </div>
          </div>

          <div className="calculator-input__people">

            <p>Number of People</p>
            <span
              className={tipValue !== 0 && totalValue === 0 ? 'text-error' : 'text-error-default'}
            >
              Can't be zero
            </span>

            <input
              type='number'
              className={tipValue !== 0 && totalValue === 0 ? 'input input-value input-error' : 'input input-value input-value__default' && inputPeople !== 0 ? 'input input-value input-value__active' : 'input input-value input-value__default'} 
              placeholder='0'
              value={inputPeople}
              onFocus={() => setInputPeople([])}
              onChange={e => setInputPeople(e.target.value)}
            />

          </div>


        </div>

        <div className="container-calculator__output">

          <div className='output-values'>

            <div className='output-values__tip'>

              <div className='text'>

                <div className='text-title'>Tip Amount</div>
                <p className='text-description'>/ person</p>

              </div>

              <div className='value-tip'>

                <IconX className='value-icon' />

                <div className='value'>{tipValue.toFixed(2)}</div>

              </div>

            </div>

            <div className='output-values__total'>

              <div className='text'>

                <div className='text-title'>Total</div>
                <p className='text-description'>/ person</p>

              </div>

              <div
                className='value-total'>
                <IconX className='value-icon' />

                <div className='value'> {totalValue.toFixed(2)} </div> </div>
            </div>

          </div>

          <button
          value={reset}
            className={
              inputBill === 0 ? 'button-disabled' : 'button-active'
            }
            onClick={handleClickReset}
          >RESET</button>

        </div>
      </div>
    </div>
  );
}

export default App;
