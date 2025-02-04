import { ServiceItemProps } from "@/types/serviceItemProps";
import { FaGift, FaMicrophone, FaStar } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

export const servicesItems: ServiceItemProps[] = [
    {
        description: "Проведение турниров по мини-футболу",
        icon: FaStar
    },
    {
        description: "Поощрения в виде призовых и различные номинации",
        icon: FaGift
    },
    {
        description: "Поддержка молодых спортс-менов через образовательные и мотивационные программы",
        icon: FaPerson
    },
    {
        description: "Организация подкаст шоу и разбор игры действующих участников",
        icon: FaMicrophone
    }
];