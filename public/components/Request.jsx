class Request extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      {this.props.name} <button type='button' className='btn btn-success btn-sm'>Accept</button> <button type='button' className='btn btn-danger btn-sm'>Decline</button>
      </div>
    );
  }
}

window.Request = Request;
