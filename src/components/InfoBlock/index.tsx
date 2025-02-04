/**
 * InfoBlock Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import { InfoBlockProps } from "@/content/info"
import styles from "./infoBlock.module.css";

const InfoBlock: React.FC<InfoBlockProps> = ({ description, icon: Icon, backgroundColor }) => {
  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.content}>
        <p>{description}</p>
        <Icon size={40}/>
      </div>
    </div>
  );
};

export default InfoBlock;