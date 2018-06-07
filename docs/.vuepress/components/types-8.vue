<template>
  <div>
    <div class="types-8">
      <p>“The only way to get rid of a temp­ta­tion is to yield to it.”</p>
      <p>“The only way to get rid of a temp­ta­tion is to yield to it.”</p>
    </div>
    <div class="types-8-1">
      <p>CSS</p>
      <p>
        <svg overflow="visible"
          width="2em"
          height="1.2em">
          <use xlink:href="#css" />
          <text id="css"
            y="1em">CSS</text>
        </svg>
      </p>
    </div>
    <div class="types-8-2">
      <a href="http://csssecrets.io">Glow</a>
    </div>
    <div class="types-8-3">
      CSS3d
    </div>
  </div>
</template>

<style lang="scss">
.types-8 {
  p {
    padding: 0.8em 1em;
    background: hsl(210, 13%, 60%);
    color: hsl(210, 13%, 30%);
    text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.8);
  }

  p + p {
    background: hsl(210, 13%, 30%);
    color: hsl(210, 13%, 60%);
    text-shadow: 0 -1px 1px black;
  }
}
.types-8-1 {
  background: rgb(228, 92, 92);
  padding: 30px;
  margin-bottom: 20px;
  p {
    margin: 0;
    color: white;
  }

  p:first-child {
    text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
  }

  p text {
    fill: currentColor;
  }
  p use {
    stroke: black;
    stroke-width: 6;
    stroke-linejoin: round;
  }
}
.types-8-2 {
  background: #333;
  padding: 20px;
  a {
    color: #ffc;
    text-decoration: none;
    transition: 1s;
  }

  a:hover {
    text-shadow: 0 0 0.1em, 0 0 0.3em;
  }
}

.types-8-3 {
  background: #58a;
  color: white;
  text-shadow: 0 1px hsl(0, 0%, 85%), 0 2px hsl(0, 0%, 80%),
    0 3px hsl(0, 0%, 75%), 0 4px hsl(0, 0%, 70%), 0 5px hsl(0, 0%, 65%),
    0 5px 10px black;
  font: bold 500%/1 Rockwell, serif;
  padding: 30px;
  margin-top: 20px;
}
</style>