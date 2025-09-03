import styles from './view.module.css'
import img1 from '../../assets/images/spidermancd.png'
import { useParams } from "react-router-dom"
import allProducts from '../../data/allProducts'
import { useState, useEffect} from 'react'

const View = () => {
const { id } = useParams();
const product = allProducts.find((p) => p.id === parseInt(id));

const [cart, setCart] = useState(() => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
})

const addToCart = (product) => {
   const savedCart = localStorage.getItem("cart");
   let currneCart = savedCart ? JSON.parse(savedCart) : [];

   const existing = currneCart.find(item => item.id === product.id);

   if(existing){
    existing.quantity = (existing.quantity || 1) + qty;
   }else{
    currneCart.push({...product, quantity: qty});
      window.alert(`${product.title} added to favorites!`);
   }
   
    setCart(currneCart);
    localStorage.setItem("cart", JSON.stringify(currneCart));

    if(window.updateCartCount) window.updateCartCount()
}


window.alert = function(message, timeout = 2000) {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'custom-alert';
  alertDiv.innerText = message;
  alertDiv.style.position = 'fixed';
  alertDiv.style.top = '10px';
  alertDiv.style.right = '10px';
  alertDiv.style.padding = '10px 20px';
  alertDiv.style.backgroundColor = '#B97A42';
  alertDiv.style.color = 'white';
  alertDiv.style.transition = 'opacity 0.5s ease';
  alertDiv.style.opacity = '1';
  alertDiv.style.zIndex = '9999';
  document.body.appendChild(alertDiv);
  setTimeout(() => {
    alertDiv.style.opacity = '0';
    setTimeout(() => document.body.removeChild(alertDiv), 500);
  }, timeout);
};

const [qty, setQty] = useState(1);
const increaseQty = () => setQty(prev => prev + 1);
const decreaseQty = () => setQty(prev => (prev > 1 ? prev - 1 : 1));
  return (
    <>
     <div className="container mt-4">
      <div className="row ">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className={styles.imgbg}>
            <img className="mt-5" src={product.img}></img>
          </div>
        
          <p className="mt-3" style={{color: 'white'}}>{product.description}</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h1 style={{color: 'white'}}>{product.title}</h1>
            <h3 style={{color: 'white'}}>{product.price}</h3>
          <div className="d-flex gap-1" style={{color: 'white'}}>
         <i className="bi bi-star-fill"></i>
         <i className="bi bi-star-fill"></i>
         <i className="bi bi-star-fill"></i>
         <i className="bi bi-star-fill"></i>
         <i className="bi bi-star-fill"></i>
        </div>
        <div className={`mt-3 ${styles.btnview}`}>
  
     <div className={`${styles.bgbtnicdc}`}>
                    <div className={styles.bgplus}  onClick={decreaseQty}>
                      <i className="bi bi-dash"></i>
                    </div>
                    <h5>{qty}</h5>
                    <div className={styles.bgminus} onClick={increaseQty} >
                     <i className="bi bi-plus-lg"></i>
                    </div>
                  </div> 

   <button className={`${styles.btnAddtocart}`} onClick={() => addToCart(product)}>Add to Cart</button>
    
         
        
        </div>      
        </div>
      </div>
     </div>
    </>
  )
}

export default View;