<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f4b8e7;
}

input {
  display: block;
  padding: 10px 15px 10px 15px;
  margin: auto;
  margin-bottom: 10px;
  width: 170px;
  border-radius: 30px;
  border: 0.1px solid grey;
}

::placeholder {
  font-size: 11px;
  font-family: "Avenir";
}

button {
  font-family: "Avenir";
  display: block;

  margin: auto;
  margin-bottom: 10px;
  padding: 12px 12px;
  width: 200px;

  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;

  color: #fff;
  border: 0 none;
  border-radius: 36px;

  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  justify-content: center;
  align-items: center;
  flex: 0 0 160px;
}

button {
  color: black;
  background: #fdf4b4;
}

#pink {
  background-color: #f4b8e7;
}

.container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 100px;
  margin-right: 100px;
  background-color: #f5f5f5;
  border-radius: 30px;
  padding: 50px;
}

.container-create {
  margin-left: 100px;
  margin-right: 100px;
  background-color: #f5f5f5;
  border-radius: 30px;
  padding: 50px;
}
article {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 50px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  padding: 30px;
  border-radius: 30px;
  background-color: white;
}
article img {
  max-height: 150px;
}
</style>
