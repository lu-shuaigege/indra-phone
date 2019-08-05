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
    <!-- <Fourimg></Fourimg> -->
    <!-- 合作方 -->
    <!-- <Cooperation></Cooperation> -->
  </div>
</template>
<script>

export default {
  data() {
    return {
      imgs: [],
      caseimg: []
    };
  },
  components: {
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
        let wordcontent = document.getElementsByClassName("wordcontent")[0]
          .offsetTop;
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
</style>
