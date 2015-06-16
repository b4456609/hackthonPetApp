import React from 'react';
import MUI   from 'material-ui';
var Navigation = require('react-router').Navigation;

const Paper = MUI.Paper;

var PetList = React.createClass({
  mixins: [Navigation],
  render: function() {
    console.log('PetList render');
    var ref = this;
    return (
      <div className="content">
            {
                this.props.pets.map(function(pet, i) {
                    return (
                      <Paper zDepth={1}
                        innerClassName='text-card' onClick={ref.handleClick.bind(ref, i)} key={i}>
                        <img src={pet.ImageName} alt="boohoo" className="img-responsive"/>
                        <p>性別: {pet.Sex}<br></br>
                        動物種類: {pet.Type}<br></br>
                        體型: {pet.Build}<br></br>
                        年齡: {pet.Age}<br></br>
                        品種: {pet.Variety}<br></br>
                          </p>
                      </Paper>
                    );
                })
            }
          </div>
        );
  },
  handleClick: function(i){
    var pet = this.props.pets[i];
    console.log('You clicked: ');
    console.log(pet);
    localStorage.setItem("pet", JSON.stringify(pet));
    this.replaceWith('info');
  }
}
);

module.exports = PetList;
