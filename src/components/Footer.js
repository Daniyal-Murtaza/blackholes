import React, { useState } from 'react';
import Contact from './Contact';
import About from './About';
import WeatherAPI from './WeatherAPI';

function Footer() {
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showWeatherAPI, setShowWeatherAPI] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
    setShowAbout(false);
    setShowWeatherAPI(false);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowContact(false);
    setShowWeatherAPI(false);
  };

  const handleWeatherAPIClick = () => {
    setShowWeatherAPI(true);
    setShowContact(false);
    setShowAbout(false);
  };

  const handleModalClose = () => {
    setShowContact(false);
  };

  return (
    <footer class="fixed-bottom">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" />
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">BLACKHOLE</a>
            <label class="navbar-toggler" type="label" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </label>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#weather" onClick={() => handleClick('weather')}>Home</a> */}
                <a class="nav-link" href="#weatherapi" onClick={handleWeatherAPIClick} >Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#about" onClick={handleAboutClick} >About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#contact" onClick={handleContactClick} >Contact</a>
                </li>
                <li class="nav-item">
                <label class="nav-link" > Created by Daniyal Murtaza</label>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        {showAbout && <About />}
        {showContact && (
          <div className="contact">
            <div className="modal-content">
              <span className="close" onClick={handleModalClose}>
                &times;
              </span>
              <Contact />
            </div>
          </div>
        )}
        {showWeatherAPI && <WeatherAPI />}
    </footer>

  );
}

export default Footer;






// import React from 'react';


// function Footer() {
//   return (
//     <footer class="fixed-bottom">
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" />
//         <nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//             <a class="navbar-brand" href="#">BLACKHOLE</a>
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li class="nav-item">
//                 <a class="nav-link" href="#">About</a>
//                 </li>
//                 <li class="nav-item">
//                 <a class="nav-link" href="#">Contact</a>
//                 </li>
//                 <li class="nav-item">
//                 <a class="nav-link" href="#">Created by Daniyal Murtaza</a>
//                 </li>
//             </ul>

//             </div>
//         </div>
//         </nav>
//     </footer>
//   );
// }

// export default Footer;


