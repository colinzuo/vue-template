<template>
  <div class="hamburger-container" style="padding: 0 15px;" @click="toggleClick">
    <svg-icon
      :class-name="className"
      icon-class="hamburger"
    />
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      if (this.isActive) {
        return 'hamburger is-active';
      }

      return 'hamburger'
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
.hamburger-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.hamburger {
  display: inline-block;
  font-size: 40px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
