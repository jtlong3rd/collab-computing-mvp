class Request extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}

window.Request = Request;
