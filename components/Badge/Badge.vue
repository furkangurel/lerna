<template>
  <span
    class="badge"
    :data-notification="notification"
    :class="classObject"
  >
    <slot />
    <template v-if="badge">
      {{ badge }}dddd
    </template>
  </span>
</template>
<script>
export default {
  name: 'Badge',
  props: {
    badge: {
      type: [String, Number],
      default: null,
    },
    color: {
      type: String,
      default: 'bg-pink-500',
    },
    notification: {
      type: String,
      default: null,
      validator: val => ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'].includes(val),
    },
    customClass: {
      type: [String, Array, Object],
      default: null,
    },
  },
  computed: {
    classObject() {
      return Object.values({
        color: this.color,
        customClass: this.customClass,
      });
    },
  },
};
</script>
