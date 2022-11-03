import { Link } from "react-router-dom";
import styles from './styles/menu.module.css'

const Menu = () => {
    return (
        <>
        <header className={styles.header}>
            <Link className={styles.headerLink} to='/'>HOME</Link>
            <Link className={styles.headerLink} to='src/Cats'>CATS</Link>
            <Link className={styles.headerLink} to='src/Weather'>WEATHER</Link>
            <Link className={styles.headerLink} to='src/Youtube'>YOUTUBE</Link>
        </header>
        </>
    )
}
export default Menu;