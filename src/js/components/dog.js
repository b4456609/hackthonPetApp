var React = require('react');
import PetList from './pet-list'

import MUI   from 'material-ui';

var LinearProgress = MUI.LinearProgress;

var Dogs = React.createClass({

  getInitialState: function () {
    return {
      pets: [],
      isLoading: true
    };
  },
  componentDidMount: function () {
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
      success: function (result) {
        console.log(result);
        if (self.isMounted()) {
          self.setState({
            pets: result
          });
        }
        this.state.isLoading = false;
      }
    });
  },
  render: function () {

    // if (this.state.isLoading) {
    //   return (
    //       <div>
    //       <CircularProgress mode="indeterminate"/>
    //     </div>
    //   );
    // }

    return (
        <div>
          <LinearProgress mode="indeterminate"  />
          <PetList pets={this.state.pets}/>
        </div>
    );
  }
});

module.exports = Dogs;
