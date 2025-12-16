import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//in ui how to make if user click on contact button how to check if its a mobile and redirect them to dialpad with the contact number in react js
//<a href="tel:+1234567890">Call Us</a>
//const isMobile = () => {
  // return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    // navigator.userAgent
  // );
// };
// const ContactButton = () => {
//   const handleContactClick = () => {
//     const phoneNumber = "+1234567890";

//     if (isMobile()) {
//       // Redirect to dialpad
//       window.location.href = `tel:${phoneNumber}`;
//     } else {
//       // Desktop behavior — show popup or alternative message
//       alert("Please call us at: " + phoneNumber);
//     }
//   };

//   return (
//     <button onClick={handleContactClick}>
//       Contact Us
//     </button>
//   );
// };

// export default ContactButton;


reportWebVitals();
