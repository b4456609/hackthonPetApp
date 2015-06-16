var React = require('react');
import MUI   from 'material-ui';
const Paper = MUI.Paper;
const RaisedButton = MUI.RaisedButton;

var Info = React.createClass({
  render: function() {
    var pet = JSON.parse(localStorage.getItem("pet"));
    console.log(pet);
    var email = 'mailto:' + pet.Email;
    var phone = 'tel:' + pet.Phone;
    return (
      <div className="content">
      <Paper zDepth={1}
        innerClassName='info'>
      <img src={pet.ImageName} alt="boohoo" className="img-responsive"/>
      <p>
      名稱: {pet.Name}<br></br>
      性別: {pet.Sex}<br></br>
      動物種類: {pet.Type}<br></br>
      體型: {pet.Build}<br></br>
      年齡: {pet.Age}<br></br>
      品種: {pet.Variety}<br></br>
      晶片號碼: {pet.ChipNum}<br></br>
      數量: {pet.AcceptNum}<br></br>
      進所原因: {pet.Reason}<br></br>
      體重: {pet.Bodyweight}<br></br>
      毛色: {pet.HairType}<br></br>
      描述: {pet.Note}<br></br>
      可否與其他動物相處: {pet.AnimalAnlong}<br></br>
      可否與其他孩童相處: {pet.ChildreAnlong}<br></br>
      位置: {pet.Resettlement}<br></br>
      聯絡電話: {pet.Phone}<br></br>
      聯絡Email: {pet.Email}<br></br>
        </p>
        <table style={{width: '100%'}}>
        <tr>
          <td style={{'text-align': 'center'}}>
          <RaisedButton linkButton={true} href={phone} secondary={true} label="聯絡電話" />
          </td>
          <td style={{'text-align': 'center'}}>
          <RaisedButton linkButton={true} href={email} secondary={true} label="聯絡Email" />
          </td>
          </tr>
        </table>
        </Paper>
      </div>
    );
  }

});

module.exports = Info;
