var Index = React.createClass({displayName: "Index",
  render: function(){
    return (
      React.createElement("div", null, 
        "Hello"
      )
    )
  }
});

$(document).ready(function($) {
  React.render(
    React.createElement(Index, null),
    document.getElementById('index')
  );
});
