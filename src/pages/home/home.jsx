import styles from './home.module.css'
import logo1 from '../../assets/images/nintendologo.png'
import logo2 from '../../assets/images/playstationlogo.png'
import logo3 from '../../assets/images/psvitalogo.png'
import logo4 from '../../assets/images/xboxlogo.png'
import { NavLink, useNavigate } from 'react-router-dom'


import { useState, useEffect } from 'react'

//import data
import { collectionProducts, carouselProducts, discountProducts, bannerProducts } from '../../data/allProducts'

const Home = () => {
const navigate = useNavigate();

const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem("favorites");
  return saved ? JSON.parse(saved) : [];
});

const addToFavorites = (product) => {
  const existing = favorites.find(fav => fav.id === product.id);
  
  let updated;

  if(existing){
    updated = favorites.map(fav => 
      fav.id === product.id ? {...fav, quantity: (fav.quantity || 1)} : fav
    );
  }else{
    updated = [...favorites, {...product, quantity: 1}]
      window.alert(`${product.title} added to favorites!`);
  }

   setFavorites(updated);
   localStorage.setItem("favorites", JSON.stringify(updated));
   if(window.updateFavoritesCount) window.updateFavoritesCount()
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


const [cart, setCart] = useState(() => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
})

const addToCart = (product) => {
  const existing = cart.find(cart => cart.id === product.id);
  
  let updated;

  if(existing){
    updated = cart.map(cart => cart.id === product.id ? {...cart, quantity: (cart.quantity || 1)} : cart);
  }else{
    updated = [...cart, {...product, quantity: 1}]
      window.alert(`${product.title} added to cart!`);
  }
  
   setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));

    if(window.updateCartCount) window.updateCartCount()
   }
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex(prev => (prev + 1) % bannerProducts.length); // use bannerProducts instead of banners
  }, 5000); // every 5 seconds

  return () => clearInterval(interval);
}, [bannerProducts.length]); // dependency array updated

  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 590) setItemsToShow(1); // mobile
      else if (window.innerWidth <= 767) setItemsToShow(2); // small tablet
      else if (window.innerWidth <= 991) setItemsToShow(3); // tablet
      else setItemsToShow(4); // desktop
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

    // Circular manual buttons
  const prev = () => setStartIndex((startIndex - 1 + carouselProducts.length) % carouselProducts.length);
  const next = () => setStartIndex((startIndex + 1) % carouselProducts.length);

  // Get visible products circularly
  const visibleProducts = [];
  for (let i = 0; i < itemsToShow; i++) {
    visibleProducts.push(carouselProducts[(startIndex + i) % carouselProducts.length]);
  }

   const messages = [
  {
    id: 1,
    name: "Jerome Bell",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5
  },
  {
    id: 2,
    name: "Jerome Bella",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5
  },
  {
    id: 3,
    name: "Jerome Okoye",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5
  },
    {
    id: 4,
    name: "Jerome Saki",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5
  },
  {
    id: 5,
    name: "Jerome Wick",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5
  },
  {
    id: 6,
    name: "Jerome Peter",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5
  },
];
  

const [startIndexmsg, setStartIndexmsg] = useState(0);
const [itemsToShowmsg, setItemsToShowmsg] = useState(3);

// Responsive adjustment
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 590) setItemsToShowmsg(1);
    else if (window.innerWidth <= 767) setItemsToShowmsg(2);
    else setItemsToShowmsg(3);
  };
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

// Circular next/prev
const prevmsg = () =>
  setStartIndexmsg(
    (prev) => (prev - 1 + messages.length) % messages.length
  );

const nextmsg = () =>
  setStartIndexmsg(
    (prev) => (prev + 1) % messages.length
  );

