
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

function Cart({ det,cart,handleRemoveFromCart }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <form className="d-flex">
        <Button variant="outline-dark" onClick={handleShow}>
          <i className="bi-cart-fill me-1"></i> Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
        </Button>
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map((item, index) => (
            <div key={index}>
              {/* Display item details here */}
              <p>{item.feature[0].f}</p>
              <p>{item.feature[0].g}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
        <Button
  variant="secondary"
  onClick={() => {
    handleRemoveFromCart(det); // Pass 'det' directly
    handleClose();
  }}
>
  Remove from Cart
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
