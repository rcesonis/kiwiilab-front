import React from "react";
import "./SignUp.scss";
import { Form } from "react-bootstrap";

const SignUp = () => {
  return (
    <main class="page vh-100 py-5 registration-page">
      <section class="clean-block clean-form dark">
        <div class="container">
          <div class="block-heading pb-5">
            <h2 class="text-info">Registration</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <form className="py-5">
            <div class="mb-3">
              <label class="form-label" for="name">
                Name
              </label>
              <input class="form-control item" type="text" id="name" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="password">
                Password
              </label>
              <input class="form-control item" type="password" id="password" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="email">
                Email
              </label>
              <input class="form-control item" type="email" id="email" />
            </div>
            <button class="btn btn-primary" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
