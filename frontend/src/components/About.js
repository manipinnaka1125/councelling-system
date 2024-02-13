import { Typography,Link } from '@mui/material';
import React from 'react';


const About = () => {
  return (
    
    
    <div style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.paragraph}>
        Welcome to our counseling platform! We are dedicated to providing a safe
        and supportive space for individuals seeking guidance and support. Our
        team of experienced counselors is here to help you navigate through
        life's challenges.
      </p>
      <p style={styles.paragraph}>
        At our core, we believe in the power of counseling to transform lives.
        Whether you are facing personal struggles, relationship issues, or
        simply need someone to talk to, our platform is designed to connect you
        with qualified counselors who can assist you on your journey.
      </p>
      <p style={styles.paragraph}>
        Feel free to explore our services, schedule appointments, and take steps
        towards a healthier and happier life. Thank you for choosing us as your
        partner on the path to well-being.
      </p>
      <Typography>
     
      <center> <p>for any querys message my instagram account:</p><Link color="inherit" href="https://www.instagram.com/swaroop2k_5/">
        pinnakamaniswaroop
      </Link></center>
      </Typography>
    </div>
    
  );
};


    const styles = {
        container: {
          maxWidth: '600px',
          margin: 'auto',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: 'light grey',
        },
        heading: {
          color: 'darkblack',
          fontSize: '2em',
          marginBottom: '20px',
        },
        paragraph: {
          color: 'black',
          fontSize: '1.2em',
          lineHeight: '1.6',
          marginBottom: '15px',
        },
      };
      

export default About;
