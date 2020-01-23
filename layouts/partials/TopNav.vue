<template>
	<div class="container">
		<nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </nuxt-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link :to="{ name: 'index' }" class="navbar-item">
            Home
          </nuxt-link>

          <a class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
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
          </div>
        </div>
        
        <div class="navbar-end">
          <template v-if="authenticated">
            <a class="navbar-item">
              Timeline
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                {{ user.name }}
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
                <a class="navbar-item" @click.prevent="logout">
                  Logout
                </a>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="navbar-item">
              <div class="buttons">
                <nuxt-link :to="{ name: 'register' }" class="button is-primary">
                  <strong>Sign up</strong>
                </nuxt-link>
                <nuxt-link :to="{ name: 'login' }" class="button is-light">
                  Log in
                </nuxt-link>
              </div>
            </div>
          </template>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    methods: {
      logout () {
        this.$auth.logout()
      }
    }
  }
</script>