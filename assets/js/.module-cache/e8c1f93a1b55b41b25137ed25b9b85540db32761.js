var Grievance = React.createClass({displayName: "Grievance",
  render: function(){
    return (
      React.createElement("p", null, 
        this.props.text
      )
    )
  }
});
