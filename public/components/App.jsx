class App extends React.Component {
  constructor() {
    super();

    this.state = {
      computations: ['Solve ALL THE N-QUEENS', 'Annoy fun-fun-function'],
      peers: ['Chell', 'Wheatley'],
      requests: ['Befriend Lindsey', 'fib 232']
    };
  }

  acceptRequest(requestText) {
    [action, parameter] = requestText.split(' ');

    if (action === 'Befriend') {
      this.setState({peers : _.uniq(this.state.peers.concat(parameter))});
    } else {
      this.setState({computations : this.state.computations.concat(`${action} ${parameter}`)});
    }
  }

  removeRequest(request) {
    this.setState({requests: _.without(this.state.requests, request)});
  }

  render() {
    return (
      <div>
        <div className='jumbotron'>
          <h1 className='text-md-center'>CollabCompingFTW</h1>
        </div>

        <div className='jumbotron'>
          <div className='row'>
            <div className='col-md-3'>
              <ComputationList computations={this.state.computations} />
            </div>
            <div className='col-md-offset-1 col-md-3'>
              <PeerList peers={this.state.peers} />
            </div>
            <div className='col-md-offset-1 col-md-3'>
              <RequestList requests={this.state.requests} removeRequest={this.removeRequest.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;
