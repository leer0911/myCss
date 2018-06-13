<template>
  <div class="layout-1">
    <p>Let’s assume we have some text here. Bacon ipsum dolor sit amet turkey veniam shankle, culpa short ribs kevin t-bone occaecat.</p>
    <figure>
      <img src="http://csssecrets.io/images/adamcatlace.jpg" />
      <figcaption>
        The great Sir Adam Catlace was named after Countess Ada Lovelace, the first programmer ever.
      </figcaption>
    </figure>
    <p>We also have some more text here. Et laborum venison nostrud, ut veniam sint kielbasa ullamco pancetta.</p>
  </div>
</template>

<style lang="scss">
.layout-1 {
  /**
 * Intrinsic sizing
 */

  figure {
    max-width: 300px;
    max-width: min-content;
    margin: auto;
  }

  figure > img {
    max-width: inherit !important;
  }

  /* Basic styling */

  figure {
    padding: 10px;
    border: 1px solid silver;
  }
}
</style>