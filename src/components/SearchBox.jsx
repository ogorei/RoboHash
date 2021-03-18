import React from 'react';

const SearchBox= ({searchChange})=>{
    return (
      <div className="pa4">
        <input className="pa3 ba b--greeen bg-lightest-blue" type="search" onChange={searchChange} placeholder="ロボットを検索"></input>
      </div>
    );
}

export default SearchBox;