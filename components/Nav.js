import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/createaccount'>Create Account</Link>
                </li>
                <li>
                    <Link href='/login'>Login</Link>
                </li>
                <li>
                    <Link href='/deposit'>Deposit</Link>
                </li>
                <li>
                    <Link href='/withdraw'>Withdraw</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav 