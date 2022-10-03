import '../styles/Footer.css'
import logo from '../assets/logoMg.png'
import nav1 from '../assets/nav-icon1.svg'
import nav2 from '../assets/nav-icon2.png'

function Footer() {


	return (
		<footer className='lmj-footer'>
			<img src={logo} className="logo"/>
			<div className="social-icon">
              <a href="https://linkedin.com/in/mathisgourc" target="_blank">
                <img src={nav1} alt="linkedin-icon" />
              </a>
              <a href="https://github.com/gourcmathis" target="_blank">
                <img src={nav2} alt="github-icon" />
              </a>
            </div>
			<p>CopyRight © 2022. Tous droits réservés Mathis Gourc</p>
		</footer>
	)
}

export default Footer
