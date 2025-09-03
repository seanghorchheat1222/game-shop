
import styles from './favorite.module.css'
import img1 from '../../assets/images/spidermancd.png'
import { useState, useEffect} from 'react'

const Favorite = () => {
 
const [favorites, setFavorites] = useState([]);

useEffect(() => {
  const saved = localStorage.getItem("favorites");
  if(saved) {
    const parsed = JSON.parse(saved);
  setFavorites(parsed);
  updateTotalPrice(parsed)

  } 
}, [])


const removeFavorite = (id) => {
  const updated = favorites.filter((item) => item.id !== id);
  setFavorites(updated);
  
  if(updated.length === 0){
    localStorage.removeItem("favorites");  
  }else{
  localStorage.setItem("favorites", JSON.stringify(updated));

  }
    
   updateTotalPrice(updated); 
   if(window.updateFavoritesCount) window.updateFavoritesCount()
  window.alert(`${product.title} remove from favorites!`);
}

const [allPrice, setAllPrice] = useState(0);


const updateTotalPrice = (favs) => {
  const total = favs.reduce((sum, product) => {
  const price = parseFloat((product.price || "0").replace(/[^0-9.]/g, ""));
  return sum + price * (product.quantity || 1);
  }, 0)
  setAllPrice(total); 
}

const increaseQty = (id) => {
 const updated = favorites.map(item => 
  item.id === id ? {...item, quantity: (item.quantity || 1) + 1} : item
 );
 setFavorites(updated);
 localStorage.setItem("favorites", JSON.stringify(updated));
 updateTotalPrice(updated); 
};

const decreaseQty = (id) => {
const updated = favorites.map(item => item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity -1 : 1} : item);

setFavorites(updated);
localStorage.setItem("favorites", JSON.stringify(updated));
updateTotalPrice(updated)
}

