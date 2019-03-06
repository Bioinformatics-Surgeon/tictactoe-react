import React from 'react';
import SearchForm from '../SearchPage/SearchForm.js'
import Result from '../SearchPage/Result.js'

class SearchPage extends React.Component {
  state = {
    restaurants: [
      {
        name: 'Waffle House',
        price: '$',
        rating: '4',
        categories: ['diner', 'breakfast']
      },
      {
        name: 'Huddle House',
        price: '$',
        rating: '1',
        categories: ['diner', 'breakfast']
      },
      {
        name: 'International House of Pancakes',
        price: '$$',
        rating: '2',
        categories: ['casual', 'breakfast']
      },
      {
        name: 'White Castle',
        price: '$',
        rating: '4',
        categories: ['fast food', 'burgers']
      },
      {
        name: 'Rookery',
        price: '$$',
        rating: '3',
        categories: ['burgers', 'casual', 'american']
      },
      {
        name: 'Dove Tail',
        price: '$$$',
        rating: '3',
        categories: ['upscale', 'american']
      },
      {
        name: 'Burger King',
        price: '$',
        rating: '2',
        categories: ['fast food', 'burgers']
      },
      {
        name: 'Krystal',
        price: '$',
        rating: '3',
        categories: ['fast food', 'burgers']
      }
    ],
    results: [],
    input: ''
  }

  render () {
    return (
      <div>
        <SearchForm />
        <Result />
      </div>
    )
  }

}

export default SearchPage;
