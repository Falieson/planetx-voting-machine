import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
  <div>
    <Paper style={style} circle={true} zDepth={1} />
    <Paper style={style} circle={true} zDepth={2} />
    <Paper style={style} circle={true} zDepth={3} />
    <Paper style={style} circle={true} zDepth={4} />
    <Paper style={style} circle={true} zDepth={5} />
  </div>
);

export default PaperExampleSimple;
