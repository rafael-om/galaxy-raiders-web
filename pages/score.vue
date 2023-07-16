<template>
    <div id="body-score">
      <div id="table">
        <div id="title_table">
          <h1 id="h1-leaderboard"> Leaderboard</h1>
        </div>
        <div id="leaderboard">
          <table class="table">
            <thead>
              <tr class="table-row">
                <td class="table-cell">Pontuação</td>
                <td class="table-cell">Asteróides destruídos</td>
                <td class="table-cell">Data</td>
              </tr>
            </thead>
            <tbody>
              <tr class="table-row" v-for="item in leaderboard">
                <td class="table-cell">{{item.score}}</td> 
                <td class="table-cell">{{item.asteroidsDestroyed}}</td>
                <td class="table-cell">{{item.date}}</td>
              </tr>
            </tbody>
          </table>
        
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Score',
    data() {
    return { leaderboard: [] };},
    async created() {
      try {
        const response = await fetch('http://localhost:5000/v1/score');
        const data = await response.json();
        this.leaderboard = data;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  
  </script>
  
  <style>

  #body-score {
    height: 100vh;
    width: 100vw;
  
    background-color: #eee; 
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  #table {
    height: 40vh;
    width: 20vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4), -3px -3px 5px rgba(0, 0, 0, 0.4);
  }

  #title-table {
    height:30%;
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  
  #leaderboard {
    height: 70%;
    width: 100%;
    display:flex;
    position:relative;
    justify-content: center;
    align-items: center;
  }
  
  #title {
    width: 24vw;
  }
  
  #game_link {
    width: 24vw;
    font-size: 34px;
    color: white;
  }
  
  #h1-leaderboard {
    color: black;
    font-size: 38px;
    font-family: 'Arial';
    font-weight: bold;
    
  }
  
  .link_text {
    width: inherit;
    font-size: 24px;
    color: white;
  }

  .table {
    list-style-type: none;
    padding: 0;
  }

  .table-row {
    display: flex;
  }

  .table-cell {
    flex-basis: 33.33%;
    padding: 8px;
    border: 1px solid #ccc;
  }
  
  </style>
  