var IndexInput = React.createClass({displayName: "IndexInput",
  render: function(){
    return (
      React.createElement("form", null, 
        React.createElement("label", null, 
          React.createElement("input", {className: "indexInput", type: "text", placeholder: "stupid"})
        )
      )

    );
  },

  handleClick: function(){
    console.log("hello");
  }
});

$(document).ready(function($) {
  React.render(
    React.createElement(IndexInput, null),
    document.getElementById('indexInput')
  );
});

