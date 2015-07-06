var IndexInput = React.createClass({displayName: "IndexInput",
  render: function(){
    return (
      React.createElement("input", {onClick: this.handleClick, className: "indexInput", type: "text", placeholder: "stupid"})
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

