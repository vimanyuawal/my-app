import React from 'react'
import SocialButtons from './SocialButtons.js'

function Footer() {
    return (
        <footer className="page-footer font-small special-color-light pt-4 fixed-bottom">
          
        <SocialButtons />
        
          <div className="footer-copyright text-center py-3">
              © 2020 Copyright: Vimanyu Awal
          </div>
        
        </footer>
    )
}

export default Footer;