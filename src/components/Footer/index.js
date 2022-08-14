import React from 'react';

function Footer() {
    return (
      <section className="footer container border-top" id="footer">
              <div className="grid text-center mt-3" >
                <div className= 'g-col-6 my-3'>
                  Anjuli Garcia - WOC Developer + Social Impact Driven + Dog Enthusiast © 
                </div>
                  <div className="g-col-6">
                    <a className="linkedin fw-bold mx-3" href="#https://www.linkedin.com/in/anjulituck/">
                       LINKEDIN
                    </a>
                    <a className="twitter fw-bold mx-3" href="https://twitter.com/AnjuliTuck">
                       TWITTER
                    </a>
                    <a className="github fw-bold mx-3" href="https://github.com/anjulituck">
                        GITHUB
                    </a>
                  </div>
                </div>
      </section>
    );
  }
  
  export default Footer;
  