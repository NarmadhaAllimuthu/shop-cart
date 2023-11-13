

import React from 'react';
import  { useState } from 'react';

function Navitem({ item }) {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    
    return (
        <li className={item.choice1 ? "nav-item dropdown" : "nav-item"}>
            {item.choice1 ? (
                <>
                    <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {item.top}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {item.choices.map((choice, index) => (
                            <li key={index}>

<button className="dropdown-item" onClick={toggleDropdown}>
                                    {choice}
                                </button>

                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <a className="nav-link" href="#!">
                    {item.top}
                </a>
            )}
        </li>
    );
}

export default Navitem;











































// function Navitem({ item }) {
//     return (
//         <div>
//             <li className={item.choice1 ? "nav-item dropdown" : "nav-item"}>
//                 {item.choice1 ? (
//                     <>
//                         <a
//                             className="nav-link dropdown-toggle"
//                             id="navbarDropdown"
//                             href="#"
//                             role="button"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                         >
//                             {item.top}
//                         </a>
//                         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             {item.choices.map((choice, index) => (
//                                 <li key={index}>
//                                     <a className="dropdown-item" href="#!">
//                                         {choice}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </>
//                 ) : (
//                     <a className="nav-link" href="#!">
//                         {item.top}
//                     </a>
//                 )}
//             </li>
//         </div>
//     );
// }

// export default Navitem;


