import { Facebook, Instagram, Twitter } from "@mui/icons-material"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="customer-home__footer">
            <div className="footer__legal">
                <Link to="">Términos de Servicio</Link>
                <Link to="">Privacidad</Link>
                <Link to="">Referencias</Link>
                <span>&copy; {new Date().getFullYear()} A Company.</span>
            </div>
            <div className="footer__social">
                <a href="//www.facebook.com">
                    <Facebook />
                </a>
                <a href="//www.instagram.com">
                    <Instagram />
                </a>
                <a href="//www.twitter.com">
                    <Twitter />
                </a>
            </div>
        </footer>
    )
}
