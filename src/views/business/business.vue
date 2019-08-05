<template>
  <!-- 首页 -->
  <div class="business">
    <!-- 上面背景图片 -->
    <!-- <Topbg></Topbg> -->
    <div class="top">
      <img :src="bgimg" alt />
    </div>
    <!-- 四图 -->
    <Fourimg class="fourimg"></Fourimg>
    <!-- 我们的业务 -->
    <div class="content">
      <p class="titlebg">OUR SERVICE</p>
      <p class="title">我们的业务</p>
      <div class="img1">
        <img src="../../assets/imgs/business/business1.jpg" alt />
      </div>
      <div class="img2">
        <div class="img2_top">
          <img src="../../assets/imgs/business/business2.jpg" alt />
        </div>
        <div class="img2_bottom">
          <img src="../../assets/imgs/business/business3.jpg" alt />
        </div>
      </div>
    </div>
    <!-- 合作方 -->
    <Cooperation></Cooperation>
  </div>
</template>
<script>
import Topbg from "@/components/topbg/topbg.vue";
import Fourimg from "@/components/fourimg/fourimg.vue";
import Cooperation from "@/components/cooperation/cooperation.vue";
export default {
  data() {
    return { bgimg: "" };
  },
  components: {
    Fourimg,
    Topbg,
    Cooperation
  },
  created() {
    this.businesses();
    this.topbg();
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
    //在dom挂载的时候注册scroll事件
    window.addEventListener("scroll", this.four);
  },

  methods: {
    //axios请求
    businesses: function() {
      //查询条件
      //   var param = {
      //     page: page,
      //     pageSize: pageSize
      //     //其它查询条件可在下面添加
      //   };
      this.$api.get(
        "businesses",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.imgs = response.data.data;
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    //axios请求
    topbg: function() {
      //查询条件
      //   var param = {
      //     page: page,
      //     pageSize: pageSize
      //     //其它查询条件可在下面添加
      //   };
      this.$api.get(
        "banners/businesses",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.bgimg = response.data.data[0].image;
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    four: function() {
      //判断元素到达当前窗口的什么位置（四图）
      let isfour = true;
      let tabBar = document.getElementsByClassName("four")[0].offsetTop;
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      let h = document.documentElement.clientHeight;
      console.log(tabBar);
      console.log(t);
      console.log(h);
      let isshow = tabBar - t - h;
      console.log(isshow);
      if (isshow < -100 && isfour) {
        $(".four")
          .css("margin-top", "0")
          .css("opacity", "1");
        // alert("ok");
        isfour = false;
      }
      var isup = true;
      let andtitle = document.getElementsByClassName("andtitle")[0].offsetTop;
      console.log(tabBar);
      console.log(t);
      console.log(h);
      let isandlistshow = andtitle - t - h;
      console.log(isandlistshow);
      if (isandlistshow < -100 && isup) {
        $(".andtitle")
          .css("margin-top", "0")
          .css("opacity", "1");
        // alert("ok");
        isup = false;
      }
    }
  },
  //页面销毁前注销scroll事件
  beforeDestroy() {
    window.removeEventListener("scroll", this.four);
  }
};
</script>
<style scoped>
.business {
  width: 100%；;
}
.top {
  width: 100%;
  /* height: 700px; */
  margin-bottom: 100px;
}
.top img {
  width: 100%;
  /* height: 100%; */
  max-height: 600px;
}
.fourimg {
  height: 100%;
}
.content {
  width: 100%;
  padding: 1px;
  box-sizing: border-box;
}
.titlebg {
  width: 243px;
  height: 40px;
  font-family: Impact;
  font-size: 48px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 40px;
  letter-spacing: 0px;
  color: #b81b22;
  opacity: 0.2;
  margin: 80px auto 0 auto;
}
.title {
  width: 120px;
  height: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #000000;
  margin: -12px auto 50px auto;
}
.img1 {
  width: 91.15vw;
  min-width: 1200px;
  margin: 0 auto;
}
.img1 img {
  width: 100%;
  height: 100%;
}
.img2 {
  width: 100%;
}
.img2_top {
  width: 91.15vw;
  min-width: 1200px;
  text-align: center;
  background-color: #f8f8f8;
  margin: 24px auto;
}
.img2_top img {
  width: 1175px;
}
.img2_bottom {
  width: 91.15vw;
  min-width: 1200px;
  text-align: center;
  background-color: #f8f8f8;
  margin: 24px auto;
}
.img2_bottom img {
  width: 1200px;
  height: 390px;
}
</style>
