import React from 'react';
import MUI   from 'material-ui';

const Paper = MUI.Paper;

var PetList = React.createClass({
  render: function() {
    console.log('PetList render');

    return (
      <div className="content">
            {
                this.props.pets.map(function(pet) {
                    return (
                      <Paper zDepth={1}
                        innerClassName='text-card'>
                        <img src={pet.ImageName} alt="boohoo" className="img-responsive"/>
                        <p>類型:{pet.Type}<br></br>
                          性別:{pet.Sex}<br></br>
                          種類:{pet.Variety}<br></br>
                          原因:{pet.Reason}<br></br>
                          註解:{pet.Note}
                          </p>
                      </Paper>
                    );
                })
            }
          </div>
        );
  }

});

module.exports = PetList;
