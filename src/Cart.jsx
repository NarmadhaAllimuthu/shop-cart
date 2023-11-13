

//import button and modal from react-bootstrap library and usestate from react

import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

//create a component function as cart and passing three props
function Cart({ det, cart, handleRemoveFromCart }) {

  //usestate used for visibility or hidden state representation
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <form className="d-flex">
        {/* using bootstrap button component and it that event handler onclick used for trigger the function while clicking */}

        <Button variant="outline-dark" onClick={handleShow}>
          <i className="bi-cart-fill me-1"></i> Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
        </Button>
      </form>
      {/* Bootstrap Modal component that is conditionally displayed based on the value of the show state and onhide for event handler */}


      <Modal show={show} onHide={handleClose}>
        {/* it is a header section of the modal with a close button, allowing users to close the modal */}

        <Modal.Header closeButton>

          {/* it represent the titile of the cart */}

          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        {/* items that added to cart will be displayed inside the modal body */}

        <Modal.Body>

          {cart.map((item, index) => (
            <div key={index}>
              {/* Display the item details here */}
              <p>{item.feature[0].f}</p>
              <p>{item.feature[0].g}</p>

            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          {/* another bootstrap button component that we can gave variant for the difference and handling the events  */}

          <Button
            variant="secondary"
            onClick={() => {
              handleRemoveFromCart(det);
              handleClose();
            }}
          >
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;






































// import React from 'react'

// function Cart({cart}) {
//     return (<form class="d-flex">
//         <button class="btn btn-outline-dark" type="submit">
//             <i class="bi-cart-fill me-1"></i>
//             Cart
//             <span class="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
//         </button>
//     </form>

//     )
// }

// export default Cart;
