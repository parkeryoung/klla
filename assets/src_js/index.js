var GrievanceIndex = React.createClass({
  getInitialState: function (){
    return { grievances:[] }
  },

  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({grievances: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function(){
    return (
      this.props.grievances.map(function(grievance){
        <div>
          <Grievance text={grievance.text}/>
        </div>
      });
    )
  }
});

$(document).ready(function($) {
  React.render(
    <GrievanceIndex url="/grievances"/>,
    document.getElementById('index')
  );
});
