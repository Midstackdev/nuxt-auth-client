<template>
	<div>
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h1 class="title has-text-grey">Join us</h1>
            <div class="box">
              <form @submit.prevent="submit">
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Jony Ive" v-model="form.name">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" v-model="form.email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" v-model="form.password">
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button type="submit" class="button is-success is-block is-fullwidth">
                      Register
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
		
	</div>
</template>

<script>
  
  export default {
    data () {
      return {
        form: {
          name: '',
          email: '',
          password: ''
        }
      }
    },

    methods: {
      submit () {
        console.log('in')
      }
    }
  }
</script>