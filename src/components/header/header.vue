<template>
  <!-- 导航 -->
  <div class="nav">
    <div class="navcontent">
      <div class="navimg_left">
        <img src="../../assets/imgs/home/navlogo.png" alt />
      </div>
      <div class="navimg_right">
        <img src="../../assets/imgs/home/index-menu.jpg" alt v-show="istrue==0" @click="close(1)" />
        <img src="../../assets/imgs/home/close.png" alt v-show="istrue==1" @click="close(0)" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //定义一下鼠标事件，否则会出现鼠标事件没有在原型链上定义的问题
      mouseover: "",
      mouseout: "",
      business_id: 0,
      business_list: [],
      active: 0,
      istrue: 0
    };
  },
  created() {
    this.toplist();
    if (sessionStorage.getItem("titleactive") == null) {
      this.active = 0;
    } else {
      this.active = sessionStorage.getItem("titleactive");
    }
  },
  watch: {},
  methods: {
    close: function(x) {
      this.istrue = x;
    },
    xiang(row) {
      // 阻止浏览器的冒泡
      // window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      // this.stopBubble();
      this.stopDefault();
      this.business_id = row;
      this.$store.commit("item_id", this.business_id);
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("business_id", this.business_id);
      //路由跳转携带参数
      this.$router.push({
        name: "investment",
        params: {
          business_id: this.id
        }
      });
    },
    //axios请求
    toplist: function() {
      this.$api.get(
        "businesses",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.business_list = response.data.data;
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    }
  }
};
</script>
<style  scoped>
.nav {
  width: 10rem;
  height: 1.33rem;
  background-color: #ffffff;
  box-shadow: inset 0rem -0.01rem 0rem 0rem rgba(0, 0, 0, 0.1);
}
.navcontent {
  width: 9.2rem;
  height: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navimg_left {
  width: 2.67rem;
  height: 0.53rem;
}
.navimg_left img {
  width: 100%;
  height: 100%;
}
.navimg_right {
  width: 0.48rem;
  height: 0.33rem;
}
.navimg_right img {
  width: 100%;
  height: 100%;
}
</style>
