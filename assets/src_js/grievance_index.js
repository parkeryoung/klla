var GrievanceIndex = React.createClass({
  getInitialState: function(){
    socket = io.connect();
    socket.on("New Grievance", function(data) {
      console.log(data);
    });
  }
  render: function(){
    grievances = this.props.grievances.map(function(grievance){
      return (
        <Grievance text={grievance.text} />
      );
    });
    return (
      <div className="GrievanceIndex">
        {grievances}
      </div>
    )
  }
});
