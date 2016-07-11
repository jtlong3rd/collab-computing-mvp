class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-4">
            <h1>CollabCompingFTW</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <ComputationList />
          </div>
          <div className="col-md-4">
            <PeerList />
          </div>
          <div className="col-md-4">
            <RequestList />
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;
