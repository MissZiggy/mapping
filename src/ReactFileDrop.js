import React, { Component } from 'react';
import FileDrop from 'react-file-drop';
import Icon from '@material-ui/core/Icon';

const styles = { border: '1px solid black', width: 600, color: 'black', padding: 20 };

class ReactFileDrop extends Component {
  handleDrop = (files, event) => {
    console.log(files, event);
    this.props.onFileDrop && this.props.onFileDrop(files, event)
  }

  render() {
    return (
      <div id="react-file-drop-demo" style={{styles}}>
        <FileDrop onDrop={this.handleDrop}>
            <Icon>backup</Icon>
        </FileDrop>
      </div>
    );
  }
}

export default ReactFileDrop;