<template>
  <div class="login_page">
    <div class="login-contain is-flex">
      <div class="card login-card">
        <div class="card-content">
          <img alt="Bogo Alert" class="login-logo" src="../assets/bogo_new.png">
          <hr>
          <div class="columns">
            <div class="column register is-half">
              <p class="login-head">Sign Up (It's Free!)</p>
              <div class="register-notif-email notification is-hidden">
                <p>The email provided is invalid. Please try again.</p>
              </div>
              <div class="register-notif-pwd notification is-hidden">
                <p>The passwords you entered did not match. Please try again.</p>
              </div>
              <div class="register-form">
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input id="register_email" class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input id="register_pwd" class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                    <input id="register_pwd_conf" class="input" type="password"
                    placeholder="Confirm Password">
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button v-on:click="register" class="button is-primary login-btn">
                      Sign Up
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div class="column login is-half">
              <p class="login-head">Log In</p>
              <div class="login-notif notification is-hidden">
                <p>Those credentials are incorrect. Please try again.</p>
              </div>
              <div class="login-form">
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input id="email" class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input id="password" class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button v-on:click="login" class="button is-primary login-btn">
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default {
  name: 'Login',
  methods: {
    register() {
      if (emailIsValid(document.getElementById('register_email').value) === true) {
        if (document.getElementById('register_pwd').value === document.getElementById('register_pwd_conf').value) {
          firebase.auth().createUserWithEmailAndPassword(document.getElementById('register_email').value, document.getElementById('register_pwd').value).then(
            function () {
              this.$router.replace('/');
            },
          );
        } else {
          document.querySelector('.register-notif-pwd').classList.remove('is-hidden');
        }
      } else {
        console.log('error');
        document.querySelector('.register-notif-email').classList.remove('is-hidden');
      }
    },
    login() {
      firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('password').value).then(
        () => {
          this.$router.replace('/');
        }, () => {
          document.querySelector('.login-notif').classList.remove('is-hidden');
        },
      );
    },
  },
};
</script>
<style lang="scss">
  @import "../assets/sass/custom.scss";
  .login_page {
    height: 60px;
    height: 100%;
    .login-contain {
      align-items: center;
      justify-content: center;
      .column.login {
        display: flex;
        flex-direction: column;
      }
    }
    .login-card {
      min-height: 500px;
      width: 80%;
    }
    img.login-logo {
      width: 400px;
      margin: 0 auto;
      display: block;
    }
    .login-head {
      font-size: 25px;
      text-align: center;
    }
  }
  .login-form, .register-form {
    width: 75%;
    margin: 40px auto;
  }
  .login-btn {
    width: 100%;
  }
  @media (max-width: 769px) {
    .login_page .login-card .login {
      width: 100%;
    }
    .login_page .login-card .columns {
      flex-direction: column;
    }
  }
</style>
