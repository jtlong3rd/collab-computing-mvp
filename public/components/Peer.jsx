class Peer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}

window.Peer = Peer;
