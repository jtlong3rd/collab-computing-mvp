class ComputationList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Computation List</h3>
        <ul>
          {this.props.computations.map((comp, index) => <Peer name={comp} key={index} />)}
        </ul>
      </div>
    );
  }
}

window.ComputationList = ComputationList;
