import React from 'react';
import SearchForm from '../SearchPage/SearchForm.js';
import Result from '../SearchPage/Result.js';
import NoResults from '../SearchPage/NoResult.js';
import $ from 'axios';

class SearchPage extends React.Component {
  state = {
    restaurants: [],
    results: [],
    input: ''
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    const restaurantsFiltered = this.state.restaurants.filter(place =>
      place.categories.includes(this.state.input)
    );
    this.setState({ results: restaurantsFiltered });
  };

  componentDidMount() {
    $.get('https://hidden-eyrie-35719.herokuapp.com/api/restaurants').then(
      result => {
        this.setState({ restaurants: result.data });
      }
    );
  }

  render() {
    return (
      <div>
        <SearchForm
          changeHandler={this.handleChange}
          clickHandler={this.handleClick}
          value={this.state.input}
        />

        {this.state.results.length === 0 ? (
          <NoResults />
        ) : (
          this.state.results.map((place, i) => (
            <Result name={place.name} key={i} />
          ))
        )}
      </div>
    );
  }
}

export default SearchPage;
