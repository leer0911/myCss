<template>
  <div class="types-3">
    <pre><code>while (true) {
	var d = new Date();
	if (d.getDate()==1 &amp;&amp;
	    d.getMonth()==3) {
		alert("TROLOLOL");
	}
}</code></pre>
  </div>
</template>

<style lang="scss">
.types-3 {
  pre {
    padding: 0.5em;
    line-height: 1.5;
    background: hsl(20, 50%, 95%);
    background-image: linear-gradient(rgba(120, 0, 0, 0.1) 50%, transparent 0);
    background-size: auto 3em;
    background-origin: content-box;
    font-family: Consolas, Monaco, monospace;
  }

  code {
    color: #333 !important;
    font: inherit;
  }
}
</style>