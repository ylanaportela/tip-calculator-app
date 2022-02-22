import logo from './images/logo.svg'
import { useState } from 'react';

import './App.scss'
function App() {

  const tips = [5, 10, 15, 25, 50, 'Custom']

  return (
    <div className="container">

      <div className="container-title">
        <img src={logo} alt='logo' />
      </div>

      <div className="container-calculator">

        <div className="container-calculator__input">
          <div className="bill">
            <p>Bill</p>
            <input className="bill-input" />
          </div>

          <div className="tip">
            <p>Select tip %</p>
            <div className="tip-buttons">
              {tips.map(tip => {
                return (
                  <div key={tip}>{tip}</div>
            )
              })}
          </div>
        </div>

        <div className="people">
          <p>Number of People</p>
          <input className="bill-input" />
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

          <button>RESET</button>
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;