const visibleMessages = [];
for (let i = 0; i < itemsToShowmsg; i++) {
  visibleMessages.push(messages[(startIndexmsg + i) % messages.length]);
}
 
  return(
    <>
  <div className="banner">
    <div className={styles.imagecrop}>
  <img className={styles.bannerimg1} src={bannerProducts[currentIndex].imgs} alt={bannerProducts[currentIndex].title} />
  <div className="container">
    <div className={styles.gbnewarrival}>
      <h1>NEW ARRIVAL...</h1>
    </div>
    <div>
      <h1
        style={{
          position: 'absolute',
          color: 'white',
          top: '80px',
          fontSize: '60px',
          fontWeight: 'bold',
        }}
      >
        {bannerProducts[currentIndex].title}
      </h1>
      <p
        className="col-lg-5"
        style={{
          position: 'absolute',
          color: 'white',
          top: '165px',
          fontSize: '18px',
          height: '120px',
          maxWidth: 'auto',
        }}
      >
        {bannerProducts[currentIndex].description}
      </p>
    </div>
    <div className={`row d-flex row ${styles.btnBannnerPosition}`}>
      <div className="col-lg-5 col-md-5 col-12">
        <button className={styles.btnBuyNow}  onClick={() => addToCart(bannerProducts[currentIndex])}>
          BUY NOW <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      <div className="col-lg-2 col-md-2 col-12">
        <button className={styles.btnViewDetail}
        onClick={() => navigate(`/view/${bannerProducts[currentIndex].id}`)}
        >
          View Details <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
    <div className={styles.btndisc}>
      {bannerProducts.map((_, index) => (
        <button
          key={index}
          className={currentIndex === index ? styles.discactive : ""}
          onClick={() => setCurrentIndex(index)}
        ></button>
      ))}
    </div>
  </div>
</div>

  </div>
  <div className={styles.featureicon}>
    <div className="container">
      <div className="row">
  <div className={`${styles.featureicons} col-lg-3 col-md-6 col-6 d-flex gap-3 align-items-center`}> 
    <div>
    <i className="bi bi-truck"></i>
    </div>
    <div className="mt-4">
      <h5>Free Delevery</h5>
      <p>Free shipping on all order</p>
    </div>
     </div> 
       <div className={`${styles.featureicons} col-lg-3 col-md-6 col-6 d-flex gap-3 align-items-center`}> 
    <div>
    <i className="bi bi-currency-exchange"></i>
    </div>
    <div className="mt-4">
      <h5>Money Return</h5>
      <p>Back guarantee under 7 day</p>
    </div>
     </div> 
           <div className={`${styles.featureicons} col-lg-3 col-md-6 col-6 d-flex gap-3 align-items-center`}> 
    <div>
    <i className="bi bi-clock-history"></i>
    </div>
    <div className="mt-4">
      <h5>Online Support 24/7</h5>
      <p>Support online 24 hours a day</p>
    </div>
     </div>   
     <div className={`${styles.featureicons} col-lg-3 col-md-6 col-6 d-flex gap-3 align-items-center`}> 
    <div>
    <i className="bi bi-heart"></i>
    </div>
    <div className="mt-4">
      <h5>Reliable</h5>
      <p>Trusted by 1000+ brands</p>
    </div>
     </div> 
      </div>
  </div>
  </div>
  <div className={styles.instockbox}>
     <div className="container">
      <div className={`row ${styles.instockboxs}`}>
        {discountProducts.map((product) =>(

     <div key={product.id} className="col-lg-6 col-md-12 col-12 d-flex justify-content-center">
        <div className={`${styles.box1} row`}>
          <div className={`${styles.cdcontext} col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center`}>
            <div className={styles.promo}>
          <p>GET 30$ OFF</p>
          <h3>{product.title}</h3>
            </div>
          <button
          className={`mt-5 ${styles.btnBuynowpromo}`}  onClick={() => addToCart(product)}>BUY NOW <i className="bi bi-chevron-right"></i></button>
          </div>
          <div className={`${styles.cdimg} col-lg-6 col-md-6 col-12 `}><img src={product.img}></img></div>
        </div>
      </div>
        ) )}
      </div>  
     </div>
  </div>

  <div className={`${styles.featureproduct}`}>
    <div className="d-flex justify-content-center flex-column align-items-center gap-1">
      <div className={styles.featureh5}><h5>TOP SALE</h5></div>
      <div className={styles.featureh1}><h1>Featured Product</h1></div>
    </div>
    
    <div className="container mt-3" style={{ position: "relative",  }}>
    <div className={`row carousel justify-content-between ${styles.slider}`}>

    {visibleProducts.map((product, index) => (
    <div key={`${product.id}-${index}`} className={`${styles.product1} `}  style={{ flex: `0 0 ${100 / itemsToShow}%` }}>
      <div className={styles.carrosimg}>
<img src={product.img}></img>
  <div className={styles.overlay}>
          <button className={styles.iconBtn}
          onClick={() => addToFavorites(product)}
          >
            <i className="bi bi-heart-fill"></i>
          </button>
          <button className={styles.iconBtn}
           onClick={() => addToCart(product)}
          >
            <i className="bi bi-cart-fill"></i>
          </button>
          <button className={styles.iconBtn} 
           onClick={() => navigate(`/view/${product.id}`)}
          >
            <i className="bi bi-eye-fill"></i>
          </button>
        </div>
      </div>     
     <h5 style={{fontSize: '17px'}} className="mt-3">{product.title}</h5>
    
     <div className="d-flex gap-1">
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      </div> 
     <p>{product.price}</p>
    </div>
    ))}
    </div>

        <button onClick={prev} className={styles.btnPrev}><i className="bi bi-chevron-left"></i></button>
     <button onClick={next} className={styles.btnNext}><i className="bi bi-chevron-right"></i></button>
    </div>    
  </div>
  
<video className="mt-3" style={{width: "100%", height: "500px", objectFit: "cover"}} autoPlay muted loop playsInline >
  <source src="/videos/gta6.mp4" type="video/mp4" />
</video>

<div className="container mt-3 ">
<div className={styles.collection}>
 <div>
  <h1>Collection</h1>
 </div>
  <ul>
    <li>All Collection</li>
    <li>New In</li>
    <li>Top Rated</li>
  </ul>
</div>

<div className="mt-3" style={{ position: "relative"  }}>
    <div className={`row  justify-content-between ${styles.slider}`}>
    {collectionProducts.map((product, index) => (
    <div key={`${product.id}-${index}`} className={`${styles.product1} col-lg-3 col-md-6 col-12`} >
      <div className={styles.carrosimg}>
<img src={product.img}></img>
  <div className={styles.overlay}>
          <button className={styles.iconBtn}
          onClick={() => addToFavorites(product)}
          >
            <i className="bi bi-heart-fill"></i>
          </button>
          <button className={styles.iconBtn}
          onClick={() => addToCart(product)}
          >
            <i className="bi bi-cart-fill"></i>
          </button>
           <button className={styles.iconBtn}
           onClick={() => navigate(`/view/${product.id}`)}
           
           >
            <i className="bi bi-eye-fill"></i>
          </button>
        </div>
      </div>     
     <h5 style={{fontSize: '17px'}} className="mt-3">{product.title}</h5>
    
     <div className="d-flex gap-1">
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      </div> 
     <p>{product.price}</p>
    </div>
    ))}
    </div>
    </div>  
    
</div>

<div className={`${styles.feedback} mt-4`}>
<div className="d-flex justify-content-center flex-column align-items-center gap-1">
      <div className={styles.featureh5}><h5>Top Comment</h5></div>
      <div className={styles.featureh1}><h1>Feedback</h1></div>
</div>

<div className={`${styles.sliderWrapper} container mt-4`}>
  <div className="row">
  <div
    className={` ${styles.sliderInner}`}
     style={{
    transform: `translateX(-${(startIndexmsg * 100) / itemsToShowmsg}%)`,
    transition: "transform 0.5s ease",
    "--itemsToShow": itemsToShowmsg,
  }}
  >
    {messages.map((msg) => (
      <div
        key={msg.id}
        className={styles.boxmsg}
        style={{ flex: `0 0 ${100 / itemsToShowmsg}% ` }}
      >
        <div className={styles.msg1}>
          <div className="d-flex">
            <div className="d-flex gap-1">
              {Array(msg.stars)
                .fill(0)
                .map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
            </div>
            <div className={styles.messageicon}>
              <i className="bi bi-chat-left-dots-fill"></i>
            </div>
          </div>
          <h3>{msg.name}</h3>
          <p className="mt-1">{msg.text}</p>
        </div>
      </div>
    ))}
  </div>
  </div>

<div className="d-flex justify-content-center gap-4 mt-3">
  <button onClick={prevmsg} className={styles.btnPrevmsg}>
    <i className="bi bi-chevron-left"></i>
  </button>
  <button onClick={nextmsg} className={styles.btnNextmsg}>
    <i className="bi bi-chevron-right"></i>
  </button>
</div>
</div>
</div>

<div className="container mt-3 mb-3">
  <div className={`${styles.sliders}`}>
    <div className={styles.slidetrack}>
      <div className={styles.slides}><img src={logo1} /></div>
      <div className={styles.slides}><img src={logo2} /></div>
      <div className={styles.slides}><img src={logo3} /></div>
      <div className={styles.slides}><img src={logo4} /></div>
      <div className={styles.slides}><img src={logo1} /></div>
      <div className={styles.slides}><img src={logo2} /></div>
      <div className={styles.slides}><img src={logo3} /></div>
      <div className={styles.slides}><img src={logo4} /></div>

      <div className={styles.slides}><img src={logo1} /></div>
      <div className={styles.slides}><img src={logo2} /></div>
      <div className={styles.slides}><img src={logo3} /></div>
      <div className={styles.slides}><img src={logo4} /></div>
      <div className={styles.slides}><img src={logo1} /></div>
      <div className={styles.slides}><img src={logo2} /></div>
      <div className={styles.slides}><img src={logo3} /></div>
      <div className={styles.slides}><img src={logo4} /></div>
    </div>
  </div>
</div>
    </>
  );
};
export default Home