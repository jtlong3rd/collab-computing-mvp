class Computation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='roomyDiv'>
        {this.props.name}
      </div>
    );
  }
}

window.Computation = Computation;
