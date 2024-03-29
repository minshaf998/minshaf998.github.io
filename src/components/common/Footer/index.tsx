import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Twitter } from "@material-ui/icons";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__container">
        <h4>Follow me on social media</h4>
        <div className="footer__social-icons">
          {/* <a
            href="https://github.com/minshaf998"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <GitHubIcon className="social-icon" />
          </a> */}
          <a
            href="https://www.linkedin.com/in/minshaf998/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/_ins_f_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="social-icon" />
          </a>
          <a
            href="https://twitter.com/minshaf998"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="social-icon" />
          </a>
        </div>
        <p>
          <a
            href="https://github.com/minshaf998"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <GitHubIcon className="social-icon" /> */}
            Github
          </a>
          &nbsp; {/* Adding a space here */}
          <a
            href="https://www.hackerrank.com/minshaf998"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <GitHubIcon className="social-icon" /> */}
            HackerRank
          </a>
        </p>
        <p>
          Designed and developed by Mohamed Inshaf. Built with React. Hosted on
          Github.
        </p>
        <p>Copyright © Inshaf {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
