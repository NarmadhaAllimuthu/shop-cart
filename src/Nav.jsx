

import React from 'react';
import Navitem from './Navitem';

function Nav({ main, navItem }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#!">
                    {main.main}
                </a>
                {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        {navItem.map((item, index) => (
                            <Navitem key={index} item={item}></Navitem>
                        ))}
                    </ul>
                </div> */}
            </div>
        </nav>
    );
}

export default Nav;








// function Nav({ main }) {

//     return         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container">

//     <a className="navbar-brand" href="#!">{main.main}</a>
// </div>
// </nav>




// }

// export default Nav;