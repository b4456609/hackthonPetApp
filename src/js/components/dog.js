var React = require('react');
import PetList from './pet-list'

var Dogs = React.createClass({

    getInitialState: function() {
      return {pets: []};
    },
  componentDidMount: function() {
    navigator.notification.activityStart('', '讀取中');
    console.log('componentDidMount');
    var url = 'http://140.121.197.135:11116/Animal/Animal?type=1';
    var self = this;
    // $.get(url, function(result) {
    //   console.log(result);
    //   if (this.isMounted()) {
    //     this.setState({
    //       pets: result
    //     });
    //   }
    // }.bind(this));

    $.ajax({
    type: "GET",
    url: url,
    success: function(result) {
      console.log(result);
      if(self.isMounted()){
        self.setState({
          pets: result
        });
      }    navigator.notification.activityStop();

      }

  });
},
  render: function() {
    return (<div>
      <PetList pets={this.state.pets}/>
      </div>
    );
  }

});

module.exports = Dogs;
