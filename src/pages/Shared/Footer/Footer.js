import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer p-10 bg-hero-pattern">
          <div>
            <span className="footer-title">Services</span>
            <Link className="link link-hover">Emergency Checkup</Link>
            <Link className="link link-hover">Monthly Checkup</Link>
            <Link className="link link-hover">Weekly Checkup</Link>
            <Link className="link link-hover">Deep Checkup</Link>
          </div>
          <div>
            <span className="footer-title">ORAL HEALTH</span>
            <Link className="link link-hover">Fluoride Treatment</Link>
            <Link className="link link-hover">Cavity Filling</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Teath Whitening</Link>
          </div>
          <div>
            <span className="footer-title">OUR ADDRESS</span>
            <Link className="link link-hover">New York - 101010 Hudson</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </div>
        </footer>
      </div>
      <div>
        <footer className="footer footer-center p-4 text-base-content">
          <div>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
