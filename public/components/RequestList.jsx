class RequestList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Request List</h3>
        <ul>
          {this.props.requests.map((request, index) => <Request name={request} key={index} />)}
        </ul>
      </div>
    );
  }
}

window.RequestList = RequestList;
