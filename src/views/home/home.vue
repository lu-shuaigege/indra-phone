<template>
  <!-- 首页 -->
  <div class="home">
    <!-- 轮播图 -->
    <el-carousel class="banner animated 1 bounce delay-1s" arrow="never" height="53vw" width="100%">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.image" style="width:100%;height:100%" alt />
      </el-carousel-item>
    </el-carousel>
    <!-- 四图 -->
    <Fourimg></Fourimg>

    <!-- 简介 -->
    <Aboutindra class="about"></Aboutindra>
    <!-- 成功案例 -->
    <div class="case">
      <div class="casecontent">
        <div class="titlediv">
          <p class="titlebg">SUCCESSFUL CASES</p>
          <p class="title">成功案例</p>
        </div>

        <div class="imgcontent">
          <div
            class="imgitem"
            v-for="(caseitem,caseindex) in caseimg"
            :key="caseindex"
            @click="details(caseitem.id)"
          >
            <div class="img">
              <img :src="caseitem.cover_image" alt />
            </div>

            <p class="imgitemtitle">{{caseitem.title}}</p>
            <p class="text">{{caseitem.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 合作方 -->
    <Cooperation></Cooperation>
  </div>
</template>
<script>
import Fourimg from "@/components/fourimg/fourimg.vue";
import Aboutindra from "@/components/aboutindra/aboutindra.vue";
import Cooperation from "@/components/cooperation/cooperation.vue";
export default {
  data() {
    return {
      imgs: [],
      caseimg: []
    };
  },
  components: {
    Fourimg,
    Aboutindra,
    Cooperation
  },
  created() {
    this.banner();
    this.caseslist();
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
    window.addEventListener("scroll", this.about);
  },

  methods: {
    //axios请求轮播图
    banner: function() {
      //查询条件
      //   var param = {
      //     page: page,
      //     pageSize: pageSize
      //     //其它查询条件可在下面添加
      //   };
      this.$api.get(
        "banners/index",
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
    //axios请求首页案例
    caseslist: function() {
      this.$api.get(
        "cases-top?top=6",
        {
          // category: this.category,
          // page: this.page
          // pageSize: 12
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.caseimg = response.data.data;
            console.log(this.caseimg);
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    //点击案例跳转详情页
    details: function(id) {
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("casesid", id);
      //路由跳转携带参数
      this.$router.push({
        name: "details",
        params: {
          // business_id: this.id
        }
      });
    },
    about: function() {
      $(window).scroll(function() {
        //判断元素到达当前窗口的什么位置（简介）
        var isok = true;
        let wordcontent = document.getElementsByClassName("wordcontent")[0].offsetTop;
        let t = document.documentElement.scrollTop || document.body.scrollTop;
        let h = document.documentElement.clientHeight;
        let isshow = wordcontent - t - h;
        if (isshow < -100 && isok) {
          $(".wordcontent")
            .css("margin-top", "0")
            .css("opacity", "0.8");
          isok = false;
        }
        //判断元素到达当前窗口的什么位置（简介）
        let isup = true;
        let titlediv = document.getElementsByClassName("titlediv")[0].offsetTop;
        let istitledivshow = titlediv - t - h;
        if (istitledivshow < -100 && isup) {
          $(".titlediv")
            .css("margin-top", "0")
            .css("opacity", "1");
          isup = false;
        }
        //判断元素到达当前窗口的什么位置（四图）
        let isfour = true;
        let four = document.getElementsByClassName("four")[0].offsetTop;
        let fourimg = four - t - h;
        if (fourimg < -100 && isok) {
          $(".four")
            .css("margin-top", "0")
            .css("opacity", "1");
          isfour = false;
        }
        //判断元素到达当前窗口的什么位置（合作伙伴）
        let isand = true;
        let andtitle = document.getElementsByClassName("andtitle")[0].offsetTop;
        let and = andtitle - t - h;
        console.log(fourimg);
        if (and < -100 && isand) {
          $(".andtitle")
            .css("margin-top", "0")
            .css("opacity", "1");
          isand = false;
        }
      });
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.about);
  }
};
</script>
<style scoped>
.case {
  width: 100%;
  /* height: 1300px; */
  /* height: 69vw; */
  min-height: 960px;
  padding: 1px;
  box-sizing: border-box;
}
.banner {
  margin-bottom: 100px;
}

.casecontent {
  width: 100%;
  /* height: 1145px; */
  padding: 1px;
  box-sizing: border-box;
  margin: 100px auto 0 auto;
}
.titlediv {
  margin-top: 100px;
  opacity: 0;
  transition: margin 0.8s, opacity 1s;
}
.titlebg {
  width: 368px;
  height: 40px;
  font-family: Impact;
  font-size: 48px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 40px;
  letter-spacing: 0px;
  color: #b81b22;
  opacity: 0.2;
  margin: 0 auto;
}
.title {
  width: 96px;
  height: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #000000;
  margin: -12px auto 0 auto;
}
.imgcontent {
  width: 92vw;
  max-width: 1750px;
  min-width: 1200px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.imgitem {
  width: 29vw;
  min-width: 355px;
  height: 28vw;
  min-height: 345px;
  background-color: #ffffff;
  box-sizing: border-box;
  margin-bottom: 50px;
}
.imgitem:hover {
  box-shadow: 0vw 0vw 1vw 0vw rgba(51, 51, 51, 0.15);
  border-bottom: 2px solid #d8362b;
  background: #d8362b;
  /* animation-duration: 2s;
  animation-delay: 2s;
  animation-iteration-count: infinite; */
}
.imgitem:hover p {
  color: #ffffff;
}
.imgitem:hover .text {
  color: rgba(255, 255, 255, 0.7);
}
.imgitem:hover img {
  transition: all 0.5s;
  -webkit-transition: all 0.5s; /* Safari */
  cursor: pointer;
  transform: scale(1.1);
  -ms-transform: scale(1.1); /* IE 9 */
  -moz-transform: scale(1.1); /* Firefox */
  -webkit-transform: scale(1.1); /* Safari 和 Chrome */
  -o-transform: scale(1.1);
}
.img {
  width: 29vw;
  min-width: 355px;
  height: 22vw;
  min-height: 269px;
  overflow: hidden;
}
.img img {
  width: 100%;
  height: 100%;
}
.imgitem .imgitemtitle {
  width: 95%;
  height: 21px;
  font-family: MicrosoftYaHei;
  font-size: 1.2vw;
  font-weight: normal;
  font-stretch: normal;
  line-height: 21px;
  letter-spacing: 0px;
  color: #222222;
  margin: 1.2vw 0 0 1vw;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.imgitem .text {
  height: 15px;
  font-family: MicrosoftYaHei;
  font-size: 0.8vw;
  font-weight: normal;
  font-stretch: normal;
  line-height: 15px;
  letter-spacing: 0px;
  color: #999999;
  margin: 0.5vw 0 0 1vw;
}
</style>
