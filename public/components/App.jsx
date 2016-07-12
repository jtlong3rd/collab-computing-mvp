class App extends React.Component {
  constructor() {
    super();

    this.state = {
      computations: ['Solve ALL THE N-QUEENS', 'Annoy fun-fun-function'],
      peers: ['Chell', 'Wheatley'],
      requests: ['I can haz n-queens?', 'fib(232) plz?']
    };
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
              <RequestList requests={this.state.requests} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;
