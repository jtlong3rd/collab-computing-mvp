class Peer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.name} <button type='button' className='btn btn-primary btn-sm'>Ask For Help</button>
      </div>
    );
  }
}

window.Peer = Peer;
