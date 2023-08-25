import "./Footer.css"
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <section className="section-footer">
            <div className="footer">
                <div className="footer-content">
                    <img className="logo-footer" src="src/assets/images/logo.png" alt="img-logo" />
                    <p className="tagline">Explore beautiful places <br /> as Easy as One Click</p>
                    <div className="icons">
                        <a className=" coba" href="#">
                            <FaFacebook />
                        </a>
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaTwitter />
                        </a>
                        <a href="#">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <div className="footer-content">
                    <h4>FEATURES</h4>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Social Media Kit</a></li>
                    <li><a href="#">Affiliate</a></li>
                </div>
                <div className="footer-content">
                    <h4>FEATURES</h4>
                    <li><a href="#">Refund</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Reward</a></li>
                </div>
                <div className="footer-content">
                    <h4>COMPANY</h4>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Media</a></li>
                </div>
                <div className="footer-content">
                    <h4>GET CONNECTED</h4>
                    <li><a href="#">Yogyakarta</a></li>
                    <li><a href="#">Indonesia</a></li>
                    <li><a href="#">0812-345-678</a></li>
                    <li><a href="#">support@yogyatorism.id</a></li>
                </div>
            </div>
        </section >


    )
}


export default Footer;