<template>
  <div class="effects-wrap4">
    <main>
      <blockquote>“The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”</em>
        <footer>—
          <cite>Oscar Wilde, The Picture of Dorian Gray</cite>
        </footer>
      </blockquote>
    </main>
  </div>
</template>

<style lang="scss">
.effects-wrap4 {
  background: url('http://csssecrets.io/images/tiger.jpg');
  padding: 50px;
  main {
    color: #fff;
    position: relative;
    margin: 0 auto;
    padding: 1em;
    max-width: 23em;
    background: hsla(0, 0%, 100%, 0.25) border-box;
    overflow: hidden;
    border-radius: 0.3em;
    box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.3) inset,
      0 0.5em 1em rgba(0, 0, 0, 0.6);
    text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.3);
  }

  main::before {
    background: url('http://csssecrets.io/images/tiger.jpg');
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -30px;
    z-index: -1;
    -webkit-filter: blur(20px);
    filter: blur(20px);
  }

  blockquote {
    font-style: italic;
    color: #fff;
    border-left: none;
  }
  blockquote cite {
    font-style: normal;
  }
}
</style>