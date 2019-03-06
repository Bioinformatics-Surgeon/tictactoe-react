import React from 'react';
import ReactDOM from 'react-dom';

const Form = props => (
  <form>
    <input value={props.value} onChange={props.changeHandler} />
    <button onClick={props.submitHandler}>Search!</button>
    <button onClick={props.resetHandler}>Reset</button>
  </form>
);

const Inventory = props => (
  <div>
    <h1>Book List</h1>
    {props.bookList.map(book => (
      <Book title={book.title} author={book.author} key={book.id} />
    ))}
    <button onClick={props.handler}> a-z by Title </button>
  </div>
);

const Book = props => (
  <div>
    <h2>Title: {props.title}</h2>
    <p>Author {props.author}</p>
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
    input: ''
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const booksFiltered = this.state.books.filter(
      book => book.title === this.state.input
    );
    this.setState({ books: booksFiltered });
  };

  handleReset = event => {
    event.preventDefault();
    const allBooks = [
      { title: 'Harry Potter', author: 'JK Rowling', id: 0 },
      { title: 'Universe in a Nutshell', author: 'Stephen Hawking', id: 1 },
      { title: 'Design Principles', author: 'Gang of Four', id: 2 },
      { title: 'Lexicon', author: 'Max Barry', id: 3 },
      { title: 'The Codex', author: 'Lev Grossman', id: 4 },
      { title: 'Song of Solomon', author: 'Toni Morrison', id: 5 }
    ];
    this.setState({ books: allBooks });
  };

  clickHandler = () => {
    // Copies the books array from state and stores it in a new Array
    const newArray = this.state.books.concat();

    // Our compare function that will be used in .sort()
    const compareFunction = (a, b) => {
      const titleA = a.title;
      const titleB = b.title;

      let compare = 0;
      if (titleA > titleB) {
        compare = 1;
      } else if (titleA < titleB) {
        compare = -1;
      }

      return compare;
    };

    // Stores our sorted array of objects in a variable called sortedBooks
    const sortedBooks = newArray.sort(compareFunction);

    // We then tell React that the `books` array in our state should be updated to our new array, `sortedBooks`.
    this.setState({ books: sortedBooks });
  };

  render() {
    return (
      <div>
        <Form
          changeHandler={this.handleChange}
          submitHandler={this.handleSubmit}
          resetHandler={this.handleReset}
          value={this.state.input}
        />
        <Inventory bookList={this.state.books} handler={this.clickHandler} />
      </div>
    );
  }
}

ReactDOM.render(<Library />, document.getElementById('root'));
