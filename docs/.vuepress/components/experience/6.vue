<template>
  <div class="experience-6">
    <!-- Geeky cat names! -->
    <ul>
      <li>Ada Catlace</li>
      <li>Alan Purring</li>
      <li>Schrödingcat</li>
      <li>Tim Purrners-Lee</li>
      <li>Webkitty</li>
      <li>Json</li>
      <li>Void</li>
      <li>Neko</li>
      <li>NaN</li>
      <li>Cat5</li>
      <li>Vector</li>
    </ul>
  </div>
</template>

<style lang="scss">
.experience-6 {
  /**
 * Scrolling hints
 */

  ul {
    display: inline-block;
    overflow: auto;
    width: 7.2em;
    height: 7em;
    border: 1px solid silver;
    padding: 0.3em 0.5em;
    list-style: none;
    margin-top: 2em;
    font: 100 200%/1.6 'Frutiger LT Std', sans-serif;
    background: linear-gradient(white 15px, hsla(0, 0%, 100%, 0)) 0 0 / 100%
        50px,
      radial-gradient(at top, rgba(0, 0, 0, 0.2), transparent 70%) 0 0 / 100%
        15px,
      linear-gradient(to top, white 15px, hsla(0, 0%, 100%, 0)) bottom / 100%
        50px,
      radial-gradient(at bottom, rgba(0, 0, 0, 0.2), transparent 70%) bottom /
        100% 15px;
    background-repeat: no-repeat;
    background-attachment: local, scroll, local, scroll;
    margin-top: 30px;
  }
}
</style>