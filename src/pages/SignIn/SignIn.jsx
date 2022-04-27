import React from "react";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <main class="page login-page">
      <section class="clean-block clean-form dark">
        <div class="container">
          <div class="block-heading">
            <h2 class="text-info">Log In</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <form>
            <div class="mb-3">
              <label class="form-label" for="email">
                Email
              </label>
              <input id="email" class="form-control item" type="email" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="password">
                Password
              </label>
              <input id="password" class="form-control" type="password" />
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input id="checkbox" class="form-check-input" type="checkbox" />
                <label class="form-check-label" for="checkbox">
                  Admin
                </label>
              </div>
            </div>
            <button class="btn btn-primary" type="submit">
              Log In
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
