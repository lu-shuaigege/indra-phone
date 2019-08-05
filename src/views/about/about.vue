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
      <p class="titlebg">PROFESIONAL TEAM</p>
      <p class="tiele">专业团队</p>
      <div class="majortop">
        <div class="majortop_left">
          <img class="leftpeople" src="../../assets/imgs/about/people4.png" alt />
          <div class="majortop_content_left">
            <p class="namep">
              <span class="name">周伟强</span>
              <span class="ying">Jeremiah Lee</span>
            </p>
            <p class="job">新联在线创始人、董事长</p>
            <div class="content">
              <p class="top_yin">“</p>
              <p
                class="word"
              >周伟强，新加坡籍华人。2009年毕业于新加坡南洋理工大学金融会计系，并取得学士学位。后回国于2010年参加广东省中小企业局与华南理工大学管理学院联合举办的担保行业总裁，自费EMBA研修全部展示完。</p>
              <p class="bottom_yin">”</p>
            </div>
          </div>
        </div>
        <div class="majortop_right">
          <img class="rightpeople" src="../../assets/imgs/about/people2.png" alt />
          <div class="majortop_content_right">
            <p class="namep">
              <span class="name">李国兴</span>
              <span class="ying">Jon Zhou</span>
            </p>
            <p class="job">新联在线创始人、国际区域董事长</p>
            <div class="content">
              <p class="top_yin">“</p>
              <p
                class="word"
              >李国兴，新加坡人，英国高等教育学院——赫瑞瓦特大学，获颁金融管理专业、地产与物理管理专业双学位。曾任职新加坡武装部队战备军官、跨国企业融资与上市顾问，2010年联通周伟强在新加坡创办全部展示完</p>
              <p class="bottom_yin">”</p>
            </div>
          </div>
        </div>
      </div>
      <div class="majorbottom">
        <div class="majorbottom_content">
          <div class="left">
            <p class="left_title">新联在线 — 国内</p>
            <div class="left_title_con">
              <div class="item item1">
                <div>
                  <p
                    class="img_p"
                  >李国兴，新加坡人，英国高等教育学院——赫瑞瓦特大学，获颁金融管理专业、地产与物理管理专业双学位。曾任职新加坡武装部队战备军官、跨国企业融资与上市顾问，2010年联通周伟强在新加坡创办全部展示完</p>
                </div>
                <p class="item_p1">
                  <span class="item_p_sp1">许士明</span>
                  <span class="item_p_sp2">Aivon Hui</span>
                </p>
                <p class="item_p2">
                  <span class="item_p_sp3">联合创始人、总经理</span>
                </p>
              </div>
              <div class="item item2">
                <div>
                  <p
                    class="img_p"
                  >李国兴，新加坡人，英国高等教育学院——赫瑞瓦特大学，获颁金融管理专业、地产与物理管理专业双学位。曾任职新加坡武装部队战备军官、跨国企业融资与上市顾问，2010年联通周伟强在新加坡创办全部展示完</p>
                </div>
                <p class="item_p">
                  <span class="item_p_sp1">江小东</span>
                  <span class="item_p_sp2">AJ Kong</span>
                </p>
                <p class="item_p2">
                  <span class="item_p_sp3">副总经理</span>
                </p>
              </div>
            </div>
          </div>
          <div class="right">
            <p class="left_title">新联在线 — 新加坡</p>
            <div class="left_title_con">
              <div class="item item3">
                <div>
                  <p
                    class="img_p"
                  >李国兴，新加坡人，英国高等教育学院——赫瑞瓦特大学，获颁金融管理专业、地产与物理管理专业双学位。曾任职新加坡武装部队战备军官、跨国企业融资与上市顾问，2010年联通周伟强在新加坡创办全部展示完</p>
                </div>
                <p class="item_p1">
                  <span class="item_p_sp1">Eddie Lee</span>
                  <!-- <span class="item_p_sp2">Aivon Hui</span> -->
                </p>
                <p class="item_p2">
                  <span class="item_p_sp3">Eddie Lee</span>
                </p>
              </div>
              <div class="item item4">
                <div>
                  <p
                    class="img_p"
                  >李国兴，新加坡人，英国高等教育学院——赫瑞瓦特大学，获颁金融管理专业、地产与物理管理专业双学位。曾任职新加坡武装部队战备军官、跨国企业融资与上市顾问，2010年联通周伟强在新加坡创办全部展示完</p>
                </div>
                <p class="item_p">
                  <span class="item_p_sp1">Eddie Lee</span>
                  <!-- <span class="item_p_sp2">AJ Kong</span> -->
                </p>
                <p class="item_p2">
                  <span class="item_p_sp3">Eddie Lee</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司发展 -->
    <div class="major">
      <p class="titlebg">THE DEVELOPMENT</p>
      <p class="tiele">公司发展</p>
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
export default {
  data() {
    return {
      imgs: "",
      bgimg: ""
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
    this.$router.afterEach((to, from, next) => {
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
}
.top {
  width: 100%;
  /* height: 700px; */
}
.top img {
  width: 100%;
  margin-bottom: 100px;
  /* max-height: 600px; */
}
.major {
  width: 100%;
  padding-top: 100px;
}
.titlebg {
  width: 360px;
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
.tiele {
  width: 98px;
  height: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #222222;
  margin: -12px auto 0 auto;
}
.majortop {
  width: 91.15vw;
  min-width: 1200px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
}
.majortop_left {
  width: 44.27vw;
  height: 418px;
  /* background-color: #f8f8f8; */
}
.leftpeople {
  float: left;
}
.majortop_content_left {
  width: 44.27vw;
  min-width: 590px;
  height: 350px;
  background-color: #f8f8f8;
  margin-top: 68px;
  padding-left: 14.53vw;
  padding-top: 1px;
  box-sizing: border-box;
}
.namep {
  margin-top: 32px;
}
.name {
  width: 73px;
  height: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #222222;
}
.ying {
  width: 62px;
  height: 12px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 12px;
  letter-spacing: 0px;
  color: #999999;
}
.job {
  /* width: 240px; */
  height: 17px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 17px;
  letter-spacing: 0px;
  color: #666666;
}
.content {
  width: 28.39vw;
  min-width: 4px;
  height: 184px;
  margin-top: 1.56vw;
}
.top_yin {
  height: 19px;
  font-family: Impact;
  font-size: 72px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 58px;
  letter-spacing: 0px;
  color: #c1c1c1;
}
.bottom_yin {
  width: 23px;
  height: 19px;
  font-family: Impact;
  font-size: 72px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 58px;
  letter-spacing: 0px;
  color: #c1c1c1;
  float: right;
  overflow: hidden;
}
.word {
  width: 23.59vw;
  min-width: 285px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #222222;
  margin: 20px auto;
}
.majortop_right {
  width: 44.27vw;
  min-width: 590px;
  height: 418px;
}
.rightpeople {
  float: right;
}
.majortop_content_right {
  width: 44.27vw;
  height: 350px;
  background-color: #f8f8f8;
  margin-top: 68px;
  padding-right: 14.53vw;
  padding-left: 31px;
  padding-top: 1px;
  box-sizing: border-box;
}
.majorbottom {
  width: 91.15vw;
  min-width: 1200px;
  height: 540px;
  background-color: #f8f8f8;
  margin: 0 auto;
  padding: 46px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.majorbottom_content {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 540px;
  height: 100%;
}
.left_title {
  width: 140px;
  height: 18px;
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #222222;
  margin-bottom: 30px;
}
.left_title_con {
  display: flex;
  justify-content: space-between;
}
.item {
  width: 250px;
  height: 397px;
}
.item1 div {
  width: 250px;
  height: 334px;
  background: url("../../assets/imgs/about/people3.jpg");
  margin-bottom: 21px;
}
.item2 div {
  width: 250px;
  height: 334px;
  background: url("../../assets/imgs/about/people1.jpg");
  margin-bottom: 21px;
}
.item div:hover .img_p {
  display: inline-block;
}
.img_p {
  display: none;
  width: 199px;
  height: 159px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #ffffff;
  padding: 86px 25px;
  background-color: #000000;
  opacity: 0.6;
}
.item_p_sp1 {
  width: 48px;
  height: 17px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 17px;
  letter-spacing: 0px;
  color: #222222;
}
.item_p_sp2 {
  width: 66px;
  height: 12px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 12px;
  letter-spacing: 0px;
  color: #999999;
}
.item_p_sp3 {
  width: 127px;
  height: 15px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 15px;
  letter-spacing: 0px;
  color: #666666;
}
.right {
  width: 540px;
  height: 100%;
}
.item3 div {
  width: 250px;
  height: 334px;
  background: url("../../assets/imgs/about/Eddie.jpg");
  margin-bottom: 21px;
}
.item4 div {
  width: 250px;
  height: 334px;
  background: url("../../assets/imgs/about/Poh.jpg");
  margin-bottom: 21px;
}
.bigimg {
  width: 91.15vw;
  min-width: 1200px;
  /* background: #f8f8f8; */
  margin: 50px auto;
}
.bigimg div {
  width: 1200px;
  margin: 0 auto;
}
.bigimg div img {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
}
</style>
