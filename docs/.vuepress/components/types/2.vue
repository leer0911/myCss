<template>
  <div class="types-2">
    <dl>
      <dt>Name:</dt>
      <dd>Lea Verou</dd>

      <dt>Email:</dt>
      <dd>lea@verou.me</dd>
      <dd>leaverou@mit.edu</dd>

      <dt>Location:</dt>
      <dd>Earth</dd>
    </dl>
  </div>
</template>

<style lang="scss">
.types-2 {
  dt,
  dd {
    display: inline;
    margin: 0;
  }

  dd {
    font-weight: 600;
  }

  dd + dt::before {
    content: '\A';
    white-space: pre;
  }

  dd + dd::before {
    content: ', ';
    font-weight: normal;
    margin-left: -0.25em;
  }
}
</style>