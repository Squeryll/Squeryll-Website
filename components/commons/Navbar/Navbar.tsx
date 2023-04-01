import { FC } from 'react'
import { NavbarProps as Props } from "./Navbar.types"
import styles from "./styles/Navbar.module.scss"

const Navbar: FC<Props> = ({}) => {
  return (
  <div>
        <div className={styles.navbar}>
            <ul>
                <img className={styles.logo} src="public/images/logo.svg"></img>
                <ul className={styles.left}>Squeryll</ul>
                <li><a href="#">Product</a>
                <a href="#">Docs</a> 
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
                <a href="#">Support</a>
                <a href="#">Log in</a>
                <button type="button">Sign up</button></li>
            </ul>
        </div>
  </div>);
};

export default Navbar;
