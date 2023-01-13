<template>
  <div
    v-bind="buttonAttributeList"
    :type="buttonType"
    class="btn"
    :class="classObject"
    v-on="$listeners"
  >
    <template v-if="beforeIconName">
      <BaseIcon
        :file="beforeIconName"
        :size="beforeIconSize"
        :color="beforeIconColor"
        :badge="beforeIconBadge"
        :badge-custom-class="beforeIconBadgeCustomClass"
        :svg-color-code="beforeIconColorCode"
      />
    </template>
    <span
      v-if="$slots.default && (beforeIconName || afterIconName)"
      :class="[textClass, customTextClass]"
    >
      <slot />
    </span>
    <template v-else-if="$slots.default">
      <slot />
    </template>
    <template v-if="afterIconName">
      <BaseIcon
        :file="afterIconName"
        :size="afterIconSize"
        :color="afterIconColor"
        :badge="afterIconBadge"
        :badge-custom-class="afterIconBadgeCustomClass"
        :svg-color-code="afterIconColorCode"
      />
    </template>
  </div>
</template>
<script>
export default {
  name: 'Button',
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: val => ['button', 'a', 'nuxt-link'].includes(val),
    },
    type: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: '',
      validator: val => ['', 'xs', 'sm', 'md', 'lg'].includes(val),
    },
    to: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
      validator: val => ['', 'btn-primary', 'btn-secondary', 'btn-gray', 'btn-dark', 'btn-success'].includes(val),
    },
    outline: {
      type: [Boolean, String],
      default: null,
    },
    block: {
      type: Boolean,
      default: false,
    },
    beforeIconName: {
      type: String,
      default: '',
    },
    beforeIconSize: {
      type: Number,
      default: null,
    },
    beforeIconColor: {
      type: String,
      default: '',
    },
    beforeIconColorCode: {
      type: String,
      default: '',
    },
    beforeIconBadge: {
      type: [String, Number],
      default: '',
    },
    beforeIconBadgeCustomClass: {
      type: [String, Array, Object],
      default: null,
    },
    afterIconName: {
      type: String,
      default: '',
    },
    afterIconSize: {
      type: Number,
      default: null,
    },
    afterIconColor: {
      type: String,
      default: '',
    },
    afterIconColorCode: {
      type: String,
      default: '',
    },
    afterIconBadge: {
      type: [String, Number],
      default: '',
    },
    afterIconBadgeCustomClass: {
      type: [String, Array, Object],
      default: null,
    },
    customClass: {
      type: [String, Array, Object],
      default: '',
    },
    customTextClass: {
      type: [String, Array, Object],
      default: '',
    },
  },
  computed: {
    classObject() {
      return Object.values({
        size: this.size ? (this.size === 'xs' && 'btn-xs') || (this.size === 'sm' && 'btn-sm') || (this.size === 'md' && 'btn-md') : null,
        color: this.color,
        block: this.block && 'w-full',
        customClass: this.customClass,
        outline: this.outline ? 'btn-outline' + (this.outline === true ? '' : ' ' + this.outline) : null,
      });
    },
    textClass() {
      return {
        'ml-4': this.$slots.default && this.beforeIconName && (this.size === null || this.size === '' || this.size === 'md'),
        'ml-2.5': this.$slots.default && this.beforeIconName && (this.size === 'sm' || this.size === 'xs'),
        'mr-4': this.$slots.default && this.afterIconName && (this.size === null || this.size === '' || this.size === 'md'),
        'mr-2.5': this.$slots.default && this.afterIconName && (this.size === 'sm' || this.size === 'xs'),
      };
    },
    buttonType() {
      return this.tag === 'button' ? this.type : null;
    },
    buttonAttributeList() {
      return {
        ...(this.tag === 'a' && { href: this.getUrl(this.to) }),
        ...(this.tag === 'nuxt-link' && { to: this.getUrl(this.to) }),
      };
    },
  },
  methods: {
    getUrl(url) {
      return url && url.charAt(0) === '/' ? url : '/' + (url || '');
    },
  },
};
</script>
