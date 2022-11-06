/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Search = ({ clickSearch }) => {

    return (
        <>

            {/* Fixed positioned search input starts here */}
            <div className="search" style={{ transform: clickSearch ? "translateX(100%)" : "translateX(0)" }}>
                <form method="GET">
                    <input type="search" name="search" id="search" placeholder="Search here.." />
                </form>
            </div>
            {/* Fixed positioned search input ends here */}

        </>
    )
}


export default Search;
