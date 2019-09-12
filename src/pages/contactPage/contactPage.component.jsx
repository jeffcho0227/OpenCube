import React from 'react';
import style from './contactPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  return (
    <div className={style.contactPageContainer}>
      <div className={style.title}>CONTACT ME</div>
      <p className={style.description}>
        HI!! Thank you for visiting. I am Jeff, and I am a software developer
        <br />
        This is a mock e-commerce website that I built using React, Redux, and Firebase.
        <br />
        Feel free to contact me if you have any question!!
      </p>
      <div className={style.socialMediaLinks}>
        <a href="mailto: jeffcho0227@gmail.com"><FontAwesomeIcon icon={ faEnvelope } size='2x' color="black"/></a>
        <a href="https://www.linkedin.com/in/jeff-cho/"><FontAwesomeIcon icon={["fab", "linkedin"] } size='2x' color="black"/></a>
        <a href="https://github.com/jeffcho0227"><FontAwesomeIcon icon={["fab", "github"] } size='2x' color="black"/></a>
      </div>
    </div>
  )
};

export default ContactPage;