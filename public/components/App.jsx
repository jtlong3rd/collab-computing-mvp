class App extends React.Component {
  constructor() {
    super();

    this.state = {
      computations: [],
      peers: ['Alex', 'G-Man'],
      requests: ['Chell: Buddies?', 'Wheatley: Buddies?', 'Freeman: Buddies?'],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => this.setState({ requests: this.state.requests.concat(obtainRequests(1, this.state.peers)) }), 8000)
    });
  }

  componentWillUnmount() {
    closeInterval(this.state.interval);
  }

  addRequest(request) {
    var [peer, query] = request.split(/: /);

    if (query === 'Buddies?') {
      this.setState({ peers: _.uniq(this.state.peers.concat(peer)) });
    } else {
      var [action, parameter] = query.split(/[()]/);
      var answer = this.functionLookup(action)(Number(parameter));

      this.setState({ computations: _.uniq(this.state.computations.concat(`${action}(${parameter}) = ${this.functionLookup(action)(Number(parameter))} (for ${peer})`)) });

      this.saveComputation({ description: request, content: answer });
    }

    this.removeRequest(request);
  }

  removeRequest(request) {
    this.setState({ requests: _.without(this.state.requests, request) });
  }

  removePeer(name) {
    this.setState({
      peers: _.without(this.state.peers, name),
      requests: _.reject(this.state.requests, (request) => request.split(/: /)[0] === name)
    });
  }

  saveComputation(computation) {
    var serverUrl = 'https://collab-comping-ftw.herokuapp.com';
    //var serverUrl = 'http://localhost:1337';

    $.ajax({
      url: `${serverUrl}/api/computation`,
      header: {
        'content-type': 'application/json'
      },
      data: computation,
      type: 'POST',
      success: (data) => console.log('Sucessfully wrote to database ', data),
      error: (err) => console.error('Dude, you blew up the internet: ', err)
    });
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
              <RequestList requests={this.state.requests} addRequest={this.addRequest.bind(this)} removeRequest={this.removeRequest.bind(this)} />
            </div>
            <div className='col-md-offset-1 col-md-3'>
              <ComputationList computations={this.state.computations} />
            </div>
            <div className='col-md-offset-1 col-md-3'>
              <PeerList peers={this.state.peers} removePeer={this.removePeer.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var fib = function(n, secLast = 1, last = 1) {
  if (n === 1) {
    return secLast;
  }

  if (n === 2) {
    return last;
  }

  return fib(n - 1, last, secLast + last);
};

var nRooks = function(n, prev = 1) {
  if (n === 0) {
    return prev;
  }

  return nRooks(n - 1 , n * prev);
};

var obtainRequests = function(n, peers) {
  var functions = ['fib', 'nRooks'];
  var parameters = _.range(5, 10);

  return _.range(n).reduce((requests, next) => {
    var randomFunction = functions[ Math.floor(Math.random() * functions.length) ];
    var randomParameter = parameters[ Math.floor(Math.random() * parameters.length) ];
    var randomPeer = peers[ Math.floor(Math.random() * peers.length) ];
    return requests.concat(`${randomPeer}: ${randomFunction}(${randomParameter})`);
  }, []);
};

window.App = App;
