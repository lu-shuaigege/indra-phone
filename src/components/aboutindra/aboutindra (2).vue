<template>
  <div class="aboutindra">
    <div class="word">
      <div class="wordcontent">
        <p class="titlebg">ABOUT INDRA</p>
        <p class="title">关于英铎创智</p>
        <div class="content">
          <h4>英铎创智集团</h4>
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
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    // this.about();
  },
  mounted() {
    // this.about();
  },
  methods: {
    about: function() {
      // var four = document.getElementsByClassName("four")[0].offsetTop;
      var isok = true;
      $(window).scroll(function() {
        let about =
          document.getElementsByClassName("wordcontent")[0].offsetTop -
          document.body.scrollTop -
          document.documentElement.clientHeight;
        // $(".wordcontent").offset().top -
        //   $(window).scrollTop() -
        //   $(window).height();
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
  max-width: 1920px;
  min-width: 100%;
  min-height: 860px;
  background: url("../../assets/imgs/home/indrabg.jpg") no-repeat;
  background-position-x: center;
  padding: 1px;
  box-sizing: border-box;
}
.word {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
.wordcontent {
  width: 600px;
  height: 860px;
  background-color: #ffffff;
  opacity: 0;
  text-align: center;
  padding-top: 100px;
  margin-top: 100px;
  box-sizing: border-box;
  transition: margin 0.8s, opacity 1s;
}
.titlebg {
  width: 252px;
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
  width: 144px;
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
.content {
  margin-top: 50px;
}
.content h4 {
  margin-bottom: 20px;
}
.content p {
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #222222;
  line-height: 30px;
}
</style>
