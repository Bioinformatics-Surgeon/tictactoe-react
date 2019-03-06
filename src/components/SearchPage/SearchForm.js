import React from 'react';

const SearchForm = props => (
  <form>
    <input
      name={props.name}
      value={props.value}
      onChange={props.changeHandler}
    />
    <button onClick={props.clickHandler}>Submit</button>
  </form>
);

export default SearchForm;
