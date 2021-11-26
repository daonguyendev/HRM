import React from "react";

function Login() {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 col-xl-4 my-5">
          <h1 class="display-4 text-center mb-5">ĐẶNG NHẬP</h1>

          <form>
            <div class="form-group">
              <label>Tên tài khoản</label>

              <input
                type="text"
                class="form-control"
                placeholder="Nhập vào tài khoản"
              />
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col">
                  <label>Mật khẩu</label>
                </div>
                <div class="col-auto">
                  <a
                    href="password-reset.html"
                    class="form-text small text-muted"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
              </div>

              <div class="input-group input-group-merge">
                <input
                  type="password"
                  class="form-control form-control-appended"
                  placeholder="Nhập vào mât khẩu"
                />

                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fe fe-eye"></i>
                  </span>
                </div>
              </div>
            </div>

            <button class="btn btn-lg btn-block btn-primary mb-3">
              Đăng nhập
            </button>

            <div class="text-center">
              <small class="text-muted text-center">
                Chưa có tài khoản ? <a href="sign-up.html">Đăng ký</a>.
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
