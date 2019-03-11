import React from 'react';
import ReactDOM from 'react-dom';

const Login = props => (
  <form>
    <input value={props.username} onChange={props.nameChange} />
    <input value={props.password} onChange={props.passwordChange} />

    {/* Challenge Solution version */}
    {/* <input value={props.username} onChange={props.bothChange} name='username' />
    <input value={props.password} onChange={props.bothChange} name='password' />  */}

    <button onClick={props.submitHandler}> submit </button>
  </form>
);

const Inventory = props => (
  <div>
    <h1>Book List</h1>
    {props.bookList.map(book => (
      <Book title={book.title} author={book.author} key={book.id} />
    ))}
  </div>
);

const Book = props => (
  <div>
    <h2>Title: {props.title}</h2>
    <p>Author: {props.author}</p>
  </div>
);

class Library extends React.Component {
  state = {
    books: [
      { title: 'Harry Potter', author: 'JK Rowling', id: 0 },
      { title: 'Universe in a Nutshell', author: 'Stephen Hawking', id: 1 },
      { title: 'Design Principles', author: 'Gang of Four', id: 2 },
      { title: 'Lexicon', author: 'Max Barry', id: 3 },
      { title: 'The Codex', author: 'Lev Grossman', id: 4 },
      { title: 'Song of Solomon', author: 'Toni Morrison', id: 5 }
    ],
    username: '',
    password: '',
    isLoggedIn: false
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  };

  usernameChange = event => {
    this.setState({ username: event.target.value });
  };

  passwordChange = event => {
    this.setState({ password: event.target.value });
  };

  // Challenge
  //   userAndPassChange = (event) => {
  //     this.setState({ [event.target.name]: event.target.value });
  //   }

  render() {
    return !this.state.isLoggedIn ? (
      <Login
        submitHandler={this.handleSubmit}
        nameChange={this.usernameChange}
        username={this.state.username}
        passwordChange={this.passwordChange}
        password={this.state.password}

        // bothChange={this.userAndPassChange}
      />
    ) : (
      <div>
        <Inventory bookList={this.state.books} />
      </div>
    );
  }
}

ReactDOM.render(<Library />, document.getElementById('root'));
