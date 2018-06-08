<template>
  <div class="animation-1-1">
    <label>
      Your username:
      <input value="leaverou"></input>
      <span class="callout">
        Only letters, numbers, underscores (_) and hyphens (-) allowed!
      </span>
    </label>
  </div>
</template>

<style lang="scss">
.animation-1-1 {
  input:not(:focus) + .callout:not(:hover) {
    transform: scale(0);
    transition: 0.25s transform;
  }

  .callout {
    transition: 0.5s cubic-bezier(0.25, 0.1, 0.3, 1.5) transform;
    transform-origin: 1.4em -0.4em;
  }

  input {
    display: block;
    padding: 0 0.4em;
    font: inherit;
  }

  .callout {
    position: absolute;
    max-width: 14em;
    padding: 0.6em 0.8em;
    border-radius: 0.3em;
    margin: 0.3em 0 0 -0.2em;
    background: #fed;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0.05em 0.2em 0.6em rgba(0, 0, 0, 0.2);
    font-size: 75%;
  }

  .callout:before {
    content: '';
    position: absolute;
    top: -0.4em;
    left: 1em;
    padding: 0.35em;
    background: inherit;
    border: inherit;
    border-right: 0;
    border-bottom: 0;
    transform: rotate(45deg);
  }
}
</style>