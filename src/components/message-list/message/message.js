import cls from "classnames";
import {format} from "date-fns";
import styles from "./message.module.css";

export const Message = ({message, children}) => {
    return(
            <div className={cls(styles.message,
            {[styles.currentMessage]: message.autor === "User"
        })}
            >
            <h3>{message.autor}</h3>
            <p>{message.message}</p>
            <p>{format(message.data, "yyyy-MM-dd HH:mm:ss")}</p>
            {children}
            </div>
    );
};
