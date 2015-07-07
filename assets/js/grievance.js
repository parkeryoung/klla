var Grievance = React.createClass({displayName: "Grievance",

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
      React.createElement("div", null, 
        React.createElement("p", {className: "up"}, "Up"), 
        this.props.up, 
        React.createElement("p", {className: "down"}, "Down"), 
        this.props.down, 
        React.createElement("p", null, 
          this.props.text
        )
      )
    )
  }
});
