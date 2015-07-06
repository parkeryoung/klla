var GrievanceIndex = React.createClass({displayName: "GrievanceIndex",
  render: function(){
    grievances = this.props.grievances.map(function(grievance){
      return (
        React.createElement(Grievance, {text: grievance.text})
      );
    });
    return (
      React.createElement("div", {className: "GrievanceIndex"}, 
        grievances
      )
    )
  }
});
