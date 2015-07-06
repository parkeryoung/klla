var IndexInput = React.createClass({displayName: "IndexInput",
  render: function(){
    return (
      React.createElement("input", {className: "indexInput", type: "text", placeholder: "stupid"})
    );
  },
});

$(document).ready(function($) {
  React.render(
    React.createElement(IndexInput, null),
    document.getElementById('indexInput')
  );
});

