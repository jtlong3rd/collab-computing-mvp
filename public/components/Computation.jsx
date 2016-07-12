class Computation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

window.Computation = Computation;
