class RequestList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Request List</h3>
        {this.props.requests.map((request, index) => <Request name={request} key={index} addRequest={this.props.addRequest} removeRequest={this.props.removeRequest} />)}
      </div>
    );
  }
}

window.RequestList = RequestList;
