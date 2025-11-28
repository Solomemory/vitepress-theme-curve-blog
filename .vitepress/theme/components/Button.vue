<template>
  <button class="pushable">
    <span class="shadow"></span>
    <span class="edge"></span>
    <span class="front"> {{ label }} <slot></slot></span>
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
/* From Uiverse.io by PriyanshuGupta28 */
.pushable {
  position: relative;
  background: transparent;
  padding: 0px;
  border: none;
  cursor: pointer;
  outline-offset: 4px;
  outline-color: deeppink;
  transition: filter 250ms;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: color-mix(in srgb, var(--main-color), black 30%);
  border-radius: 8px;
  filter: blur(2px);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.edge {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(
    to right,
    var(--main-color) 0%,
    color-mix(in srgb, var(--main-color), white 30%) 8%,
    color-mix(in srgb, var(--main-color), black 20%) 92%,
    var(--main-color) 100%
  );
}

.front {
  display: block;
  position: relative;
  border-radius: 8px;
  background: var(--main-color);
  padding: 12px 24px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1rem;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.pushable:hover {
  filter: brightness(110%);
}

.pushable:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.pushable:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.pushable:hover .shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.pushable:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.pushable:focus:not(:focus-visible) {
  outline: none;
}
</style>
