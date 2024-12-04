import Link from "next/link";
import React from "react";

const SignBook = () => {
  return (
    <>
      <div className="signBook">
        <h4>Log in or sign up to book</h4>
        <form>
          <div className="form-group">
            <select className="form-select">
              <option value="india(+91)">India(+91)</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Phone number"
              className="form-control"
            />
          </div>
        </form>
        <div className="privacy">
          <span>
            We’ll call or text you to confirm your number. Standard message and
            data rates apply. <Link href={"/"}>Privacy Policy</Link>
          </span>
        </div>
        <div className="form-group">
          <button className="continueButton">Continue</button>
        </div>
      </div>
    </>
  );
};

export default SignBook;
