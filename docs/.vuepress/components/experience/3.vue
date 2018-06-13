<template>
  <div class="experience-3">
    <input type="checkbox"
      id="awesome"
      autofocus />
    <label for="awesome">Awesome!</label>
    <br />
    <input type="checkbox"
      id="awesome2"
      checked />
    <label for="awesome2">Awesome!</label>
    <br />
    <input type="checkbox"
      id="awesome3"
      disabled />
    <label for="awesome3">Awesome!</label>
    <br />
    <input type="checkbox"
      id="awesome4"
      checked
      disabled />
    <label for="awesome4">Awesome!</label>
  </div>
</template>

<style lang="scss">
.experience-3 {
  input[type='checkbox'] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  input[type='checkbox'] + label::before {
    content: '\a0';
    display: inline-block;
    vertical-align: 0.2em;
    width: 0.8em;
    height: 0.8em;
    margin-right: 0.2em;
    border-radius: 0.2em;
    background: silver;
    text-indent: 0.15em;
    line-height: 0.65;
  }

  input[type='checkbox']:checked + label::before {
    content: '\2713';
    background: yellowgreen;
  }

  input[type='checkbox']:focus + label::before {
    box-shadow: 0 0 0.1em 0.1em #58a;
  }

  input[type='checkbox']:disabled + label::before {
    background: gray;
    box-shadow: none;
    color: #555;
    cursor: not-allowed;
  }
}
</style>