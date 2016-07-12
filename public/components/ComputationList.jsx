class ComputationList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Computation List</h3>
        <ul>
          <Computation name='Solve ALL THE N-QUEENS' />
        </ul>
      </div>
    );
  }
}

window.ComputationList = ComputationList;
