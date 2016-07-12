class RequestList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Request List</h3>
        <ul>
          <Request name='I can haz n-queens for n=100?' />
        </ul>
      </div>
    );
  }
}

window.RequestList = RequestList;
