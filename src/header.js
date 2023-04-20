import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header() {
  return (
    <AppBar style={{ background: '#60a8f0'}}>
      <Toolbar>
        <Typography variant="h4" style={{ marginLeft: "650px", fontFamily: "fantasy" }}>
          Q U O T E &ensp;&ensp;T R A C K S
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
