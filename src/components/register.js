import React from "react";
import "./register.css";
import img from "../images/tractor.jpg";
const Register = () => {
  return (
    <>
      <div className="main1">
        <img src={img} alt="" className="img-fluid" />
        <center>
          <div className="main mt-5">
            <div className="register">
              <h2>Register here</h2>
              <form id="register" method="post">
                <label htmlFor> Applicant Name: </label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your Applicant-Name"
                  required
                />
                <br />
                <br />

                <label htmlFor>Phone No : </label>
                <br />
                <input
                  type="text"
                  name="number"
                  id="name"
                  placeholder="Enter your contact "
                />
                <br />
                <br />
                <label htmlFor>E-Mail : </label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="name"
                  placeholder="xyz@gmail.com"
                />
                <br />
                <br />
                <label htmlFor>Address : </label>
                <br />
                <input
                  type="text"
                  name="address"
                  id="name"
                  placeholder="Put your permanent address"
                />
                <br />
                <br />
                <label htmlFor><b>Password : </b></label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your password"
                />
                <br />
                <br />
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  defaultValue="submit"
                />
              </form>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default Register;
