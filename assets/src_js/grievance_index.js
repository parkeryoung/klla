var GrievanceIndex = React.createClass({
  getInitialState: function(){
    return { grievances: [] }
  },

  render: function(){
    grievances = this.props.grievances.map(function(grievance){
      return (
        <Grievance text={grievance.text} id={grievance.id} up={grievance.up} down={grievance.down} />
      );
    });
    return (
      <div className="GrievanceIndex">
        {grievances}
      </div>
    )
  }
});
