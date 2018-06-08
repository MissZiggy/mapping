import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ReactFileDrop from './ReactFileDrop'
import Autocomplete from './Autocomplete';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes, onSuggestionSelected, onUndoMarker, onClearMarkers, onFileDrop } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Mapping Experiments
          </Typography>
          <ReactFileDrop onFileDrop={onFileDrop}/>
          <IconButton className={classes.button} aria-label="Clear Markers" onClick={onClearMarkers}>
            <Icon>clear</Icon>
          </IconButton>          
          <IconButton className={classes.button} aria-label="Undo Last Marker"  onClick={onUndoMarker}>
            <Icon>undo</Icon>
          </IconButton>
          <Autocomplete onSuggestionSelected={onSuggestionSelected}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onSuggestionSelected: PropTypes.func,
  onUndoMarker: PropTypes.func,
  onClearMarkers: PropTypes.func 
};

export default withStyles(styles)(ButtonAppBar);