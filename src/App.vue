<template>
  <nav>
    <router-link to="/control">control</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link to="/signin">regester</router-link> |
    <router-link to="/branch">branch</router-link> |
    <router-link to="/client">client</router-link> |
    <router-link to="/updateClient">updat client</router-link> |
    <router-link to="/addClient">add client</router-link> |
  </nav>

  <router-view />
</template>
<script>
export default {
  name: "App",
};
</script>
