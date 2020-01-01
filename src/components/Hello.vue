<template>
  <div class="hello">
   </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      defaultActive:true,
      isCollapse:false
    }
  },
  methods:{
    handleOpen(){
      console.log('=========11');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu-vertical-demo{
    width:200px;
    text-align: left;
    color:#fff;
  }
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
