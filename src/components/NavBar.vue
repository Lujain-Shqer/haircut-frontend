<template>
  <nav class="row NavBar">
    <div class="icons col">
      <fa icon="message" />
      <fa icon="bell" />
      <fa icon="earth" />
    </div>
    <div class="brand col">
      <span>صالون ذقن &amp; شعر</span>
      <fa icon="cut" class="cut" />
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.row {
  margin: 0;
}
nav {
  background-color: #f9f9f9;
  padding: 2vh 10vh;
  border-bottom: 1px solid #ccc;
}
nav .brand {
  text-align: center;
  font-weight: 400;
}
nav svg {
  color: #c0bebe;
  padding-right: 4vh;
}
nav span {
  font-weight: 500;
  padding: 1vh;
}
nav span:first-child {
  border-right: 2px solid #000;
}
nav .cut {
  color: #000;
  padding-left: 2vh;
}
</style>
