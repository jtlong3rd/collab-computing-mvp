class Request extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      {this.props.name} <button type='button' className='btn btn-success btn-sm' onClick={() => this.props.addRequest(this.props.name)}>Accept</button> <button type='button' className='btn btn-danger btn-sm' onClick={() => this.props.removeRequest(this.props.name)}>Decline</button>
      </div>
    );
  }
}

window.Request = Request;
