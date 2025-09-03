import styles from './contact.module.css'

const Contact = () => {
  const scrollToMiddle = () => {
    const target = document.getElementById("sentmessage");
    if(!target) return;

    const targetPosition = target.offsetTop;
    const targetHeight = target.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollY = targetPosition - (windowHeight / 2) + (targetHeight / 2);

    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
  }

  return(
    <>
     <div className="container">
    <div className={`${styles.title} mb-3 mt-3`}><p>SEND MESSAGE</p><button onClick={scrollToMiddle}><i className="bi bi-arrow-down"></i></button></div>
     </div>
   
     <div className={styles.map}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250151.46385240898!2d104.72503415263925!3d11.579317445293025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1756782288629!5m2!1sen!2skh" width="600" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
         <section id="sentmessage">
     <div className="container">
      <div className={`${styles.titles} mt-3 mb-3`}>
      <h3 style={{textAlign: 'center'}}>Let's <span style={{fontWeight: '100'}}>talk</span></h3>
      </div>
      <div className="row">
      <div className="col-lg-6 col-md-6 mb-5">
        <input  type="text" placeholder="WHAT'S YOUR NAME" className={` ${styles.txtName}  col-12`}></input>
      </div>
      <div className="col-lg-6 col-md-6 mb-5">
        <input type="text" placeholder="YOUR NAME" className={` ${styles.txtEmail}  col-12`}></input>
      </div>
       <div className="col-lg-12 col-md-12 ">
        <textarea   placeholder="TELL US ABOUT YOUR QUESTION" className={` ${styles.txtDescription}  col-12`} name="" id=""></textarea>
      </div>
      <div className="d-flex justify-content-end mb-3 mt-3">
        <button className={styles.btnSendMessage}>
          SEND MESSAGE 
          <div className={styles.bgIconbtn}>
           <i className="bi bi-arrow-right"></i>
          </div>
        </button>
      </div>
      </div>
     </div>
           </section>
  
    </>
  )
} 
export default Contact