<template>
    <button  class="styled-button" @click="handleExit">Sair</button>
</template>
  
  <script>
  export default {
    methods: {
      handleExit() {
        fetch('http://localhost:5000/exit');
        window.location.href = 'https://google.com';
        this.$emit('exit');
      }
    }
  };
  </script>
<style>

.styled-button {
  /* Button styles */
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1000;
}

.styled-button:hover {
  /* Button hover styles */
  background-color: #45a049;
}

.styled-button:active {
  /* Button active styles */
  background-color: #3e8e41;
}
  </style>