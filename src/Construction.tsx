import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./UnderConstruction.module.css";

const UnderConstruction: React.FC = () => {
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center text-center ${styles.container}`}>
      <img
        src="assets/img/core-img/pf-logo3.png"
        // src="assets/img/core-img/pf-logo4.jpg"

        alt="Logo"
        className={`mb-4 ${styles.logo}`}
      />

      <h1 className={`display-4 ${styles.textGold}`}>🚧 Site Under Construction 🚧</h1>
      <p className={`lead mb-4 ${styles.textLight}`}>
        We're working hard to launch something amazing. Stay tuned!
      </p>

      {/* <form className="w-100 d-flex flex-column flex-md-row justify-content-center gap-2 px-3 px-md-0">
        <input
          type="email"
          className={`form-control form-control-lg ${styles.inputDark}`}
          placeholder="Enter your email"
        />
        <button type="submit" className={`btn btn-lg ${styles.btnGold}`}>
          Notify Me
        </button>
      </form> */}

      <footer className={`mt-5 small ${styles.textLight}`}>
        &copy; {new Date().getFullYear()} Profech IT Services. All rights reserved.
      </footer>
    </div>
  );
};

export default UnderConstruction;
