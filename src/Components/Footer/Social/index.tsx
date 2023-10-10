import { SocialContainer, SocialIcons } from "./styles";
import { FiMail } from "react-icons/fi"
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const Social = () => {
    return(
        <>
            <SocialContainer>
                <SocialIcons href="mailto:" target="_blank">
                    <FiMail className="fas fa-envelope" />
                </SocialIcons>
                <SocialIcons href="https://www.facebook.com/instituicaosociedadeplural/" target="_blank">
                    <FaFacebookSquare className="fab fa-facebook-f" />
                </SocialIcons>
                <SocialIcons href="https://mobile.twitter.com/SociedadePlural" target="_blank">
                    <FaTwitter className="fab fa-twitter" />
                </SocialIcons>
                <SocialIcons href="https://www.instagram.com/sociedadeplural/" target="_blank">
                    <FaInstagram className="fab fa-instagram" />
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/company/institui%C3%A7%C3%A3o-sociedade-plural/mycompany/" target="_blank">
                    <FaLinkedin className="fab fa-linkedin-in" />
                </SocialIcons>
            </SocialContainer>
        </>
    )
}

export { Social }