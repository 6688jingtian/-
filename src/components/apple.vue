<template>
	<div>
		<h2>我是苹果</h2>
		<child></child>
        <router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'apple',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
