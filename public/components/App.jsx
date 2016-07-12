class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className='jumbotron'>
          <div className='row'>
            <div className='col-md-offset-1 col-md-6'>
              <h1>CollabCompingFTW</h1>
            </div>
          </div>
        </div>

        <div className='jumbotron'>
          <div className='row'>
            <div className='col-md-offset-1 col-md-3'>
              <ComputationList />
            </div>
            <div className='col-md-offset-1 col-md-3'>
              <PeerList />
            </div>
            <div className='col-md-offset-1 col-md-3'>
              <RequestList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;
