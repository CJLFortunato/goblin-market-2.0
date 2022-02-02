import React from 'react';


export function SearchBar(): JSX.Element {
    const searchTerm: string = "";

    const onSearchTermChangeHandler = (e: any) => {
        const userInput = e.target.value;
        
    };

    const onClearSearchTermHandler = () => {
        
    };



   return (
        <div className="search-bar">
            <input type="text" 
            placeholder="Search for an item" 
            id="search-input"
            value={searchTerm}
            onChange={onSearchTermChangeHandler}
            />

            {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
        X
        </button>
      )}       
        </div>
   );
}