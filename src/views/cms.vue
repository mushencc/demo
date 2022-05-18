<template>
    <div class="content">
        <div class="page">
            <div class="navigation">
        <Menu @on-select='selectMenu'>
           <MenuItem name="1">
                <Icon type="md-document" />
                领料单
            </MenuItem>
            <MenuItem name="2">
                <Icon type="md-chatbubbles" />
                施工单
            </MenuItem>
    </Menu>
    </div>
    <div class="router-map">
        <transition :name="transitionName">
          <router-view
            :class="[
              'router-style',
              $route.query.title == '首页' || $route.name == 'ProductionCharts'
                ? 'router-style-home'
                : 'router-style-page',
            ]"
          />
        </transition>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
         transitionName: "slide-left",
        }
    },
    watch: {
    $route(to, from) {
      const toIndex = to.meta.index;
      const fromIndex = from.meta.index;
      this.transitionName = toIndex < fromIndex ? "slide-right" : "slide-left";
    },
  },
  methods:{
      selectMenu(e){
          if(e==1){
              this.$router.push({path:'/cms/product'})
          }else if(e==2){
              this.$router.push({path:'/cms/working'})
          }
           
        }
  }
}
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
}
.page {
  display: flex;
  height: 100%;
  width: 100%;
//   padding-top: 80px;
  .navigation {
    width: 240px;
    height: 100%;
  }
  .router-map {
      overflow: hidden;
    width: calc(100% - 230px);
    height: 100%;
    padding: 10px 20px;
    background: #f0f1f4;
    .router-style {
      height: 100%;
      border-radius: 5px;
      background: #fff;
      position: relative;
    }
    .router-style-page {
      padding: 0 36px;
    }
    .router-style-home {
      padding: 0;
    }
  }
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>