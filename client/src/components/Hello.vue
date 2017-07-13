<template>
  <div class="hello">
    <div class="ui text container" style="padding-top: 40px;">
        <div class="ui piled inverted segment">
          <div class="ui form">
            <h4 class="header">Pengingat Hal Penting</h4>
            <label>Nama Task</label>
            <input type="text" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
