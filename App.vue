<template>
  <div class="header" v-if="!show">
    <button @click="$router.push('/')" v-on:click="show = !show">Назад</button>
  </div>
  <div class="header" v-if="show">
    <button @click="$router.push('/ListOne')" v-on:click="show = !show">Лист 1</button>
    <button @click="$router.push('/ListTwo')" v-on:click="show = !show">Лист 2</button>
  </div>
  <router-view/>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    }
  }
</script>