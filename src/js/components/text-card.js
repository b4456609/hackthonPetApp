import React from 'react';
import MUI   from 'material-ui';

const Paper = MUI.Paper;

export default React.createClass({
    render() {
        return (
          <Paper zDepth={1}
            innerClassName='text-card'>
            <p>測試測試測試測試 測試測試 測試測試 測試</p>
          </Paper>
        );
    }
});
