import "../styles.css"
import Github from "../images/GitHub-Emblem.png"
import Gmail from "../images/gmail.png"
import Linkedin from "../images/Linkedin-Logo.png"

export default function Footer() {
    return (
    <div className="footerContainer">
        <a href="https://github.com/felixwidell">
            <img src={Github} className="footerGit"/>
        </a>
        <img src={Gmail} className="footerGmail"/> <h3>felix.widell@gmail.com</h3>
        <a href="https://www.linkedin.com/in/felix-widell-6aa637300/">
            <img src={Linkedin} className="footerLinkedin"/>
        </a>  
    </div>
    );
}