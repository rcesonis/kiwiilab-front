import React from "react";
import "./SignUp.scss";
import { Form, Button } from "react-bootstrap";

const SignUp = () => {
  return (
    <main class="page vh-100 py-5 registration-page">
      <section className="clean-block clean-form dark">
        <div className="container">
          <div className="block-heading pb-5">
            <h2 className="text-info">Registration</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <Form className="py-5">
            <div className="mb-3">
              <label className="form-label" for="name">
                Name
              </label>
              <input className="form-control item" type="text" id="name" />
            </div>
            <div className="mb-3">
              <label className="form-label" for="password">
                Password
              </label>
              <input
                className="form-control item"
                type="password"
                id="password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" for="email">
                Email
              </label>
              <input className="form-control item" type="email" id="email" />
            </div>
            <Button className="btn btn-primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
