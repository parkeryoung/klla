IndexForm = React.createClass({displayName: "IndexForm",
  render: function(){
    return(React.createElement("input", {placeholder: "stupid"}));
  }
});

React.render(
  React.createElement(IndexForm, null),
  $("#root")
);
