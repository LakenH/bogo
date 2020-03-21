<template>
  <nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
    <div class="container bogo-nav-cont">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/bogo_stacked.png" width="auto" height="60">
        </a>
      </div>

      <!-- <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>

          <router-link to="/About" class="navbar-item">
            About
          </router-link>
          <router-link to="/admin" class="navbar-item">
            Admin
          </router-link>
          !-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div> --
        </div>
      </div> -->
      <template v-if="email">
        <div class="navbar-end">
          <div class="navbar-item">
            <p>Aloha, {{email}}</p>
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign Out</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div class="navbar-end" v-else>
        <div class="navbar-item">
          <!-- <div class="buttons">
            <router-link to="/login" class="button is-primary">
              <strong>Sign up</strong>
            </router-link>
            <router-link to="/login" class="button is-light">
              Log in
            </router-link>
          </div> -->
          <router-link to="/login" class="button is-primary">
            Your List
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Header',
  props: {
    email: String,
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style lang="scss">
  @import "../assets/sass/custom.scss";

  .navbar.is-fixed-top {
    min-height: 60px;
    padding-top: env(safe-area-inset-top);
    h1 {
      font-size: 24px;
    }
    .logo {
      width: 150px;
      height: auto;
    }
    > .bogo-nav-cont.container {
      display: flex;
      justify-content: space-between;
    }

  }

</style>
