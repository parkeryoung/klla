var IndexForm = React.createClass({displayName: "IndexForm",
  render: function(){
    return(React.createElement("input", {placeholder: "stupid"}));
  }
});

$(document).ready(function($) {
  React.render(
    React.createElement(IndexForm, null),
    $("#root")
  );
});

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello, world! I am a CommentBox."
      )
    );
  }
});
React.render(
  React.createElement(CommentBox, null),
  document.getElementById('root')
);
