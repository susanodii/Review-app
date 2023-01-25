
import { SocialIcon } from 'react-social-icons';





function Footer() {
  return (
    <>
        <footer className="footer-cont">
        
            <div className="footer-child">
                <h4>ReviewApp</h4>
                <ul className="footer-list">
                    <li><SocialIcon url="https://twitter.com/" bgColor="#8DB580"/></li>
                    <li><SocialIcon url="https://facebook.com/" bgColor="#8DB580"/></li>
                    <li><SocialIcon url="https://instagram.com/" bgColor="#8DB580" /></li>
                    <li><SocialIcon url="https://telegram.com/"  bgColor="#8DB580"/></li>
                </ul>
            </div>
             <br />
            <hr />
            <p>&copy;Copyright {new Date().getFullYear()} || TeamOpenSource</p>
            
        </footer>
      
    </>
  )
}

export default Footer
