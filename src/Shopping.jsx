import 'bootstrap-icons/font/bootstrap-icons.css'


function Shop({ det,handletoCart,handleRemovetoCart,handleRemoveFromCart,cart}) {

    const isItemInCart = cart.some((item) => item.id === det.id);

    const hasOffer = det.feature.some((feature) => feature.offer);
   
  


    const handleCartAction = () => {
        if (isItemInCart) {
            handleRemoveFromCart(det); // Update this line
        } else {
          handletoCart(det);
        }
      };
  

    return (  <div className="col mb-5  ">
      <div className="position-relative">
          {/* {det.feature.map((check, index) => {
                                                return check.offer ?  <> 
                                                <div class="badge bg-dark text-white position-absolute" style={{top:"0.5rem", right: "0.5rem"}}>Sale</div>
                                                <img className="card-img-top" src={det.img} alt="..." /></>
                                                : <img className="card-img-top" src={det.img} alt="..." /> })} */}

<div className='card d-flex flex-column h-100'>

              <img className="card-img-top" src={det.img} alt="..." />
              
{hasOffer && (
        <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
          Sale
        </div>
      )}
                     <div className="card-body p-4">
                                {/* <div className="card h-100"> */}
                                    <div className="text-center">
                                        <ul>
                                            {det.feature.map((e, index) => {
                                                return e.offer ?  <li key={index}>
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

{/* {e.rating && (
        <div class="d-flex justify-content-center small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
      )} */}
                                           <div className="feature-details justify-content-center">
      <h6 className="text-muted text-decoration-line-through">{e.g}</h6>&ensp;
      <span>{e.h}</span>
    </div>
                                            </li>:
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
                                            <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={handleCartAction}
                >
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






































