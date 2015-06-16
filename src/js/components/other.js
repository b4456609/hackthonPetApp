var React = require('react');
import PetList from './pet-list'
var Other = React.createClass({

  getInitialState: function () {
    return {
      pets: []
    };
  },
  componentDidMount: function () {
    console.log('componentDidMount');
    var url = 'http://140.121.197.135:11116/Animal/Animal?type=2';
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
      success: function (result) {
        console.log(result);
        if (self.isMounted()) {
          self.setState({
            pets: result
          });
        }

      }
    });
  },
  render: function () {
    return (
      <div>
        <PetList pets={this.state.pets}/>
      </div>
    );
  }

});

module.exports = Other;
