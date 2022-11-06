/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Search = () => {
  return (
      <>
          
    {/* Fixed positioned search input starts here */}
    <div className="search">
        <form method="GET">
            <input type="search" name="search" id="search" placeholder="Search here.." />
        </form>
    </div>
    {/* Fixed positioned search input ends here */}

    </>
  )
}


export default Search;
