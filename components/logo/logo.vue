<template>
  <div :class="[extClass('logo')]">
    <div :class="[extClass('logo__box')]">
      <div :class="[extClass('logo__title')]">Logo</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {}
}
</script>

<style lang="scss" src="./_logo.scss" module />
