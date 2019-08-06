<template>
  <div class="aboutindra">
    <div class="four">
      <div class="title">
        <div class="redshu"></div>
        <div class="fourimg_title">关于英铎创智</div>
        <div class="OURSERVICE">ABOUT INDRA</div>
      </div>
    </div>
    <div class="img">
      <img src="../../assets/imgs/home/indrabg.jpg" alt />
    </div>
    <div class="wordcontent">
      <div class="content">
        <p class="content_title">英铎创智集团</p>
        <p>英铎创智集团扎根中国20年</p>
        <p>从东北地区最具影响力的传媒公司——新辽广传媒起步</p>
        <p>快速成长为以北京、上海为市场运营中心</p>
        <p>布局全国的综合性传媒机构</p>
        <br />
        <p>运用实销营销传播策略</p>
        <p>以国际化的标准与本土化的服务相结合</p>
        <p>为广告客户提供优质全面的一站式营销及传播解决方案</p>
        <p>英铎创智传媒同时也是各家全球领先的4A战略合作伙伴</p>
        <br />
        <p>战略级合作伙伴：</p>
        <p class="contentword">博睿传播、群邑集团</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    about: function() {
      // var four = document.getElementsByClassName("four")[0].offsetTop;
      // console.log(four);
      var isok = true;
      $(window).scroll(function() {
        let about =
          document.getElementsByClassName("wordcontent")[0].offsetTop -
          document.body.scrollTop -
          document.documentElement.clientHeight;
        // $(".wordcontent").offset().top -
        //   $(window).scrollTop() -
        //   $(window).height();
        console.log(about);
        if (about < -100 && isok) {
          $(".wordcontent")
            .css("margin-top", "0")
            .css("opacity", "0.8");
          // alert("ok");
          isok = false;
          return;
        }
      });
    }
  }
};
</script>
<style scoped>
.aboutindra {
  width: 10rem;
  height: 13.57rem;
  background-color: #ffffff;
  padding: 1px;
  padding: 0px 0.4rem;
  margin: 0.27rem auto;
  box-sizing: border-box;
}
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
.img {
  width: 100%;
  height: 4.8rem;
}
.img img {
  width: 100%;
  height: 100%;
}

.wordcontent {
  width: 8.37rem;
  height: 6.49rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.33rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0rem;
  line-height: 0.5rem;
  color: #666666;
  text-align: center;
  margin: 0.4rem auto;
}
.content_title {
  font-weight: normal;
  font-stretch: normal;
  line-height: 1rem;
  letter-spacing: 0rem;
  color: #222222;
}
</style>
