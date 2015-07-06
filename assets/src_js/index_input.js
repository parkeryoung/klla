var IndexInput = React.createClass({
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input id="callOutStupid" name="text" className="indexInput" type="text" placeholder="stupid" />
        </label>
      </form>
    );
  },

  handleSubmit: function(event){
    event.preventDefault();
    $.post("/grievances", { text: $("#callOutStupid").val() })
  }
});

$(document).ready(function($) {
  React.render(
    <IndexInput />,
    document.getElementById('indexInput')
  );
});

