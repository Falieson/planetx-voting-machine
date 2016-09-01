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

const CandidatesList = () => (
  <SelectableList defaultValue={0}>
    <Subheader>Select your choice for President</Subheader>
    <ListItem
      value={0}
      primaryText="S.O.S. Clinton"
      leftAvatar={<Avatar src="/images/HillaryClinton.jpg" />}
    />
    <ListItem
      value={1}
      primaryText="Sen. Sanders"
      leftAvatar={<Avatar src="/images/BernieSanders.jpg" />}
    />
  </SelectableList>
);

export default CandidatesList;
