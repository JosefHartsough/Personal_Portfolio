import React from "react";
import * as footerStyles from "../styles/Footer/Footer.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
export const Footer: React.FC = () => {
  return (
    <div className={footerStyles["container"]}>
      <h1>Feel free to reach out.</h1>
      <h3>Email</h3>
      <button
        className={footerStyles["button"]}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.open("http://www.google.com", "_blank");
        }}
      >
        <HiOutlineMail size={30} />
      </button>
      <h3>Other Platforms</h3>
      <div className={footerStyles["platforms"]}>
        <button
          className={footerStyles["button"]}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/JosefHartsough", "_blank");
          }}
        >
          <AiFillGithub size={30} />
        </button>
        <button
          className={footerStyles["button"]}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.open("http://www.google.com", "_blank");
          }}
        >
          <BsLinkedin size={30} />
        </button>
      </div>
      <h5 style={{ marginTop: "100px" }}>Built by Josef Hartsough | 2022</h5>
    </div>
  );
};
