import { ElementType } from "react";
import { FaCrown, FaHeart } from "react-icons/fa";

export interface InfoBlockProps {
    description: string;
    icon: ElementType;
    backgroundColor?: string;
}

export const highlights: InfoBlockProps = {
    description: "Множественные номинации и итоги года - подарки от спонсоров и многое другое",
    icon: FaCrown,
};

export const halykLiga: InfoBlockProps = {
    description: "Халык-Лига - это больше, чем спорт! Это стиль жизни, путь к самосовершенствованию и сообщество тех, кто верит в силу единства. Присоединяйтесь к нам!",
    icon: FaHeart,
};
