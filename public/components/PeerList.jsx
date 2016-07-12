class PeerList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Peer List</h3>
        <ul>
          <Peer name='Lindsey' />
        </ul>
      </div>
    );
  }
}

window.PeerList = PeerList;
