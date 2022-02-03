import React from 'react';

interface Props {
  searchFilter: (term: string) => void;
}

export function SearchBar({ searchFilter }: Props): JSX.Element {
    let searchTerm: string = "";

    const onSearchTermChangeHandler = (e: any) => {
        const userInput = e.target.value;
        searchFilter(userInput);
        searchTerm= userInput;
    };

    const onClearSearchTermHandler = () => {
      searchFilter("");
      
    };



   return (
        <div className="search-bar">
            <input type="text" 
            placeholder="Search for an item" 
            id="search-input"
            
            onChange={onSearchTermChangeHandler}
            />

            
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
        X
        </button>
           
        </div>
   );
}