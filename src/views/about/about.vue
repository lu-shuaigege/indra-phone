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
            <span class="name">韩 英</span>
            <span class="ying"></span>
          </p>
          <p class="job">董事长</p>
          <p class="word">韩英女士毕业于中国医科大学，长江EMBA，独自创立沈阳亿光年集团，旗下拥有房地产、广告传媒、小额贷款等业务，现任公司董事长。</p>
        </div>
      </div>
      <div class="majortop_right">
        <div class="majortop_content_right">
          <p class="namep namep_right">
            <span class="ying"></span>
            <span class="name namep_right_name">徐海鸥</span>
          </p>
          <p class="job right_job">首席营销官 CEO</p>
          <p
            class="word"
          >浙江大学工学硕士、复旦大学EMBA，PMP项目管理师。曾就职于微软、阿尔卡特及上海贝尔，在主板上市公司思美传媒股份有限公司期间，先后担任董事长助理、数字互动部总经理、思美影业视动力总经理职务。</p>
        </div>
        <img class="leftpeople" src="../../assets/imgs/about/people2.png" alt />
      </div>
      <div class="majorbottom">
        <div class="item" v-for="(item,index) in content" :key="index">
          <div class="four_img">
            <img class="yuan_four_img" :src="item.url" alt />
          </div>

          <div class="item_bottom">
            <p class="namep">
              <span class="name">{{item.name}}</span>
              <span class="ying">{{item.ying}}</span>
            </p>
            <p class="job">{{item.job}}</p>
            <p class="itemword">{{item.itemword}}</p>
            <p class="clickbig" @click="xiangtan(item.itemword)">查看更多</p>
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
    <div class="tanxiang" @click="over()">
      <img class="close" src="../../assets/imgs/about/close.png" alt />
      <p class="xiangp">{{xiang}}</p>
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
      xiang: "",
      content: [
        {
          url: require("../../assets/imgs/about/people3.jpg"),
          name: "傅雅萱",
          ying: "",
          job: "首席营销官 CMO",
          itemword:
            "资深媒体人April过去12年期间参与及见证国际时尚媒体的发展与转型，为ＥＬＬＥ创新业务模式，协助赫斯特中国在市场份额巨幅增长。从心出发，凭借英铎创智集团的支持，她坚守资深媒体人的信念＂优质內容创造影响力＂，整合资源以立体化结构帶动商机，有利品牌与媒体的永续发展。."
        },
        {
          url: require("../../assets/imgs/about/people1.jpg"),
          name: "令狐佳俊",
          ying: "",
          job: "商务总监",
          itemword:
            "超过10年的媒体经验，曾任职于Conde Nast CHINA康泰纳仕集团旗下顶尖杂志《VOGUE》, 和HEARST Media美国赫斯特集团旗下《ELLE》,专注于时装、腕表与珠宝、美容及生活方式、旅游等领域。拥有出色的整合营销管理经验和能力，结合平面、网络及市场推广活动，提供从编辑内容到市场活动的综合创意营销方案。."
        },
        {
          url: require("../../assets/imgs/about/Eddie.jpg"),
          name: "徐韬",
          ying: "",
          job: "资深策略总监",
          itemword:
            "超过16年的品牌营销推广工作经验，整合营销推广实战经验丰富。在社会化媒体营销&短视频营销方面有自己独到的见解。管理多个国际知名品牌的整合营销推广业务。."
        },
        {
          url: require("../../assets/imgs/about/Poh.jpg"),
          name: "付文豪",
          ying: "",
          job: "资深内容经理",
          itemword:
            "7年以上新媒体从业经验，擅长内容创作和社会热点的把握。拥有丰富的影视编导及拍摄经验。颠覆传统视频理念，战略性审视品牌传播曾参与制作电影《铜雀台》、动漫《RWBY》."
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
    xiangtan: function(x) {
      console.log(111111111111);
      this.xiang = x;
      $(".tanxiang").css("left", "0px");
    },
    over: function() {
      $(".tanxiang").css("left", "10rem");
    },
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
  /* height: 5.57rem; */
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
  font-weight: bold;
  font-stretch: normal;
  line-height: 0.36rem;
  letter-spacing: 0rem;
  color: #222222;
  margin-right: 0.11rem;
}
.namep_right {
  text-align: right;
}
.namep_right_name {
  margin-left: 0.11rem;
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
.right_job {
  text-align: right;
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
  /* height: 4.95rem; */
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
.four_img .yuan_four_img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}
.itemword {
  width: 3.37rem;
  height: 1.83rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.32rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.48rem;
  letter-spacing: 0rem;
  color: #666666;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
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
.clickbig {
  text-align: center;
  margin: 0.2rem auto;
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
.tanxiang {
  width: 10rem;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0px;
  left: 10rem;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 0px 2rem;
  box-sizing: border-box;
}
.xiangp {
  background: #ffffff;
  color: #000;
  font-size: 0.3rem;
  border-radius: 0.3rem;
  padding: 0.5rem 0.5rem;
  box-sizing: border-box;
  line-height: 0.87rem;
}
.close {
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>
