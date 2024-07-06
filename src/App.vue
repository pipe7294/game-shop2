<template>
  <h1>Tienda 32 bits</h1>
  <h3>Lista de Juegos</h3>
  <table border="1px">
    <thead>
      <th>Codigo</th>
      <th>Nombre</th>
      <th>Stock</th>
      <th>Precio</th>
      <th>Acciones</th>
    </thead>
    <tbody>
      <tr v-for="(juego, i) in juegos" :key="i">
        <td>{{ juego.codigo }}</td>
        <td>{{ juego.nombre }}</td>
        <td>{{ juego.stock }}</td>
        <td>${{ Number(juego.precio).toLocaleString() }}</td>
        <td>
          <button @click="incrementar(i)">+</button>
          <button @click="decrementar(i)">-</button>
        </td>
      </tr>
    </tbody>

  </table>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import { mapState, mapActions } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapState(["juegos"])
  },
  methods: {
    ...mapActions(["incrementar", "decrementar"])    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
