var IndexInput = React.createClass({displayName: "IndexInput",
  render: function(){
    return (
      React.createElement("form", {onSubmit: this.handleSubmit}, 
        React.createElement("label", null, 
          React.createElement("input", {className: "indexInput", type: "text", placeholder: "stupid"})
        )
      )

    );
  },

  handleSubmit: function(){
    console.log("hello");
  }
});

$(document).ready(function($) {
  React.render(
    React.createElement(IndexInput, null),
    document.getElementById('indexInput')
  );
});

