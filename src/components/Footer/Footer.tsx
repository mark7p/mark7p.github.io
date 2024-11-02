import { useState } from 'react';
import './Footer.css';

function Footer() {
    const [currentYear, _] = useState(new Date().getFullYear());


  return (
    <footer className="footer border-t border-custom-teal-50/50 ">
      <p>© {currentYear} - mark7p</p>
    </footer>
  )
}

export default Footer;