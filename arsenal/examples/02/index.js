var Counter = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    };
  },

  handleClick: function () {
    this.setState({
      count: this.state.count + 1
    });
  },

  render: function () {
    return (
      <button
        onClick={this.handleClick}>
      click me ! count: {this.state.count}
      </button>
    );
  }
});

ReactDOM.render(<Counter/>, document.getElementById('container'));
