"use client";

import ServicesItem from "../ServicesItem";
import TitleBadge from "../TitleBadge";
import styles from "./services.module.css";
import { FaCompass } from "react-icons/fa";
import { useServicesItems } from "@/content/services"; 

const Services = () => {
  const servicesItems = useServicesItems(); 

  return (
    <div className={styles.container}>
      <TitleBadge title="Основные направления" icon={FaCompass} />
      <div className={styles.items}>
        {servicesItems.map((item, index) => (
          <ServicesItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
