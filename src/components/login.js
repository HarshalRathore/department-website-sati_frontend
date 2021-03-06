import React from "react";

export default function Login() {
  return (
    <div class="auth option2">
      <div class="auth_left">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <a class="header-brand" href="index.html">
                <i class="fa fa-graduation-cap brand-logo"></i>
              </a>
              <div class="card-title mt-3">Login to your account</div>
              <button type="button" class="btn btn-facebook">
                <i class="fa fa-facebook mr-2"></i>Facebook
              </button>
              <button type="button" class="btn btn-google">
                <i class="fa fa-google mr-2"></i>Google
              </button>
              <h6 class="mt-3 mb-3">Or</h6>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label class="form-label">
                <a href="forgot-password.html" class="float-right small">
                  I forgot password
                </a>
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label">Remember me</span>
              </label>
            </div>
            <div class="text-center">
              <a href="index.html" class="btn btn-primary btn-block" title="">
                Sign in
              </a>
              <div class="text-muted mt-4">
                Don't have account yet? <a href="register.html">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
