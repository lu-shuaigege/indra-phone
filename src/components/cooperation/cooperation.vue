<template>
  <!-- 首页 -->
  <div class="and">
    <!-- 上面标题 -->
    <div class="four">
      <div class="title">
        <div class="redshu"></div>
        <div class="fourimg_title">合作伙伴</div>
        <div class="OURSERVICE">BUSINESS PARTNER</div>
      </div>
    </div>
    <div class="andcontent">
      <div class="imgcontent">
        <div class="imgitem" v-for="(item,index) in imgs" :key="index">
          <!-- <div class="item"> -->
          <img :src="item.logo" alt />
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: []
    };
  },
  created() {
    //从sessionStorage把页面要用的参数取出来
    this.casesid = sessionStorage.getItem("casesid");
    this.partners();
  },
  mounted() {
    // this.up();
  },
  methods: {
    //axios请求
    partners: function() {
      this.$api.get(
        "partners-top?top=21",
        {
          // id: this.casesid
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
    up: function() {
      //判断元素到达当前窗口的什么位置（简介）
      var isup = true;
      $(window).scroll(function() {
        let istitle =
          $(".andtitle").offset().top -
          $(window).scrollTop() -
          $(window).height();
        console.log(istitle);
        if (istitle < -100 && isup) {
          $(".andtitle")
            .css("margin-top", "0")
            .css("opacity", "1");
          // alert("ok");
          isup = false;
        }
      });
    }
  }
};
</script>
<style scoped>
.and {
  width: 10rem;
  height: 3.85rem;
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
.imgcontent {
  width: 9.2rem;
  height: 1.99rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.imgitem {
  width: 1.05rem;
  height: 0.49rem;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
  margin: 0 0.18rem 0.18rem 0;
}
.imgitem img {
  max-width: 100%;
  max-height: 100%;
}
</style>
