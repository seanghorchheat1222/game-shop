import styles from './footer.module.css'
import logo from '../../assets/images/logoimg.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
 return(
 <>
 <div className={styles.bgfooter}>
  <div className="container w-100" >
  <div className="row">
    <div className={`col-lg-3 col-md-6 col-sm-6 col-12 ${styles.footersection1}`}>
     <img className="mb-4" src={logo}></img>
     <div>
    <p>It helps designers plan out where the content will sit, the content to be written and approved.</p>
     </div>
     <div className={styles.icons}>
      <div className={styles.iconbg}>
       <i className="bi bi-facebook"></i>
      </div>
       <div className={styles.iconbg}>
       <i className="bi bi-instagram"></i>
      </div>
       <div className={styles.iconbg}>
       <i className="bi bi-twitter-x"></i>
      </div>
     </div>
    </div>
    <div className={`col-lg-3 col-md-6 col-sm-6 col-12 pt-5 ${styles.footersection2}`}>
     <h3>Service</h3>
     <div className={`${styles.footnav}`}>
      <i className="bi bi-arrow-right"></i>
      <p>Log out</p>
     </div>
      <div className={`${styles.footnav}`}>
      <i className="bi bi-arrow-right"></i>
     <p>Wishlist</p>
     </div>
      <div className={`${styles.footnav}`}>
      <i className="bi bi-arrow-right"></i>
         <p>Shopping FAQs</p>
     </div>
    </div>
     <div className={`col-lg-3 col-md-6 col-sm-6 col-12 pt-5 ${styles.footersection2}`}>
     <h3>Company</h3>
     <div className={`${styles.footnav}`}>
      <i className="bi bi-arrow-right"></i>
        <NavLink style={{color: 'black', textDecoration: 'none'}} to="/"><p>Home</p></NavLink>
     </div>

      <div className={`${styles.footnav}`}>
      <i className="bi bi-arrow-right"></i>
       <NavLink style={{color: 'black', textDecoration: 'none'}} to="/qanda"><p>Q&A</p></NavLink>
     </div>
      <div className={`${styles.footnav}`}>
      <i className="bi bi-arrow-right"></i>
        <NavLink style={{color: 'black', textDecoration: 'none'}} to="/contact"><p>Contact</p></NavLink>
     </div>
    </div>
     <div className={`col-lg-3 col-md-6 col-sm-6 col-12 pt-5 ${styles.footersection3}`}>
     <h3>Contact</h3>
     <div>
      <p >Sisowath Quay Riverside, Phnom Penh 855 Cambodia</p>
     </div>
      <div className={styles.footnav1}>
      <i className="bi bi-geo-alt-fill"></i>
      <p>12K, Domnak Village</p>
     </div>
       <div className={styles.footnav1}>
      <i className="bi bi-telephone-fill"></i>
      <p>+885 93-697-886</p>
     </div>
    </div>
  </div>
  </div>
 </div>
 <div className={styles.copyrightbg}>
   <div className="container mt-4">
    <div className="row">
    <div className="col-lg-6 col-md-6 col-12">
      <p style={{color: 'white'}}>© All Copyright 2025</p>
    </div>
   <div className="col-lg-5 col-md-5 col-12 d-flex justify-content-end">
      <p style={{color: 'white'}}>Terms & Condition | Privacy Policy</p>
    </div>
     <div className="col-lg-1 col-md-1 col-12 d-flex justify-content-end">
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}  className={styles.btnArrorwtop}><i className="bi bi-arrow-up" ></i></button>
    </div>
    </div>
   </div>
 </div>

 </> 

 ) 
}

export default Footer;  