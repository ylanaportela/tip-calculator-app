function App() {

  const tips = [5,10,15,25,50, 'Custom']

  return (
    <div className="container">

      <div className="container-title">
        <h1>SPLITTER</h1>
      </div>

      <div className="container-calculator">

        <div className="container-calculator__input">
          <div className="bill">
            <p>Bill</p>
              <input className="bill-input"></input>
          </div>

          <div className="tip">
            <p>Select tip %</p>
            <div className="tip-buttons">
              {tips.forEach(tip =>{
                return (
                  <div>
                    <div>{tip}%</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="people">
            <p>Number of People</p>
            <input className="bill-input"></input>
          </div>

        </div>
        <div className="container-calculator__output"></div>
      </div>
    </div>
  );
}

export default App;
