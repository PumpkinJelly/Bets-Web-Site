/**
 * ActionButtons Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./actionButtons.module.css";


const ActionButtons = () => {
  return (
    <div className={styles.container}>
      <Link href="https://wa.me/+7777777777">
        <FaWhatsapp size={30} />
      </Link>
    </div>
  );
};

export default ActionButtons;
