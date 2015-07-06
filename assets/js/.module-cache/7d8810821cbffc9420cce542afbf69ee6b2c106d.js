var GrievanceIndex = React.createClass({displayName: "GrievanceIndex",
  getInitialState: function (){
    return { grievances:[] }
  },
  render: function(){
    return (
      this.props.grievances.map(function(grievance){
        React.createElement("div", null, 
          React.createElement(Grievance, {text: grievance})
        )
      })
    )
  }
});

$(document).ready(function($) {
  React.render(
    React.createElement(GrievanceIndex, null),
    document.getElementById('index')
  );
});
