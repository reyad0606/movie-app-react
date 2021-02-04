import React from 'react';

function SearchBox(props) {
  return (
    <div className='col col-sm-4'>
      <input
        className='form-control'
        placeholder='Type to search'
        value={props.value}
        onChange={(e) => props.setSearchValue(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBox;
