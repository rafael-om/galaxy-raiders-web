<template>
  <div id="body">
    <div id="menu">
      <div id="title">
        <h1> Galaxy Raiders </h1>
      </div>
      <div id="links">
        <router-link to="/game" class="link_text">Iniciar Partida</router-link>
        <router-link to="/score" class="link_text">Placar</router-link>
        <ExitButton class="btn"/>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    exitApplication() {
      // Perform actions to exit or close the application
      fetch('http://localhost:5000/exit');
      window.location.href = 'https://google.com';

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
}

#menu {
  height: 35vh;
  width: 20vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  border: 1px solid #000000;
  border-radius: 20px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4), -3px -3px 5px rgba(0, 0, 0, 0.4);

}

#title {
  height:35%;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
}

#links {
  height: 65%;
  width: 100%;
  display:flex;
  position:relative;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

h1 {
  color: black;
  font-size: 44px;
  font-family: 'Arial';
}

.link_text {
  width: auto;
  color: black;
  padding: 10px;
  text-align: center;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-style: none;
  text-decoration: none;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.link_text:hover {
  background-color: #45a049;
}

.link_text:active {
  background-color: #3e8e41;
}

.btn {
  margin-top:10px;
}


</style>
