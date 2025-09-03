import './header.css';
import { NavLink } from 'react-router-dom'
import img1 from '../../assets/images/logoimg.png'
import { useState, useEffect, isValidElement } from 'react'

const Header = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  }

    useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);



  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  
  const toggleHamburger = () => {
    setHamburgerOpen(prev => !prev)
  }


    useEffect(() => {
    if (hamburgerOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto"
    }
  }, [hamburgerOpen]);

  const handleNavClick = () => {
    setHamburgerOpen(false);
  }




  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const saved = localStorage.getItem('favorites');
      const favs = saved ? JSON.parse(saved) : [];
      setFavoritesCount(favs.length);
    };
  updateCount();}, []);

  const updateFavoritesCount = () => {
    const saved = localStorage.getItem('favorites');
    const favs = saved ? JSON.parse(saved) : [];
    setFavoritesCount(favs.length);
  };

  window.updateFavoritesCount = updateFavoritesCount;

  const [cartCount, setCartCount] = useState(0);
  useEffect(()=> {
    const updateCount = () => {
      const saved = localStorage.getItem('cart');
      const carts = saved ? JSON.parse(saved) : [];
      setCartCount(carts.length);
    };
  updateCount();}, [])

  const updateCartCount = () => {
    const saved  = localStorage.getItem('cart');
    const carts = saved? JSON.parse(saved) : [];
    setCartCount(carts.length)
  }

  window.updateCartCount = updateCartCount;


  return (
    <>
      <div className="TopBar">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-start mt-3">
              <h1 style={{ color: 'white', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '15px' }} >+885 93 697 886</h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mt-3" >
              <h1 style={{ color: 'white', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '15px' }} className="scrolling-text" ><marquee>ENJOY YOUR FAV GAME 25% OFF USER CODE “XXX12”</marquee></h1>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 d-flex flex-row justify-content-end mt-1 gap-3">
              <select>
                <option>English</option>
                <option>Khmer</option>
                <option>China</option>
              </select>
              <select>
                <option>USD</option>
                <option>Riel</option>
              </select>
              <select>
                <option>Settings</option>
                <option>Profile</option>
                <option>Logout</option>
              </select>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-4"><div><img className="logo" src={img1} width='120px'></img></div></div>
              <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-start search-wrapper">
                <i className="bi bi-search"></i><input className="txtSearch"></input>
              </div>
              <div className="col-lg-6 col-md-6 d-flex justify-content-end context-nav" style={{marginTop: '3px'}}>
                <ul className="d-flex" style={{gap: '43px'}}>
                  <li><NavLink   to="/"  

                  className={({ isActive }) => isActive ? " active-link" : "nav-link"}

                  >Home</NavLink>
                  
                  </li>
                   <li><NavLink   to="/qanda"  

                  className={({ isActive }) => isActive ? " active-link" : "nav-link"}

                  >Q&A</NavLink>
                  
                  </li>
                   <li><NavLink   to="/contact"  

                  className={({ isActive }) => isActive ? " active-link" : "nav-link"}

                  >Contact</NavLink>
                  
                  </li>
                  <li >
                    <NavLink style={{textDecoration: 'none'}} to="/favorite" className={({ isActive }) => isActive ? "fav-wrapper active-link" : "fav-wrapper" }  >
                          <i className="bi bi-heart-fill"></i><h5>
                            {favoritesCount > 0 ? `${favoritesCount}` : `Fav`}</h5>
                    </NavLink>
                   </li>
                  <li>
                       <NavLink style={{textDecoration: 'none'}} to="/cart" className={({ isActive }) => isActive ? "cart-wrapper active-link" : "cart-wrapper " }  >
                          <i className="bi bi-cart-fill"></i><h5>{cartCount > 0 ? `${cartCount}` : `Cart` }</h5>
                    </NavLink>
                    </li>
                  <li>
                    <div className={`menu-wrapper`}  onClick={toggleMenu}> 
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
             <div > 
                <div className="hambuger-menu" onClick={toggleHamburger}>
                 <span></span>
                 <span></span>
                 <span></span>
              </div></div>
        </nav>
           <div className={`menu-open ${menuOpen ? "active" : ''}`} >
                       <div className='close-wrapper' onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                       </div>

            <div className="row">
               <div>
                <img style={{width: '100px', marginLeft: '15px'}}src={img1}></img>
               </div>
              <div className="row">
                <div>
                <p style={{color: 'white'}}>It helps designers plan out where the content will sit, the content to be written and approved.</p>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center">

                  <div className="icons d-flex">
                      <div className="iconbg">
                       <i className="bi bi-facebook"></i>
                      </div>
                       <div className="iconbg">
                       <i className="bi bi-instagram"></i>
                      </div>
                       <div className="iconbg">
                       <i className="bi bi-twitter-x"></i>
                      </div>
                  </div> 
                </div>
                  <div className={` footersection2 mt-3`}  style={{color: 'white'}}>
                       <h3>Service</h3>
                       <div className={`footnav`}>
                        <i className="bi bi-arrow-right"></i>
                        <p>Log out</p>
                       </div>
                         <div className={`footnav`}>
                        <i className="bi bi-arrow-right"></i>
                        <p>Wishlist</p>
                       </div>
                        <div className={`footnav`}>
                        <i className="bi bi-arrow-right"></i>
                         <p>Shopping FAQs</p>
                       </div>
                      </div>

                        <div className={` footersection2 mt-3`}  style={{color: 'white'}}>
                       <h3>Company</h3>
                       <div className={`footnav`}>
                        <i className="bi bi-arrow-right"></i>
                        <NavLink style={{color: 'white', textDecoration: 'none'}} to="/"><p>Home</p></NavLink>
                       </div>
                        <div className={`footnav`}>
                        <i className="bi bi-arrow-right"></i>
                        <NavLink style={{color: 'white', textDecoration: 'none'}} to="/qanda"><p>Q&A</p></NavLink>
                       </div>
                        <div className={`footnav`}>
                        <i className="bi bi-arrow-right"></i>
                        <NavLink style={{color: 'white', textDecoration: 'none'}} to="/contact"><p>Contact</p></NavLink>
                       </div>
                      </div>

                        <div className={`footersection3 mt-3`} style={{color: 'white'}}>
                           <h3>Contact</h3>
                           <div>
                            <p>Sisowath Quay Riverside, Phnom Penh 855 Cambodia</p>
                           </div>
                            <div className="footnav1">
                            <i className="bi bi-geo-alt-fill"></i>
                            <p>12K, Domnak Village</p>
                           </div>
                             <div className="footnav1">
                            <i className="bi bi-telephone-fill"></i>
                            <p>+885 93-697-886</p>
                           </div>
                          </div>
        
              </div>
            </div>

           </div>

           <div className={`hamburger-open ${hamburgerOpen ? "active-hamburger" : ''}`}>
                       <div className="close-wrapper-hamburger" onClick={toggleHamburger}>
                        <span></span>
                        <span></span>
                       </div>
                      
            <div className="hamburger-bar">
              <ul>
                <li> <NavLink to="/" className={({isActive}) => isActive ? "active-link" : 'nav-link'}  onClick={handleNavClick}>Home</NavLink></li>
                <li> <NavLink to="/qanda" className={({isActive}) => isActive ? "active-link" : "nav-link"} onClick={handleNavClick}>Q&A</NavLink></li>
                <li> <NavLink to="/contact" className={({isActive}) => isActive ? "active-link" : "nav-link"} onClick={handleNavClick}> Contact</NavLink> </li>
                <li className="fav-wrapper"> 
                  <NavLink style={{textDecoration: 'none'}} to="/favorite" className={({ isActive }) => isActive ? "fav-wrapper active-link" : "fav-wrapper" }  onClick={handleNavClick} >
                          <i className="bi bi-heart-fill"></i><h5>
                            {favoritesCount > 0 ? `${favoritesCount}` : `Fav`}</h5>
                    </NavLink></li>
                <li className="cart-wrapper"><NavLink style={{textDecoration: 'none'}} to="/cart" className={({ isActive }) => isActive ? "cart-wrapper active-link" : "cart-wrapper " } onClick={handleNavClick}  >
                          <i className="bi bi-cart-fill"></i><h5>{cartCount > 0 ? `${cartCount}` : `Cart` }</h5>
                    </NavLink></li>
              </ul>
            </div>
           </div>
      </div>
    </>

  );
};

export default Header