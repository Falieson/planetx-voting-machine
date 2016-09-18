// https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
// iPhone 6+ :: landscape width: 736px
// mvp will be a portrait solution that will still look ok if the user puts
//  their iphone 6+ in landscape mode
import { Meteor }     from 'meteor/meteor';
import { Component }  from 'react';

import Header         from './Header.jsx';

// Mobile Layout - mobile first design for mvp
export default class MobileLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
