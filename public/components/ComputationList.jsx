class ComputationList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Computations You've Helped Pwn</h3>
        {this.props.computations.map((comp, index) => <Computation name={comp} key={index} />)}
      </div>
    );
  }
}

window.ComputationList = ComputationList;
