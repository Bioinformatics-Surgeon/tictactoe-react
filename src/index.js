import React from 'react';
import ReactDOM from 'react-dom';
import './buttonStyle.css';

const Display = props => <div> {props.count} </div>;

class App extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <Display count={this.state.count} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
