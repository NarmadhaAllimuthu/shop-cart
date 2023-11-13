
//import the rect and usestate from react library
import React from 'react';
import { useState } from 'react';

//create a component function as cart and passing one props

function Navitem({ item }) {

    //code is written for dropdown state execution
    //it represent that initially state was closed
    const [isDropdownOpen, setDropdownOpen] = useState(false);

//when this function is triggered it will update the function in usestate
    const toggleDropdown = (index) => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        // if item as the choice1 it execute the first condition otherwise it execute the second one (ternary operator used)
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

                                <button className="dropdown-item" onClick={() => toggleDropdown(index)}>
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












































