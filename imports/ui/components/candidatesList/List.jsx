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

// Connect the store(state)ToProps() to get items = Candidates()
// If Items.length < 1 === LoadingState()
// ListHeader =
// A.1) Test with Displaying Items.length()
// A.2) Get Redux Fetch() Working
// B) Item data in ListItem

// # First create your component function
// Candidate List component - Lists out all the Candidates
export default class CandidatesList extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   const amount =(target)=> target? target.length:0;
  //
  //   this.state = {
  //     candidates: props.items,
  //     candidateAmount: amount(props.items),
  //   };
  // }
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
    function RenderList(items) {
      function picture(imageUrl) {
        return (
          <Avatar src={imageUrl}/>
        );
      }

      return items.map( (item)=> {
        const currKey = !item._id? Random.id() : item._id;
        const title = item.name.formal;

        return (
          // NOTE: I have to add this items={} property to make an error go away
          <ListItem
            key           ={currKey}
            value         ={currKey}
            primaryText   ={title}
            leftAvatar    ={picture(item.image)}
          />
        );

      } );


      // console.log("renderListItems:RenderList=> ", this);
      // const result = _(items).forEach(function(item, dex) {
      //   console.log(`ITEM[${dex}] `, item.name.formal);
      //
      //   return ListItem(dex, item._id, item.name.formal, item.image);
      // });
      //
      // console.log("RESULT> ", result);
      //
      //
      // return result;
    }

    if(this.props.items && this.props.items.length > 0) {
      const result = RenderList(this.props.items);

      return result;
    }
    else {
      return (<p>Loading ....</p>);
    }
  }

}

CandidatesList.propTypes = {
  items: PropTypes.array,
}
