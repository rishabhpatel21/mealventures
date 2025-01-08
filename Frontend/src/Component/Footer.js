import React from "react";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerquick = [
    {
      id: "1",
      title: "BrowseFooditem",
      path: "/home",
    },
    {
      id: "2",
      title: "BrowseFoodtime",
      path: "/home",
    },
    {
      id: "3",
      title: "Registrations",
      path: "/home",
    },
  ];
  const footerabout = [
    {
      id: "1",
      title: "AboutUS",
      path: "/home",
    },
    {
      id: "2",
      title: "Minssion",
      path: "/home",
    },
    {
      id: "3",
      title: "Contact",
      path: "/home",
    },
  ];
  const footersocial = [
    {
      id: "1",
      title: "Facebook",
      path: "/home",
    },
    {
      id: "2",
      title: "twitter",
      path: "/home",
    },
    {
      id: "3",
      title: "Instagram",
      path: "/home",
    },
  ];
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="brand-details">
            <h4 className="brand-name">Meal Ventures</h4>
            <p className="short-intro">
              Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor
              convallis. Bibendum sapien suspendisse ipsum urna malesuada elit.
              Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.
            </p>
          </div>
          <div className="sub-links">
            <div className="infosections">
              <h4>Quick Links</h4>
              <h4>About</h4>
              <h4>Social</h4>
            </div>
            <div className="infrolinks">
              <ul>
                {footerquick.map((item) => {
                  return (
                    <li className="footer-list" key={item.id}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {footerabout.map((item) => {
                  return (
                    <li className="footer-list" key={item.id}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {footersocial.map((item) => {
                  return (
                    <li className="footer-list" key={item.id}>
                      <Link to={item.path}>{item.title}</Link>
                    </li> 
                  );
                })}
              </ul>
            </div>
            <p className="copyright">@ Meal Ventures</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
