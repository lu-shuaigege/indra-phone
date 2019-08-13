<template>
  <!-- 导航 -->
  <div class="nav">
    <div class="navcontent">
      <div class="navimg_left">
        <router-link to="/home"><img src="../../assets/imgs/home/navlogo.png" alt /></router-link>
      </div>
      <div class="navimg_right">
        <img
          src="../../assets/imgs/home/index-menu.jpg"
          alt
          v-show="istrue==0"
          @click="close(1)"
          class="img1"
        />
        <img
          src="../../assets/imgs/home/close.png"
          alt
          v-show="istrue==1"
          @click="closeup(0)"
          class="img2"
        />
      </div>
    </div>
    <div class="navlist" v-show="istrue==1">
      <div class="list">
        <router-link to="/home">
          <div class="item" @click="closeup(0)">首页</div>
        </router-link>
        <router-link to="/about">
          <div class="item" @click="closeup(0)">关于英铎</div>
        </router-link>
        <div class="item items">
          <div class="yeitem">
            <router-link to="/business">
              <div class="ye" @click="closeup(0)">业务介绍</div>
            </router-link>
            <img
              src="../../assets/imgs/home/down.png"
              class="topimg"
              v-show="isshow==0"
              @click="list(1)"
              alt
            />
            <img
              src="../../assets/imgs/home/topimg.png"
              class="topimg"
              v-show="isshow==1"
              @click="list(0)"
              alt
            />
          </div>
          <div class="yelist" v-show="isshow==1">
            <div class="itemlist" @click="closeup(0,1)">
              <span class="reddian"></span>
              <p class="listcontent">影视节目投资</p>
            </div>
            <div class="itemlist" @click="closeup(0,2)">
              <span class="reddian"></span>
              <p class="listcontent">短视频内容营销</p>
            </div>
            <div class="itemlist" @click="closeup(0,3)">
              <span class="reddian"></span>
              <p class="listcontent">华为移动媒体投放</p>
            </div>
            <div class="itemlist" @click="closeup(0,4)">
              <span class="reddian"></span>
              <p class="listcontent">交通出行媒体</p>
            </div>
          </div>
        </div>
        <router-link to="/success">
          <div class="item" @click="closeup(0)">成功案例</div>
        </router-link>
        <router-link to="/contactus">
          <div class="item" @click="closeup(0)">联系我们</div>
        </router-link>
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
      istrue: 0,
      isshow: 0
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
    // 导航显示不显示
    close: function(x) {
      this.istrue = x;

      $("#app")
        .css("height", "17.7rem")
        .css("overflow", "hidden");
    },
    closeup: function(x, y) {
      this.istrue = x;
      this.isshow = x;
      $("#app").css("height", "");
      this.xiang(y);
    },
    // 列表下拉列表显示不显示
    list: function(y) {
      this.isshow = y;
    },
    xiang(row) {
      // 阻止浏览器的冒泡
      // window.event ? (window.event.cancelBubble = true) : e.stopPropagation();、
      console.log(1111111111111111111111);
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
  margin: 0px auto;
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
.navimg_right .img1 {
  width: 0.48rem;
  height: 0.33rem;
}
.navimg_right .img2 {
  width: 0.45rem;
  height: 0.45rem;
}
.navlist {
  width: 10rem;
  height: 16.4rem;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0rem 0.03rem 0.03rem 0rem rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 99;
}
.list {
  width: 10rem;
  padding: 0px 0.4rem;
  box-sizing: border-box;
  background: #f8f8f8;
}
.item {
  /* height: 1.33rem; */
  font-family: PingFang-SC-Medium;
  font-size: 0.37rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.33rem;
  letter-spacing: 0rem;
  color: #222222;
  border-bottom: 1px solid #ebeef5;
}
.yeitem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.33rem;
}
.ye {
  width: 1.55rem;
  height: 0.35rem;
  line-height: 0.35rem;
}
.topimg {
  width: 0.45rem;
  height: 0.25rem;
}
.yelist {
  padding-left: 0.37rem;
  margin-bottom: 0.51rem;
}
.items {
  width: 100%;
  /* height: 1.33rem; */
}
.itemlist {
  height: 0.82rem;
  width: 100%;
  display: flex;
  align-items: center;
}
.reddian {
  display: inline-block;
  width: 0.19rem;
  height: 0.19rem;
  background-color: #b81b22;
  border-radius: 0.05rem;
  margin-right: 0.2rem;
}
.listcontent {
  height: 0.33rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.35rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.33rem;
  letter-spacing: 0rem;
  color: #222222;
}
</style>
