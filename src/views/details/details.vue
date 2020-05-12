<template>
  <div class="details">
    <!-- 上面背景图片 -->
    <!-- <Topbg></Topbg> -->
    <div class="top">
      <img :src="bgimg" alt />
    </div>
    <div class="content">
      <div class="toptitle">
        <div class="top_left">
          <p class="title">{{title}}</p>
          <p class="text">发布时间：{{time}}</p>
        </div>
      </div>
      <div class="word" v-html="content"></div>
      <a :href="url" target="_blank">
        <div v-show="istrue" class="top_right">
          <img src="../../assets/imgs/details/videobtn.png" alt />
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      time: "",
      content: "",
      url: "",
      casesid: 0,
      istrue: false,
      description: "",
      bgimg: ""
    };
  },
  components: {},
  created() {
    //从sessionStorage把页面要用的参数取出来
    this.casesid = sessionStorage.getItem("casesid");
    this.cases();
    this.topbg();
  },
  updated() {
    // jquery方法修改
    // $(".content")
    //   .find("p")
    //   .css("font-size", "20px")
    //   .css("line-height", "35px")
    //   .css("color", "#000000");
    $(".word")
      .find("img")
      .css("width", "100%");
    // // refs
    // this.$refs.con.style.width = "1200px";
  },
  methods: {
    //axios请求
    cases: function() {
      this.$api.get(
        "cases/" + this.casesid,
        {
          // id: this.casesid
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            this.title = response.data.data.title;
            this.time = response.data.data.published_at;
            this.description = response.data.data.description;
            if (
              response.data.data.video != "" &&
              response.data.data.video != null
            ) {
              this.istrue = true;
            }
            this.url = response.data.data.video;
            this.content = response.data.data.content;
          } else {
          }
        }
      );
    },
    //axios请求
    topbg: function() {
      this.$api.get(
        "banners/cases",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            this.bgimg = response.data.data[0].image;
          } else {
          }
        }
      );
    }
  }
};
</script>

<style scoped>
.details {
  width: 100%;
}
.top {
  width: 10rem;
  height: 100%;
  /* height: 4.55rem; */
}
.top img {
  width: 100%;
}
.content {
  width: 10rem;
  padding: 1px;
  padding: 0px 0.4rem;
  margin: 0.27rem auto;
  box-sizing: border-box;
}
.toptitle {
  width: 100%；;
  height: 2.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}
.top_left {
  width: 100%;
}
.title {
  height: 0.45rem;
  font-family: PingFang-SC-Bold;
  font-size: 0.4rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.45rem;
  letter-spacing: 0rem;
  color: #222222;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.text {
  width: 3.51rem;
  height: 0.4rem;
  font-family: PingFang-SC-Regular;
  font-size: 0.32rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.4rem;
  letter-spacing: 0rem;
  color: #999999;
  overflow: hidden;
  margin: 0.2rem auto 0px auto;
}
.word {
  width: 100%;
  padding: 0.67rem 0px;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
}
.top_right {
  width: 2.13rem;
  height: 0.72rem;
  background-color: #b81b22;
  border-radius: 0.11rem;
  margin: 0.44rem auto 1rem auto;
}
.top_right img {
  width: 100%;
  height: 100%;
}
</style>
