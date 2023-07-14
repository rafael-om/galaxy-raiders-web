<template>
  <div id="body">
    <div id="menu">
      <div id="title">
        <h1> Galaxy Raiders </h1>
      </div>
      <router-link to="/game" class="link_text">Iniciar Partida</router-link>
      <router-link to="/score" class="link_text">Placar</router-link>
      <button class="link_text" @click="fecharPagina">Sair</button>
    </div>
    <router-view></router-view>
    <!--<a href="/pages/game.vue" id="game_link">Iniciar Jogo</a>-->
  </div>
  <!--<div id="canvas">
    <div id="deep-space" />
    <div id="space-field">
      <SpaceObject id="spaceship" class="spaceship" :data="spaceField.ship" resolution="2" />

      <SpaceObject class="asteroid" :data="asteroid" resolution="2"
                  :key="asteroid.center"
                  v-for="asteroid in spaceField.asteroids" />

      <SpaceObject class="missile" :data="missile" resolution="2"
                  :key="missile.center"
                  v-for="missile in spaceField.missiles" />

      <SpaceObject class="explosion" :data="explosion" resolution="2"
                  :key="explosion.center"
                  v-for="explosion in spaceField.explosions" />
    </div>
  </div>-->
</template>

<script>
export default {
  name: 'Index',
  methods: {
    fecharPagina() {
      window.close(); // Fecha a página atual
    }
  }
}

</script>


<style>
#body {
  height: 100vh;
  width: 100vw;

  background-color: #eee; 
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  /*padding: 2rem;

  background-color: #36bbf5;
  overflow: hidden;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;*/
}

#menu {
  height: 45vh;
  width: 24vw;
  background-color: #3c8fb2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 40px 120px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4), -3px -3px 5px rgba(0, 0, 0, 0.4);

}

#title {
  width: 24vw;
}

#game_link {
  width: 24vw;
  font-size: 48px;
  color: white;
}

nav {
  background-color: #f0f0f0;
  padding: 10px;
}

nav router-link {
  margin-right: 10px;
}

h1 {
  color: black;
  font-size: 48px;
  font-family: 'Franklin Gothic Medium';
}

.link_text {
  width: inherit;
  font-size: 24px;
  color: white;
}

/* Estilos para o conteúdo 
router-view {
  padding: 20px;
  background-color: #f9f9f9;
}*/

</style>
