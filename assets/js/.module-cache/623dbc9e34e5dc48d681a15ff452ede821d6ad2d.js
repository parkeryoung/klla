var GrievanceIndex = React.createClass({displayName: "GrievanceIndex",
  render: function(){
    this.props.grievances.map(function(grievance){
      return (
        React.createElement(Grievance, {grievance: grievance})
      );
    });
    return (
      React.createElement("div", {className: "GrievanceIndex"}, 
        grievances
      )
    )
  }
});
