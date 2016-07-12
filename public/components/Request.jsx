class Request extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li>{this.props.name} <button type='button' className='btn btn-success'>Accept</button> <button type='button' className='btn btn-danger'>Decline</button></li>
    );
  }
}

window.Request = Request;
