<script>
export default {
  name: 'app',
  methods: {
    handleOpen () {
      console.log('====')
    }
  }
}

</script>

<template>
  <div id="app">
    <el-container>
    <el-header>
      <div class="title">区块链应税协查系统</div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="$route.path"
         :router="true"
         class="el-menu-vertical-demo"
         @open="handleOpen"
         :collapse="isCollapse"
                 :unique-opened="true"
        >
          <template v-for="route in $router.options.routes"
            v-if="$router.options.routes.length"
          >
            <el-menu-item
              :key="route.path + '/' + route.path"
              :index="route.path"
              >
              <i :class="'el-icon-'+(route.icon || 'menu')"></i>
              <span slot="title">{{ route.name }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main id="main">
        <router-view
          keep-alive
          transition="fade"
          transition-mode='out-in'></router-view>
      </el-main>
    </el-container>
  </el-container>
  <!--路由管道标签，任何符合某一路由(route)信息的组件都会在这个标签内展示出来 -->
  </div>
</template>
<!-- css格式 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;
  height: 100%;
}
body, html {
  margin: 0;
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header, .el-footer {
    background-color: rgb(0,159,250);
    color: #fff;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #f6f6f6;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-menu-item{text-align: left;}
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .title{text-align:left;}
</style>
