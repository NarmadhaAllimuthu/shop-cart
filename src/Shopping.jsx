import 'bootstrap-icons/font/bootstrap-icons.css'

//getting  function from parents and passing it as props in component files and stored as object

function Shop({ det, handletoCart, handleRemoveFromCart, cart }) {

  //checking the condition satisfying one that we want to need to specify and use in our website like special cases 
  const isItemInCart = cart.some((item) => item.id === det.id);

  const hasOffer = det.feature.some((feature) => feature.offer);


  //based on condition satisfication it act on the function and return  while clicking that it is added or need to add ,remove 

  const handleCartAction = () => {
    if (isItemInCart) {
      handleRemoveFromCart(det);
    } else {
      handletoCart(det);
    }
  };


  return (<div className="col mb-5  ">
    <div className="position-relative">

      <div className='card d-flex flex-column h-100'>

        {/* receiving the props and getting the needed data and using dot method because props stored as object*/}
        <img className="card-img-top" src={det.img} alt="..." />

        {/* if condition satisfy it show sale this is a conditional operator*/}
        {hasOffer && (
          <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
            Sale
          </div>
        )}
        <div className="card-body p-4">

          <div className="text-center">
            <ul>
              {/* here we use map and in that index is used for unique representation of element and an ternary operator used 
              for execution of special case it help when we want to update a normal case to spacial case  */}

              {det.feature.map((e, index) => {
                return e.offer ? <li key={index}>
                  <h5>{e.f}</h5>

                  {e.rating && (
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                  )}

                  <div className="feature-details justify-content-center">
                    <h6 className="text-muted text-decoration-line-through">{e.g}</h6>&ensp;
                    <span>{e.h}</span>
                  </div>
                </li> :
                  <li key={index}>
                    <h5>{e.f}</h5>
                    {e.rating && (
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                    )}

                    <h6 > {e.g}</h6>
                  </li>
              })}
            </ul>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                {/* handling events for adding and remove from cart by simply calling the function that we already created above */}

                <button className="btn btn-outline-dark mt-auto" onClick={handleCartAction}>
                  {isItemInCart ? "Remove from Cart" : "Add to Cart"}
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Shop;






































