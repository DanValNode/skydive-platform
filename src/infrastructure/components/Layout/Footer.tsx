import React from 'react'

const Footer: React.FC<any> = (prop) => {
  return (
        <footer className="footer bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p className="copyright font-alt">&copy; 2022&nbsp;<a href="index.html">SkydiveApp</a>, All Rights Reserved
                </p>
              </div>
              <div className="col-sm-6">
                <div className="footer-social-links">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer
