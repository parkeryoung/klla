var IndexInput = React.createClass({displayName: "IndexInput",
  render: function(){
    return (
      React.createElement("form", {onSubmit: this.handleSubmit}, 
        React.createElement("label", null, 
          React.createElement("input", {id: "callOutStupid", name: "text", className: "indexInput", type: "text", placeholder: "stupid"})
        )
      )
    );
  },

  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleSubmit: function(event){
    event.preventDefault();
    $.post("/grievances", { text: $("#callOutStupid").val() })
  }
});

$(document).ready(function($) {
  React.render(
    React.createElement(IndexInput, {url: "/grievances"}),
    document.getElementById('indexInput')
  );

  var socket = io.connect()
  socket.on("New Grievance", function(data) {
    console.log(data);
  })
});

