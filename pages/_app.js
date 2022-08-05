import "@picocss/pico";
import "../styles/globals.css";
import React from "react";
import TransactionProvider from "../contexts/TransactionContext";

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <main className="container">
                <TransactionProvider>
                    <Component {...pageProps} />
                </TransactionProvider>
            </main>
            <footer className="container">
                <p>
                    Visit <a href="https://docs.onflow.org">docs.onflow.org</a>{" "}
                    to learn more. <br />
                    Forked from the{" "}
                    <a href="https://github.com/emerald-dao/tx-script-utility/">
                        Emerald DAO TX Script Utility
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default MyApp;
