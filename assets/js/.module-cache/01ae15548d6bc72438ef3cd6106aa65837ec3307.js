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

  handleSubmit: function(event){
    event.preventDefault();
    $.post("/grievances", { text: $("#callOutStupid").val() })
  }
});

$(document).ready(function($) {
  React.render(
    React.createElement(IndexInput, null),
    document.getElementById('indexInput')
  );
});

