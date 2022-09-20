<template>
  <div class="header">
  <nav>
    <router-link to="/" class="b">Back</router-link>
    <router-link to="/ListOne">First <br> list</router-link>
    <router-link to="/ListTwo">Second <br> list</router-link>
  </nav>
  </div>
  <router-view/>
</template>
