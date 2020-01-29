<template>
  <div :class="[extClass('container2')]">
    <h1 :class="[extClass('title')]">
      BaseExample
    </h1>
    <Logo />
    <div :class="[extClass('box')]">
      <div :class="[extClass('box__logo')]">
        <img
          :class="[extClass('box__logo-img')]"
          src="~assets/img/logo.svg"
          alt="ChitChat Logo"
        />
      </div>
      <div :class="[extClass('box__main')]">
        <h4 :class="[extClass('box__main-title')]">ChitChat</h4>
        <p :class="[extClass('box__main-note')]">
          You have a new message!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/logo/logo'

export default {
  components: {
    Logo
  }
}
</script>
<style lang="scss" src="./_index.scss" module />
