class PeerList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Peer List</h3>
        <ul>
          {this.props.peers.map((peer, index) => <Peer name={peer} key={index} />)}
        </ul>
      </div>
    );
  }
}

window.PeerList = PeerList;
