import styles from './cart.module.css'
import { useState, useEffect } from 'react';
import img1 from '../../assets/images/spidermancd.png'
import logo1 from '../../assets/images/paypallogo.png'
import logo2 from '../../assets/images/mastercardlogo.png'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [carts, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if(saved) {
    const parsed = JSON.parse(saved);

    setCart(parsed);
    updateTotalPrice(parsed);
    updateTotalPriceTax(parsed);
    }
  }, [])

  const [allPrice, setAllPrice] = useState(0);

  const updateTotalPrice = (carts) => {
    const total = carts.reduce((sum, product) => {
      const price = parseFloat((product.price || "0").replace(/[^0-9.]/g, ""));
      return sum + price * (product.quantity || 1);
    }, 0)
    setAllPrice(total)
  }

    const [allPriceTax, setAllPriceTax] = useState(0);

  const updateTotalPriceTax = (carts) => {
    const subtotal = carts.reduce((sum, product) => {
      const price = parseFloat((product.price || "0").replace(/[^0-9.]/g, ""));
      return sum + price * (product.quantity || 1);
    }, 0)

    const totalWithDiscount = subtotal * 0.8;
    setAllPriceTax(totalWithDiscount)
  }


  const removeCart = (id) => {
    const updated = carts.filter((item) => item.id !==id);
    setCart(updated);

    if(updated.length === 0){
     localStorage.removeItem("cart");
    }else{
      localStorage.setItem("cart", JSON.stringify(updated));
    }
    
    updateTotalPrice(updated);
    updateTotalPriceTax(updated);

    if(window.updateCartCount) window.updateCartCount()
  }


  const increaseQty = (id) => {
 const updated = carts.map(item => 
  item.id === id ? {...item, quantity: (item.quantity || 1) + 1} : item
 );
 setCart(updated);
 localStorage.setItem("cart", JSON.stringify(updated));
 updateTotalPrice(updated); 
  updateTotalPriceTax(updated);
};

const decreaseQty = (id) => {
const updated = carts.map(item => item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity -1 : 1} : item);

setCart(updated);
localStorage.setItem("cart", JSON.stringify(updated));
updateTotalPrice(updated);
 updateTotalPriceTax(updated);
}

return(
  <>
   <div className="container mb-5">
  <div className={`${styles.title} mb-3 mt-3 `}><p>My Cart</p></div>
   <div className="row">

    <div className="row d-flex gap-3 mb-3 col-lg-8">
      { carts.length === 0 ? (<p style={{color: 'white'}}>Your cart is empty :)</p>):
        (carts.map((product, idx) => (
  <div key={idx} className="d-flex gap-3">
     <div className={`col-lg-3 col-md-3 col-sm-5 col-5 ${styles.bgImage}`}>
         <img width="90%" src={product.img}></img>
        </div>
        <div className={`col-lg-4 col-md-3 col-sm-4 col-5 ${styles.context}`}>
        <h2>{product.title}</h2>
         <p>Action R-rated</p>
           <p>Regular price: {product.price}</p>
          <div className="row d-flex gap-1 mt-4">
           <div className={`${styles.bgbtnicdc} col-lg-2 col-md-6 col-sm-8 col-6`}>
            <div className={styles.bgplus} onClick={() => decreaseQty(product.id)}>
              <i className="bi bi-dash"></i>
            </div>
            <h5>{product.quantity || 1}</h5>
            <div className={styles.bgminus} onClick={() => increaseQty(product.id)}>
             <i className="bi bi-plus-lg"></i>
            </div>
          </div> 
      
           
           <div className={`${styles.bgicon} col-lg-1`}
           onClick={() => removeCart(product.id)}
           >
              <i className="bi bi-trash-fill"></i>
            </div>
          </div>
        </div>
          <div className="col-lg-4 col-md-4 col-sm-2 col-1">
          <h4 className={` ${styles.showprice} d-flex justify-content-end`} >{product.price}</h4>
        </div>
      </div>
      )))}

        </div>        
    <div style={{color: 'white'}} className="col-lg-4 ">
     <h5>Order Summary</h5>
     <div className="row">
      <div style={{opacity: 0.6, marginTop: '10px'}} className="col-lg-6">
          <p>Product</p>
      </div>
       <div className="col-lg-6 d-flex justify-content-end">
            <p style={{opacity: 0.6, fontSize: '1px'}} className="fs-5">${allPrice.toFixed(2)}</p>
      </div>
      <div className="col-12 mt-4 mb-4" style={{height: '1px', backgroundColor: 'white'}}>
      </div>
      <div className="mt-2 col-lg-9" style={{fontWeight: 'bold'}}>
        <h4>Total excluding tax</h4>
      </div>
       <div style={{fontWeight: 'bold'}} className="mt-2 col-lg-3 d-flex justify-content-end">
        <h4>${allPriceTax.toFixed(2)}</h4>
      </div>
        <div className="col-12 mt-4" style={{height: '1px', backgroundColor: 'white'}}>
      </div>

      <div className={`col-12 mt-4`}>
      <div className={`${styles.accordion}`}>
        <i className="bi bi-plus-lg"></i>
        <h2>Add discount code</h2>
        <i className={`bi bi-chevron-up ${isOpen ? styles.rotate: ""}`} onClick={() => setIsOpen(!isOpen)}></i>
      </div>
      <div className={`${styles.dropdownaccordion} row col-12 mt-2 ${isOpen ? styles.open : ""}`}>
       <div className={`${styles.inputaccordion} col-lg-9 col-md-9 col-sm-10 col-8`}>
        <input></input>
       </div>
       <div className="col-lg-2 col-md-2 col-sm-2 col-2">
        <button className={styles.btnApply}>Apply</button>
       </div>
        <p>Enter the code without any space between letters.</p>
      </div>
      </div>
       <div className="col-12 mt-4">
        <button className={`${styles.btnContinuetocheckout} col-12`}>Continue to checkout <div ><i className={`bi bi-arrow-right`}></i></div></button>
       </div>
       <div className="d-flex gap-2 mt-2">
        <img style={{width: '90px', height: '35px'}} src={logo1}></img>
        <img style={{width: '90px', height: '35px'}} src={logo2}></img>
       </div>
     </div>
    </div>
   </div>
   </div> 
  </>
)
}

export default Cart;