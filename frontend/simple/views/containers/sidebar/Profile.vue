<template>
  <div class="level is-mobile c-profile" v-if="$store.state.loggedIn">
    <div class="level-left">
      <img class="c-picture" v-if="userPicture" :src="userPicture" />
      <div class="c-user">
        <p class="c-is-ellipsis has-text-weight-bold">{{userDisplayName}}</p>
        <span class="gi-is-ellipsis is-size-7" data-test="profileDisplayName">{{userName}}</span>
      </div>
    </div>
    <div class="level-right">
      <button class="button is-icon"
        data-test="logoutBtn"
        @click.prevent="logout">
        <i class="fa fa-sign-out"></i>
      </button>
      <router-link class="button is-icon"
        tag="button"
        to="user"
        data-test="profileLink">
        <i class="fa fa-ellipsis-v"></i>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../../assets/sass/theme/index";

.c-profile {
  background: $body-background-color;
  padding: $gi-spacer-sm;
  border-radius: $radius;
  margin-top: $gi-spacer;
}

.c-picture {
  border-radius: 50%;
  height: 2rem;
  margin-right: $gi-spacer-sm;
}

.c-user {
  max-width: 5rem;
  white-space: nowrap;
  line-height: 1;
}
</style>
<script>
export default {
  name: 'Profile',
  computed: {
    userPicture () {
      return this.$store.getters.currentUserIdentityContract &&
        this.$store.getters.currentUserIdentityContract.attributes &&
        this.$store.getters.currentUserIdentityContract.attributes.picture
    },
    userDisplayName () {
      return this.$store.getters.currentUserIdentityContract &&
        this.$store.getters.currentUserIdentityContract.attributes &&
        this.$store.getters.currentUserIdentityContract.attributes.displayName
    },
    userName () {
      return this.$store.state.loggedIn.name
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
