import React, {useState} from 'react'

/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Search from "./Search";

const SearchBar = () => {

    const [clickSearch, searchClicked] = useState(false);

  return (
      <>
          <Search clickSearch={clickSearch} />
           {/* Fixed positioned right search bar starts here */}
    <section className="search_bar">  
        {/* List starts */}
        <ul>
            <li><a href="#">visit factory</a></li>
            <li><a href="#">get in touch</a></li>
        </ul>
        {/* List ends */}


              <span><a href="#" onClick={(e) => {
                  e.preventDefault();
                  searchClicked(!clickSearch);
              }}><i className="fa fa-search" aria-hidden="true"></i></a></span>
    </section>
    {/* Fixed positioned right search bar ends here */}

    </>
  )
}


export default SearchBar;
