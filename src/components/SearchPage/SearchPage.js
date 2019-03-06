import React from 'react';
import SearchForm from '../SearchPage/SearchForm.js';
import Result from '../SearchPage/Result.js';
import NoResults from '../SearchPage/NoResult.js';

class SearchPage extends React.Component {
  state = {
    restaurants: [
      {
        name: 'Waffle House',
        price: '$',
        rating: '4',
        categories: ['diner', 'breakfast'],
        id: 0
      },
      {
        name: 'Huddle House',
        price: '$',
        rating: '1',
        categories: ['diner', 'breakfast'],
        id: 1
      },
      {
        name: 'International House of Pancakes',
        price: '$$',
        rating: '2',
        categories: ['casual', 'breakfast'],
        id: 2
      },
      {
        name: 'White Castle',
        price: '$',
        rating: '4',
        categories: ['fast food', 'burgers'],
        id: 3
      },
      {
        name: 'Rookery',
        price: '$$',
        rating: '3',
        categories: ['burgers', 'casual', 'american'],
        id: 4
      },
      {
        name: 'Dove Tail',
        price: '$$$',
        rating: '3',
        categories: ['upscale', 'american'],
        id: 5
      },
      {
        name: 'Burger King',
        price: '$',
        rating: '2',
        categories: ['fast food', 'burgers'],
        id: 6
      },
      {
        name: 'Krystal',
        price: '$',
        rating: '3',
        categories: ['fast food', 'burgers'],
        id: 7
      }
    ],
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
          this.state.results.map(place => (
            <Result name={place.name} key={place.id} />
          ))
        )}
      </div>
    );
  }
}

export default SearchPage;
