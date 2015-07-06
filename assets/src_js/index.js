var Index = React.createClass({
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
    return(<GrievanceIndex grievances={this.state.grievances} />)
  }
});

$(document).ready(function($) {
  React.render(
    <Index url="/grievances"/>,
    document.getElementById('index')
  );
});
