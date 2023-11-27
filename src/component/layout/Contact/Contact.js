import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact: mayank.agrawal_cs21@gla.ac.in, nikhil.agrawal1_cs21@gla.ac.in, ranjeet.singh_cs21@gla.ac.in</Button>
      </a>
    </div>
  );
};

export default Contact;
