class Computation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}

window.Computation = Computation;
