var GrievanceIndex = React.createClass({displayName: "GrievanceIndex",
  getInitialState: function(){
    return { grievances: [] }
  },

  render: function(){
    grievances = this.props.grievances.map(function(grievance){
      return (
        React.createElement(Grievance, {text: grievance.text, id: grievance.id, up: grievance.up, down: grievance.down})
      );
    });
    return (
      React.createElement("div", {className: "GrievanceIndex"}, 
        grievances
      )
    )
  }
});
