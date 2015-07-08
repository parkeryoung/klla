var Grievance = React.createClass({
  getInitialState: function() {
    console.log(this.props);
    return(this.props);
  },

  componentDidMount: function() {
    this.bindSocket();
  },

  bindSocket: function() {
    socket = io.connect("/"+this.props.id);
    console.log(socket);
    self = this
    socket.on("clientVoteUpdate", function(data) {
      console.log(this, socket);
      self.setState(data["attributes"]);
    });
  },

  upVote: function() {
    socket = io.connect();
    state = { up: this.state.up + 1 };
    this.setState(state);
    console.log(state);
    socket.emit("vote", { id: this.props.id, attributes: state })
  },

  downVote: function() {
    socket = io.connect();
    state = { down: this.state.down + 1 };
    this.setState(state);
    console.log(state);
    socket.emit("vote", { id: this.props.id, attributes: state })
  },

  render: function(){
    return (
      <div>
        <p className="up" onClick={this.upVote}>Up</p>
        { this.state.up - this.state.down }
        <p className="down" onClick={this.downVote}>Down</p>
        <p>
          {this.props.text}
        </p>
      </div>
    )
  }
});
