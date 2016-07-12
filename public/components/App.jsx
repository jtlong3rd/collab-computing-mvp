class App extends React.Component {
  constructor() {
    super();

    this.state = {
      computations: [],
      peers: [],
      requests: ['Befriend Chell', 'Befriend Wheatley', 'fib 6', 'nRooks 5'],
    };
  }

  addRequest(request) {
    var [action, parameter] = request.split(' ');

    if (action === 'Befriend') {
      this.setState({peers : _.uniq(this.state.peers.concat(parameter))});
    } else {
      this.setState({computations : this.state.computations.concat(`${action}(${parameter}) = ${this.functionLookup(action)(Number(parameter))}`)});
    }

    this.removeRequest(request);
  }

  removeRequest(request) {
    this.setState({requests: _.without(this.state.requests, request)});
  }

  functionLookup(name) {
    if (name === 'fib') {
      return fib;
    } else {
      return nRooks;
    }
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
              <RequestList requests={this.state.requests} addRequest={this.addRequest.bind(this)} removeRequest={this.removeRequest.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var fib = function(n, secLast=1, last=1) {
  if (n === 1) {
    return secLast;
  }

  if (n === 2) {
    return last;
  }

  return fib(n - 1, last, secLast + last);
};

var nRooks = function(n, prev=1) {
  if (n === 0) {
    return prev;
  }

  return nRooks(n - 1 , n * prev);
};

window.App = App;
