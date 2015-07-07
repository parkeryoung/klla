var Index = React.createClass({displayName: "Index",
  getInitialState: function (){
    return { grievances:[] }
  },

  componentDidMount: function() {
    this.loadViaAjax();
    this.bindSocket();
  },

  render: function(){
    return(React.createElement(GrievanceIndex, {grievances: this.state.grievances}))
  },

  loadViaAjax: function() {
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

  bindSocket: function(){
    socket = io.connect();
    parent = this
    socket.on("New Grievance", function(data) {
      state = parent.state
      state.grievances.push(data);
      parent.setState(data);
    });
  }
});

$(document).ready(function($) {
  React.render(
    React.createElement(Index, {url: "/grievances"}),
    document.getElementById('index')
  );
});
