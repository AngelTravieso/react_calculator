export const CalculatorApp = () => {
  return (
    <div className="main bg-dark d-flex justify-content-center align-items-center">
      <div className="card p-2 w-50">
        <div className="card-title">
          <p className="m-0 h5 fw-bold text-center">Calculator</p>
        </div>
        <div className="card-body">
          <div className="output">
            <div className="current-output">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border border-0 text-white bg-secondary" placeholder="Número 1"
                    maxLength={ 50 }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper mt-2">
            <div className="btn btn-dark">+</div>
            <div className="btn btn-dark">-</div>
            <div className="btn btn-dark">x</div>
            <div className="btn btn-dark">/</div>

          
            <div className="btn btn-dark">7</div>
            <div className="btn btn-dark">8</div>
            <div className="btn btn-dark">9</div>

            <div className="column-two">
              <button className="btn btn-dark w-100 h-100">C</button>
            </div>
          
            <div className="btn btn-dark">4</div>
            <div className="btn btn-dark">5</div>
            <div className="btn btn-dark">6</div>

            <div className="btn btn-dark">1</div>
            <div className="btn btn-dark">2</div>
            <div className="btn btn-dark">3</div>
            <div className="btn btn-dark">,</div>

            <div className="row-zero">
              <div className="btn btn-dark w-100">0</div>
            </div>

            <div className="row-equal">
              <div className="btn btn-dark w-100">=</div>
            </div>
            
          </div>
  
        </div>
      </div>
    </div>
  )
}
