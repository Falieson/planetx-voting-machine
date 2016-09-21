import _ from 'lodash';

import {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

let SelectableList = MakeSelectable(List);
function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.string.isRequired,
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

class CandidatesList extends Component {
  render() {
    return (
      <SelectableList defaultValue={this.props.candidateId}>
        <Subheader>Select your Top 3-choices for President</Subheader>
        {this.renderListItems()}
      </SelectableList>
    );
  }

  renderListItems() {
    const items = this.props.items;

    if(items && items.length > 0) {

      function picture(imageUrl) {
        return (
          <Avatar src={imageUrl}/>
        );
      }

      const result = items.map((item)=> {
        const currKey = item._id? item._id : Random.id();
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

      });

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

function mapStoreToProps(store) {
  const { Ballot } = store;

  const {
    candidateId,
  } = Ballot || {
    candidateId: ''
  }

  return {
    candidateId
  }
}

export default connect(mapStoreToProps)(CandidatesList)
