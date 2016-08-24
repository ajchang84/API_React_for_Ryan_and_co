const App = React.createClass({

  getInitialState: function() {
    return {value: 'Hello!', list:[]};
  },

  componentWillMount() {
    $.getJSON('/api/list/').done(function(data) {
      this.setState({
        list: data
      }) 
    }.bind(this))
  },

  add() {
    $.getJSON('/api/list/'+ this.state.value).done(function(data) {
      this.setState({
        list: data
      }) 
    }.bind(this))
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render() {
    var list = this.state.list.map(function(item, index){
      return <p key={index}>{item}</p>;
    })
    return (
      <div className="container">
        <h1>Hello API World</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.add}>Add!</button>
        <span> {this.state.value} </span>
        {list}
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('root'));