import '../styles/Header.css'
import logo from '../assets/logo.png'

function Header() {
    const titre = "Receuil de poèmes"
    return (<div className="pw-header">
        <img src={logo} alt="Poetic Webapp" className='pw-logo' />
        <h1 className='pw-title'>{titre.toUpperCase()}</h1>
    </div>)
}

export default Header