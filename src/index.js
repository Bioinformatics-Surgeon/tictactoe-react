import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = props => (
  <button className={props.buttonStyle} onClick={props.handler}>
    {props.text}
  </button>
);

const Display = props => <div> {props.count} </div>;

const Form = props => (
  <form>
    <input value={props.value} onChange={props.changeHandler} />
    <button onClick={props.submitHandler}> submit </button>
  </form>
);

const Message = props => (
  <div>
    <h1>Congrats!</h1>
    <p>
      {' '}
      Your counter is complete! You did it! I'm not totally clear on why I'm
      congratulating you for clicking a button a bunch of times. Also there's a
      good chance you skipped the hard work and just put the number straight
      into the input. But nonetheless, yipee!
    </p>
  </div>
);

class App extends React.Component {
  state = {
    count: 0,
    input: ''
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ count: this.state.input });
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return this.state.count >= 10 ? (
      <Message />
    ) : (
      <div>
        <Display count={this.state.count} />
        <Button
          buttonStyle="red"
          text="Click Here"
          handler={this.handleClick}
        />
        <Form
          submitHandler={this.handleSubmit}
          changeHandler={this.handleChange}
          value={this.state.input}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