const addFavoriteToCart = (favProduct) => {
  const savedCart = localStorage.getItem("cart");
  let cart = savedCart ? JSON.parse(savedCart) : [];

  const existing = cart.find(item => item.id === favProduct.id);

  if(existing){
    existing.quantity = (existing.quantity || 1) + (favProduct.quantity || 1);
  }else{
    cart.push({...favProduct});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  if(window.updateCartCount) window.updateCartCount();

  const updateFavorites = favorites.filter(item => item.id !== favProduct.id);
  setFavorites(updateFavorites);
  if(updateFavorites.length === 0 ){
    localStorage.removeItem("favorites");
  }else{
    localStorage.setItem("favorites", JSON.stringify(updateFavorites));
  }

  updateTotalPrice(updateFavorites)
  
  if(window.updateFavoritesCount) window.updateFavoritesCount();
};


const addAllFavoritesToCart = () => {
  const savedCart = localStorage.getItem("cart");
  let cart = savedCart ? JSON.parse(savedCart) : [];

  favorites.forEach(favProduct => {
  const existing = cart.find(item => item.id === favProduct.id);

  if(existing) {
    existing.quantity = (existing.quantity || 1) + (favProduct.quantity || 1);
  }else{
    cart.push({...favProduct});
  }
  });

localStorage.setItem("cart", JSON.stringify(cart));
if(window.updateCartCount) window.updateCartCount();
setFavorites([]);
localStorage.removeItem("favorites");
setAllPrice(0);
if(window.updateFavoritesCount) window.updateFavoritesCount();
}


const sortRecentlyAdded = () => {
  const sorted = [...favorites].slice().reverse();
  setFavorites(sorted);
  localStorage.setItem("favorites", JSON.stringify(sorted))
}

const sortByName = () => {
  const sorted = [...favorites].sort((a, b) => a.title.localeCompare(b.title));
  setFavorites(sorted);
  localStorage.setItem("favorites", JSON.stringify(sorted))
}

const sortPriceLowToHigh = () => {
 const sorted = [...favorites].sort((a, b) => {
  const priceA = parseFloat((a.price || "0").replace(/[^0-9]/g, ""));
  const priceB = parseFloat((b.price || "0").replace(/[^0-9]/g, ""));
  return priceA - priceB;
 });

 setFavorites(sorted);
 localStorage.setItem("favorites", JSON.stringify(sorted));
}

const sortPriceHighToLow = () => {
 const sorted = [...favorites].sort((a, b) => {
  const priceA = parseFloat((a.price || "0").replace(/[^0-9]/g, ""));
  const priceB = parseFloat((b.price || "0").replace(/[^0-9]/g, ""));
  return priceB - priceA;
 });

 setFavorites(sorted);
 localStorage.setItem("favorites", JSON.stringify(sorted));
}

const sortRandom = () => {
  const shuffled = [...favorites].sort(() => Math.random() - 0.5);
  setFavorites(shuffled);
  localStorage.setItem("favorites", JSON.stringify(shuffled));
}

  return(
    <>
   <div className="container">
    <div className={`${styles.title} mb-3 mt-3`}><p>My Favorite</p></div>
    <div className={`row mb-4`}>
   <div className="col-lg-10">

    <div className={`${styles.btnSubbar} row col-lg-10`}>
  <div className={`${styles.btnSort} col-lg-1 col-md-1 col-sm-1 col-2`}
  onClick={sortRandom}
  >
      <h5  >Sort</h5>
    </div>

      <div className={`${styles.btnRecentlyadded} col-lg-3 col-md-3 col-sm-4 col-6`} onClick={sortRecentlyAdded}>
      <h5>Recently added</h5>
    </div>
      <div className={`${styles.btnName} col-lg-1 col-md-1 col-sm-2 col-2`}
      onClick={sortByName}
      >
      <h5>Name</h5>
    </div>
      <div className={`${styles.btnLowtohigh} col-lg-3 col-md-3 col-sm-4 col-6`}
      onClick={sortPriceLowToHigh}>
      <h5>Price:low to high</h5>
    </div>
      <div className={`${styles.btnHightolow} col-lg-3 col-md-3 col-sm-4 col-6`} 
      
      onClick={sortPriceHighToLow}>
      <h5>Price:high to low</h5>
    </div> 
    </div>

    <div className={`${styles.sponser} d-flex row mt-5`}>
      <div className={`${styles.bgImageSposner} col-lg-1 col-md-2 col-sm-2 col-2`}>
        <p>XXX12</p>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-9">
      <h5>Save 25% with code “XXX12”</h5>
      </div>
    </div>
   </div>
      <div className="col-lg-2 d-flex flex-column align-items-end">
      <h1 className={styles.allPrice} style={{color: 'white', fontWeight: 'bold'}}>${allPrice.toFixed(2)}</h1>
   <div>
         <button className={`${styles.btnAddalltocart}`} onClick={addAllFavoritesToCart}><i className="bi bi-cart-fill"></i><h5>Add all to shopping bag</h5></button>
  </div>
   </div>
   </div>

     <div className=" d-flex gap-4 mb-3">
      <div className="row col-12">
        {favorites.length === 0 ? (<p style={{color: 'white'}}>Your Item is empty :)</p>) : (favorites.map((product) => (
   <div key={product.id} className="mb-4 d-flex  gap-3">
       <div className={`col-lg-2 col-5 ${styles.bgImage}`}>
     <img width= "100%" src={product.img}></img>
    </div>
    <div className={`col-lg-6 col-6 ${styles.context}`}>
     <h2>{product.title}</h2>
     <p>Action R-rated</p>
     <h2>{product.price}</h2>
      <div className="d-flex gap-1" style={{color: 'white'}}>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      </div>
      <div className="row d-flex gap-1 mt-4">
       <div className={`${styles.bgbtnicdc} col-lg-2 col-md-6 col-sm-8 col-6`}>
        <div className={styles.bgplus} 
        onClick={() => decreaseQty(product.id)}  >
          <i className="bi bi-dash"></i>
        </div>
        <h5>{product.quantity || 1}</h5>
        <div className={styles.bgminus}
         onClick={() => increaseQty(product.id)}
        >
         <i className="bi bi-plus-lg"></i>
        </div>
      </div> 
   
        <div className={`${styles.bgicon} col-lg-1`}
        onClick={() => addFavoriteToCart(product)}
        >
          <i className="bi bi-cart-fill"></i>
        </div>
       
       <div className={`${styles.bgicon} col-lg-1`}
       onClick={() => removeFavorite(product.id)}
       >
          <i className="bi bi-trash-fill"></i>
        </div>
      </div>
    </div>
      </div>
        )))}
      </div>

    </div>
    
  

   </div>

  


  

  
    </>
  )
}

export default Favorite