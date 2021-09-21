import React from "react";
import Play from "../UI/Play";
import "./Footer.css";
import List1 from "./List1";
import List2 from "./List2";
import List3 from "./List3";
import List4 from "./List4";
import Swiggy from "./Logo.webp";
const Footer = () => {
  return (
    <div className="foot">
      <div className="footContainer">
        <div className="foot2">
          <div className="fddf">
            <div className="head">COMPANY</div>
            <ul className="uList">
              <li>About us</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Swiggy Blog</li>
              <li>Bug Bounty</li>
              <li>Swiggy Super</li>
              <li>Swiggy Corporate</li>
              <li>Swiggy Instamart</li>
            </ul>
          </div>
          <div className="fddf">
            <div className="head">CONTACT</div>
            <ul className="uList">
              <li> Help & Support</li>
              <li> Partner with us</li>
              <li> Ride with us</li>
            </ul>
          </div>
          <div className="fddf">
            <div className="head">Legal</div>
            <ul className="uList">
              <li>Terms & Conditions</li>
              <li>Refund & Cancellation</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Offer Terms</li>
              <li>Phishing & Fraud</li>
            </ul>
          </div>
          <div className="fddf">
            <Play class="pflex" />
          </div>
        </div>
        <div className="foot3">
          <div className="head" style={{ marginTop: "4%" }}>
            WE DELIVER TO
          </div>
          <div className="foot2">
            <List1 className="fddf" />
            <List2 className="fddf" />
            <List3 className="fddf" />
            <List4 className="fddf" />
          </div>
        </div>
        <div style={{ marginTop: "2%", border: "0" }} className="foot2">
          <div>
            <img
              style={{ width: "142px", height: "42px" }}
              src={Swiggy}
              alt=" "
            />
          </div>
          <div style={{ fontSize: "24px" }}>© 2021 Swiggy</div>
          <div style={{ width: "15%" }}>
            <i className="fab fa-facebook-f"> </i>
            <i className="fab fa-pinterest-p"> </i>
            <i className="fab fa-instagram"> </i>
            <i className="fab fa-twitter"> </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
