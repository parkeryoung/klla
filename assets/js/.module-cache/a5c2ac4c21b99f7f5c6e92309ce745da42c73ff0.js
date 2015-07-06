var Index = React.createClass({displayName: "Index",
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
    React.createElement(GrievanceIndex, {grievances: this.props.grievances})
  }
});

$(document).ready(function($) {
  React.render(
    React.createElement(Index, {url: "/grievances"}),
    document.getElementById('index')
  );
});
