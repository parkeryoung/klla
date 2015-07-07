var Grievance = React.createClass({

  componentDidMount: function() {
    this.arrows();
    this.bindSocket();
  },

  bindSocket: function() {
    socket = io.connect();
  },

  arrows: function() {
    self = this
    $(this.getDOMNode()).find(".up").on("click", function(e){
      socket = io.connect();
      console.log(self);
      socket.emit("vote", { up: self.props.up + 1, id: self.props.id })
    });

    self = this
    $(this.getDOMNode()).find(".down").on("click", function(e){
      socket = io.connect();
      socket.emit("vote", { down: self.props.down + 1, id: self.props.id })
    });
  },

  render: function(){
    return (
      <div>
        <p className="up">Up</p>
        {this.props.up}
        <p className="down">Down</p>
        {this.props.down}
        <p>
          {this.props.text}
        </p>
      </div>
    )
  }
});
