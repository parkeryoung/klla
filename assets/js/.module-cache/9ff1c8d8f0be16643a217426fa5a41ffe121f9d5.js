var GrievanceIndex = React.createClass({displayName: "GrievanceIndex",
  render: function(){
    grievances = this.props.grievances.map(function(grievance){
      React.createElement("div", null, 
        React.createElement(Grievance, {grievance: grievance})
      )
    });
    React.createElement("div", {className: "GrievanceIndex"}, 
      grievances
    )
  }
});
