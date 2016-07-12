class PeerList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Peer List</h3>
        {this.props.peers.map((peer, index) => <Peer name={peer} key={index} removePeer={this.props.removePeer} />)}
      </div>
    );
  }
}

window.PeerList = PeerList;
