<template>
  <!-- 关于英铎 -->
  <div class="about">
    <!-- 上面背景图片 -->
    <!-- <Topbg></Topbg> -->
    <div class="top">
      <img :src="bgimg" alt />
    </div>
    <!-- 关于英铎简介 -->
    <Aboutindra></Aboutindra>
    <!-- 专业团队 -->
    <div class="major">
      <!-- 上面标题 -->
      <div class="four">
        <div class="title">
          <div class="redshu"></div>
          <div class="fourimg_title">专业团队</div>
          <div class="OURSERVICE">PROFESSIONAL TEAM</div>
        </div>
      </div>

      <div class="majortop_left">
        <img class="leftpeople" src="../../assets/imgs/about/people4.png" alt />
        <div class="majortop_content_left">
          <p class="namep">
            <span class="name">周伟强</span>
            <span class="ying">Jeremiah Lee</span>
          </p>
          <p class="job">新联在线创始人、董事长</p>
          <p
            class="word"
          >周伟强，新加坡籍华人。2009年毕业于新加坡南洋理工大学金融会计系，并取得学士学位。后回国于2010年参加广东省中小企业局与华南理工大学管理学院联合举办的担保行业总裁，自费EMBA研修全部展示完。</p>
        </div>
      </div>
      <div class="majortop_right">
        <div class="majortop_content_right">
          <p class="namep">
            <span class="name">李国兴</span>
            <span class="ying">Jon Zhou</span>
          </p>
          <p class="job">新联在线创始人、国际区域董事长</p>
          <p
            class="word"
          >李国兴，新加坡人，英国高等教育学院——赫瑞瓦特大学，获颁金融管理专业、地产与物理管理专业双学位。曾任职新加坡武装部队战备军官、跨国企业融资与上市顾问，2010年联通周伟强在新加坡创办全部展示完</p>
        </div>
        <img class="leftpeople" src="../../assets/imgs/about/people2.png" alt />
      </div>
      <div class="majorbottom">
        <div class="item" v-for="(item,index) in content" :key="index">
          <div class="four_img">
            <img :src="item.url" alt />
          </div>

          <div class="item_bottom">
            <p class="namep">
              <span class="name">{{item.name}}</span>
              <span class="ying">{{item.ying}}</span>
            </p>
            <p class="job">{{item.job}}</p>
            <p class="itemword">{{item.itemword}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司发展 -->
    <div class="major_bottom">
      <!-- 上面标题 -->
      <div class="four">
        <div class="title">
          <div class="redshu"></div>
          <div class="fourimg_title">公司发展</div>
          <div class="OURSERVICE">THE DEVELOPMENT</div>
        </div>
      </div>
      <div class="bigimg">
        <div>
          <img :src="imgs" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Aboutindra from "@/components/aboutindra/aboutindra.vue";
import Topbg from "@/components/topbg/topbg.vue";
import { request } from "http";
export default {
  data() {
    return {
      imgs: "",
      bgimg: "",
      content: [
        {
          url: require("../../assets/imgs/about/people.png"),
          name: "许士明",
          ying: "Jon Zhou",
          job: "联合创始人、总经理",
          itemword:
            "许士明，新加坡籍华人。2009年毕业于新加坡南洋理工大学金融会计系，并取得学士学位。最多5行."
        },
        {
          url: require("../../assets/imgs/about/people.png"),
          name: "许士明",
          ying: "Jon Zhou",
          job: "联合创始人、总经理",
          itemword:
            "许士明，新加坡籍华人。2009年毕业于新加坡南洋理工大学金融会计系，并取得学士学位。最多5行."
        },
        {
          url: require("../../assets/imgs/about/people.png"),
          name: "许士明",
          ying: "Jon Zhou",
          job: "联合创始人、总经理",
          itemword:
            "许士明，新加坡籍华人。2009年毕业于新加坡南洋理工大学金融会计系，并取得学士学位。最多5行."
        },
        {
          url: require("../../assets/imgs/about/people.png"),
          name: "许士明",
          ying: "Jon Zhou",
          job: "联合创始人、总经理",
          itemword:
            "许士明，新加坡籍华人。2009年毕业于新加坡南洋理工大学金融会计系，并取得学士学位。最多5行."
        }
      ]
    };
  },
  components: {
    Aboutindra,
    Topbg
  },

  created() {
    this.histories();
    this.about();
  },
  //让页面滚动到顶部
  mounted() {
    this.$router.afterEach((from, next) => {
      window.scrollTo(0, 0);
    });
    // this.upabout();
    window.addEventListener("scroll", this.upabout);
  },

  methods: {
    //axios请求
    histories: function() {
      this.$api.get(
        "histories",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.imgs = response.data.data.image;
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    //axios请求
    about: function() {
      //查询条件
      //   var param = {
      //     page: page,
      //     pageSize: pageSize
      //     //其它查询条件可在下面添加
      //   };
      this.$api.get(
        "banners/about-us",
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
    upabout: function() {
      // var four = document.getElementsByClassName("four")[0].offsetTop;
      // console.log(four);
      let istrue = true;
      let tabBar = document.getElementsByClassName("wordcontent")[0].offsetTop;
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      let h = document.documentElement.clientHeight;
      console.log(tabBar);
      console.log(t);
      console.log(h);
      let isshow = tabBar - t - h;
      console.log(isshow);
      if (isshow < -100 && istrue) {
        $(".wordcontent")
          .css("margin-top", "0")
          .css("opacity", "0.8");
        // alert("ok");
        istrue = false;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.upabout);
  }
};
</script>
<style scoped>
.about {
  width: 100%;
  background: #f8f8f8;
}
.top {
  width: 10rem;
  height: 100%;
  /* height: 4.55rem; */
}
.top img {
  width: 100%;
}
/* 每栏标题 */
.four {
  height: 1.21rem;
  display: flex;
  align-items: center;
}
.title {
  display: flex;
  align-items: flex-end;
  height: 0.4rem;
}
.redshu {
  width: 0.05rem;
  height: 0.4rem;
  background-color: #b81b22;
  border-radius: 0.03rem;
  margin-right: 0.13rem;
}
.OURSERVICE {
  height: 0.21rem;
  font-family: ArialMT;
  font-size: 0.27rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.21rem;
  letter-spacing: 0rem;
  color: #c1c1c1;
}
.fourimg_title {
  height: 0.39rem;
  font-family: PingFang-SC-Bold;
  font-size: 0.4rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.39rem;
  letter-spacing: 0rem;
  color: #222222;
  margin-right: 0.17rem;
}
/* 简介两个 */
.major {
  width: 10rem;
  height: 20.41rem;
  background-color: #ffffff;
  padding: 1px;
  padding: 0px 0.4rem;
  margin: 0.27rem auto;
  box-sizing: border-box;
}
.majortop_left {
  width: 9.2rem;
  height: 6rem;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.41rem auto;
  padding-top: 0.48rem;
  box-sizing: border-box;
}
.leftpeople {
  width: 2.89rem;
  height: 5.57rem;
  align-self: flex-end;
}
.majortop_content_left {
  width: 4.91rem;
  height: 4.95rem;
  margin-right: 0.51rem;
}
.name {
  height: 0.36rem;
  font-family: PingFang-SC-Bold;
  font-size: 0.37rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.36rem;
  letter-spacing: 0rem;
  color: #222222;
  margin-right: 0.11rem;
}
.ying {
  height: 0.23rem;
  font-family: PingFang-SC-Regular;
  font-size: 0.29rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.23rem;
  letter-spacing: 0rem;
  color: #999999;
}
.job {
  height: 0.31rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.32rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.31rem;
  letter-spacing: 0rem;
  color: #999999;
  margin: 0.21rem 0 0.4rem 0;
}
.word {
  width: 100%;
  height: 3.67rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.32rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.48rem;
  letter-spacing: 0rem;
  color: #666666;
  text-align: left;
}
.majortop_right {
  width: 9.2rem;
  height: 6rem;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rightpeople {
  float: right;
}
.majortop_content_right {
  width: 4.91rem;
  height: 4.95rem;
  margin-left: 0.51rem;
}
/* 简介四个 */
.majorbottom {
  width: 100%;
  height: 5.73rem;
  margin: 0.4rem auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  overflow: scroll;
}
.item {
  width: 4rem;
  height: 5.73rem;
  background-color: #f8f8f8;
  margin-right: 0.4rem;
  padding: 0.27rem;
  box-sizing: border-box;
  text-align: center;
}
.four_img {
  width: 1.33rem;
  height: 1.33rem;
  border-radius: 50%;
  margin: 0 auto 0.2rem auto;
}
.four_img img {
  width: 100%;
  height: 100%;
}
.itemword {
  width: 3.37rem;
  height: 2.23rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.32rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.48rem;
  letter-spacing: 0rem;
  color: #666666;
  text-align: left;
}
.major_bottom {
  width: 10rem;
  background-color: #ffffff;
  margin: 0.4rem auto;
  padding: 1px;
  padding: 0px 0.4rem;
  margin: 0.27rem auto;
  box-sizing: border-box;
}
.bigimg {
  width: 100%;
}
.bigimg div {
  width: 100%;
  margin: 0 auto;
}
.bigimg div img {
  width: 100%;
}
</style>
