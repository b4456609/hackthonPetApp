import React from 'react';
import MUI   from 'material-ui';

const AppBar = MUI.AppBar;

export default React.createClass({

    propTypes: {
      onMenuIconTapped:   React.PropTypes.func.isRequired
    },

    render() {
        return (
            <AppBar
              onMenuIconButtonTouchTap={this.props.onMenuIconTapped}
              title='寵物領養' zDepth={1}>
            </AppBar>
        );
    }
});
