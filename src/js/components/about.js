var React = require('react');

var About = React.createClass({

  render: function() {
    return (
      <AppCanvas predefinedLayout={1}>
        <AppBar onMenuIconTapped={this.toggleLeftNavi}>
        </AppBar>
        <LeftNavi ref="leftNav" />

        <div className="content">
          <ImageCard />
          <ChartCard />
        </div>
      </AppCanvas>
    );
  }

});

module.exports = About;
