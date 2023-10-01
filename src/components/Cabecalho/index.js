import CabecalhoLink from 'components/CabecalhoLink'
import styles from './Cabecalho.module.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">Home</CabecalhoLink>
                <CabecalhoLink url="./favoritos">Favoritos</CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho