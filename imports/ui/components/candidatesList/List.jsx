import _ from 'lodash';

import React, {Component, PropTypes} from 'react';

import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

let SelectableList = MakeSelectable(List);
function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}
SelectableList = wrapState(SelectableList);

export default class CandidatesList extends Component {
  render() {
    const style = {
      height: "100%",
      maxHeight: "500px",
      padding: "10px",
      width: "350px",
      margin: "10px",
      textAlign: 'center',
      display: 'inline-block',
      verticalAlign: 'top',
    };

    return (
      <SelectableList defaultValue={0}>
        {this.renderListHeader()}
        {this.renderListItems()}
      </SelectableList>
    );
  }

  renderListHeader() {
    return (
      <Subheader>Select your choice for President</Subheader>
    );
  }

  renderListItems() {
    const items = this.props.items;

    if(items && items.length > 0) {
      // console.log(`Found ${items.length} Items`);

      function picture(imageUrl) {
        return (
          <Avatar src={imageUrl}/>
        );
      }

      const result = items.map( (item)=> {
        const currKey = !item._id? Random.id() : item._id;
        const title = item.name.formal;

        return (
          <ListItem
            key           = {currKey}
            value         = {currKey}
            primaryText   = {title}
            leftAvatar    = {picture(item.image)}
            onTouchTap    = {this.handleCandidateSelect.bind(this, currKey)}
          />
        );

      } );

      // console.log("Created: ", result[0]);

      return result;
    }

    else {
      return (<p>Loading ....</p>);
    }
  }

  handleCandidateSelect(id) {
    event.preventDefault();
    this.props.onSelect(id)
  }
}

CandidatesList.propTypes = {
  items:    PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
}
