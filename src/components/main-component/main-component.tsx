import React from "react";
import { Logo } from "../../assets/icons";
import { Salutation } from "../salutation/salutation";
import styles from "./styles.module.scss";


export const MainComponent = () => {

    return (
        <div className={ styles.parent }>
            <header className={ styles.header }>
                <div className={ styles.headerContent }>
                    <Logo />
                </div>
            </header>
            <main className={ styles.main }>
                <Salutation />
            </main>
            <footer className={ styles.footer }>Footer</footer>
        </div>
    );
};
