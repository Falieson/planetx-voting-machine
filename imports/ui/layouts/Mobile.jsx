import {Component}  from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';

import Header         from './Header.jsx';

// Mobile Layout - mobile first design for mvp
export default class MobileLayout extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col type="row" xs={12}>
            <Header />
          </Col>
        </Row>
        {this.props.children}
      </Grid>
    );
  }
}
