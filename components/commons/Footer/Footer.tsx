import { FC } from "react";
import Image from "next/image";
import { FooterProps as Props } from "./Footer.types";
import Squirrel from "./assets/Squirrel.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import styles from "./styles/Footer.module.scss";

const Footer: FC<Props> = ({}) => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <ul>
            <li>
              <Image src={Squirrel} alt="" />
              <span className={styles.main_styling}>Squeryll</span>
            </li>
          </ul>
          <ul>
            <li>Product</li>
            <li>Feature</li>
            <li>Performance</li>
            <li>Pricing</li>
          </ul>
          <ul>
            <li className={styles.bold_styling}> About </li>
            <li>Privacy Policy</li>
            <li>Security Information</li>
          </ul>
          <ul>
            <li className={styles.bold_styling}>Support</li>
            <li>Contact Us</li>
            <li>Developers and API</li>
            <li>Blog</li>
            <li>Forum</li>
          </ul>
          <ul>
            <li className={styles.bold_styling}>Social</li>
            <li>
              <FiGithub className={styles.icon} /> GitHub
            </li>
            <li>
              <FaLinkedinIn className={styles.icon} /> LinkedIn
            </li>
            <li>
              <AiOutlineTwitter className={styles.icon} /> Twitter
            </li>
          </ul>
        </div>
        <div>
          <p>© 2023 Squeryll</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
