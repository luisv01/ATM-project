const ATMDeposit = ({ onChange, isDeposit, enoughFunds, setEnoughFunds }) => {
  const choice = ['Deposit', 'Withdraw'];
  console.log(`ATM isDeposit: ${isDeposit}`);
  console.log(`ATM enoughFunds is: ${enoughFunds}`);

  const Reset = () => {
    setEnoughFunds(true);
  };

  const choiceColor = (isDeposit) => {
    return isDeposit ? '#28a745' : '#ffc107';
  };

  if (!enoughFunds) {
    return (
      <label className="label huge">
        <h3 style={{ backgroundColor: 'red' }} className="display-4">
          Not Enough Cashola!! Work Harder!!
        </h3>
        <input
          className="btn btn-primary btn-lg"
          onClick={Reset}
          type="submit"
          width="200"
          value="Reset"
        ></input>
      </label>
    );
  }
  return (
    <label className="label huge">
      <div
        className="display-4 container"
        style={{ color: choiceColor(isDeposit) }}
      >
        Transaction Selected: {choice[Number(!isDeposit)]}
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input
          autoFocus
          onChange={onChange}
          type="number"
          className="form-control"
        />
        <span className="input-group-text">.00</span>
        <button
          className="btn btn-primary"
          type="submit"
          id="button-addon2"
          value="Submit"
        >
          Submit
        </button>
      </div>
    </label>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [enoughFunds, setEnoughFunds] = React.useState(true);

  let status = `Account Balance $${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  console.log(`Account Rendered with enoughFunds: ${enoughFunds}`);
  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };

  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    newTotal >= 0 ? setTotalState(newTotal) : setEnoughFunds(false);
    // if (newTotal >= 0) {
    //   setTotalState(newTotal);
    // } else {
    //   setEnoughFunds(false);
    // }
    event.preventDefault();
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h2 className="display-3" id="total">
          {status}
        </h2>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <button
              className="btn btn-success btn-lg"
              onClick={() => setIsDeposit(true)}
            >
              Deposit
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-warning btn-lg"
              onClick={() => setIsDeposit(false)}
            >
              Withdraw
            </button>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <ATMDeposit
        onChange={handleChange}
        isDeposit={isDeposit}
        enoughFunds={enoughFunds}
        setEnoughFunds={setEnoughFunds}
      ></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById('root'));
