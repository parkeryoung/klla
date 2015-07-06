var GrievanceIndex = React.createClass({displayName: "GrievanceIndex",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(Grievance, null)
      )
    )
  }
});

$(document).ready(function($) {
  React.render(
    React.createElement(GrievanceIndex, null),
    document.getElementById('index')
  );
});
