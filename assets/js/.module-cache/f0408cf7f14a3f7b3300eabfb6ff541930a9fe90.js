var IndexForm = React.createClass({displayName: "IndexForm",
  render: function(){
    return (
      React.createElement("input", {className: "indexForm", type: "text", placeholder: "stupid"})
    );
  }
});

$(document).ready(function($) {
  React.render(
    React.createElement(IndexForm, null),
    $("#root")
  );
});

// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//         Hello, world! I am a CommentBox.
//       </div>
//     );
//   }
// });
// React.render(
//   <CommentBox />,
//   document.getElementById('root')
// );
