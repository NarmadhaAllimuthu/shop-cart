

import React from 'react';

//create a component function as cart and passing one props
function Nav({ main }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#!">
                    {main.main}  
                                {/* here we use the props content  */}
                </a>

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