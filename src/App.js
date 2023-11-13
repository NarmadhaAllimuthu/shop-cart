//importing the needed component files
import './App.css';
import Shop from './Shopping';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Navitem from './Navitem';
import Cart from './Cart';
import { useState } from 'react';



function App() {

//storing in a variable for the usage in our website 
    const details = [{
        id: 1,
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        feature: [
            {
                offer: false,
                rating: false,
                f: "Fancy Product",
                g: "$40.00 - $80.00"
            }
        ]
    },
    {
        id: 2,
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

        feature: [
            {
                offer: true,
                rating: true,
                f: "Trending Product",
                g: "$20.00",
                h: "$18.00"
            }
        ]
    },
    {
        id: 3,
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        feature: [
            {
                offer: true,
                rating: false,
                f: "Special Item",
                g: "$50.00",
                h: "$25.00"
            }
        ]
    },
    {
        id: 4,
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        feature: [
            {
                offer: false,
                rating: true,
                f: "Sale Item",
                g: "$40.00"
            }
        ]
    },
    {
        id: 5,
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        feature: [
            {
                offer: true,
                rating: false,
                f: "Popular Item",
                g: "$50.00",
                h: "$25.00"
            }
        ]
    },
    {
        id: 6,
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        feature: [
            {
                offer: false,
                rating: false,
                f: "Moblie Product",
                g: "$120.00 - $280.00",
                h: "$25.00"
            }
        ]
    },
    {
        id: 7,
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        feature: [
            {
                offer: true,
                rating: true,
                f: "Cloth Materials",
                g: "$20.00 ",
                h: " $18.00"
            }
        ]
    },
    {
        id: 8,
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        feature: [
            {
                offer: false,
                rating: true,
                f: "Play Items",
                g: "$40.00"
            }
        ]
    },
    ]



    const headContent = [{
        header: "Shop in style",

        para: "With this shop hompeage template"
    }]


    const footerContent = [{
        main: "Copyright &copy; Your Website 2023"
    }]

    const navContent = {
        main: "Start Bootstrap"
    }

    const navItem = [
        {
            top: "Home"
        },
        {
            top: "About"
        },
        {
            choice1: true,
            top: "Shop",
            choices: ["All Products", "Popular Items", "New Arrivals"]
        }
    ];

    // use usestate of hooks for changing the states or updating while clicking  
    const [cart, setCart] = useState([]);
 
    //function stored in a variable  so that we can see a need code and work on function by using the variable name where we want
    const handletoCart = (details) => {
        setCart([...cart, details])

    }
  
    const handleRemoveFromCart = (itemToRemove) => {
        // Implement logic to remove the item from the cart
        const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
        setCart(updatedCart);
    };


    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              
            {/* adding the component files and passing the function  that will be get as props in their component function */}
              
                <Nav main={navContent} navItem={navItem} ></Nav>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    {navItem.map((item, index) => (
                        <Navitem key={index} item={item} ></Navitem>
                    ))}
                </ul>
                <Cart handletoCart={handletoCart} det={details} handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>

            </nav>


            {
                headContent.map((topic, index) => {
                    return <Header key={index} topic={topic}></Header>
                })
            }
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


                        {
                            details.map((det, index) => {

                                return <Shop key={index} det={det} handletoCart={handletoCart} handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Shop>
                            })
                        }

                    </div>
                </div>
            </section>



            <Footer></Footer>
        </div>

    );
}

export default App;
