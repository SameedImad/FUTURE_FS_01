import React from 'react'
import "./Footer.css"
export const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className="footer-bottom">
            <p>© 2026 Crafted with <span>❤️ & Code by </span><span className="nowrap">Sameed Imad</span></p>
          <div className="footer-bottom-right">
              <p className="para">Terms of Services</p>
              <p className="para">Privacy Policy</p>
              <p className="para">Connect with me</p>
              <a href="https://www.linkedin.com/in/sameed-imad-2360a932a/"><i class="footer-icon fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/SameedImad?tab=repositories"><i class="footer-icon fa-brands fa-github"></i></a>
          </div>
         </div>
    </div>
  )
}
export default Footer