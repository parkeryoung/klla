IndexForm = React.createClass({displayName: "IndexForm",
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
