class Peer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='roomyDiv'>
        {this.props.name} <button type='button' className='btn btn-primary btn-sm' onClick={() => alert(`${this.props.name} says: 'You\'re on your own, bro!'`)}>Ask For Help</button> <button type='button' className='btn btn-warning btn-sm'>Part Ways</button>
      </div>
    );
  }
}

window.Peer = Peer;
