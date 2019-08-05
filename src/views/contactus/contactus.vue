<template>
  <!-- 联系我们 -->
  <div class="contactus">
    <!-- 上面背景图片 -->
    <!-- <Topbg></Topbg> -->
    <div class="top">
      <img :src="bgimg" alt />
    </div>
    <div class="content">
      <p class="title">
        英铎创智传媒扎根中国20年
        <br />正逐步完成了以沈阳为基地
        <br />以北京、上海、广州为市场运营服务中心
      </p>
      <div class="img">
        <img src="../../assets/imgs/contactus/contactus2.jpg" alt />
      </div>
      <div class="address">
        <div class="address_content">
          <p class="address_title">全国办公地</p>
          <div class="address_item">
            <div class="item" v-for="(item,index) in address" :key="index">
              <div class="item_img">
                <img :src="item.url" alt />
              </div>
              <div class="item_word">
                <p>{{item.title}}</p>
                <p>{{item.t}}</p>
                <p>{{item.f}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      address: [
        {
          url: require("../../assets/imgs/contactus/contactus5.png"),
          title: "上海市长宁区通协路288弄旭辉虹桥国际8号楼",
          t: "T：021-32793333",
          f: "F：021-32527558"
        },
        {
          url: require("../../assets/imgs/contactus/contactus1.png"),
          title: "北京朝阳区朝外大街三丰北里7号悠唐国际写字楼B17层",
          t: "T：010-65683610",
          f: "F：010-65681811"
        },
        {
          url: require("../../assets/imgs/contactus/contactus3.png"),
          title: "广州市天河区金穗路62号侨鑫国际23A层01号",
          t: "T：021-32793333",
          f: "F：021-32527558"
        },
        {
          url: require("../../assets/imgs/contactus/contactus4.png"),
          title: "杭州市虎玉路41号八卦田公园正大门",
          t: "T：0571-81590666",
          f: "F：0571-87926089"
        }
      ],
      bgimg: ""
    };
  },
  components: {},
  created() {
    // debugger
    this.topbg();
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
    window.addEventListener("scroll", this.up);
  },

  methods: {
    //axios请求
    topbg: function() {
      this.$api.get(
        "banners/contact-us",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.bgimg = response.data.data[0].image;
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    up: function() {
      //判断元素到达当前窗口的什么位置（简介）
      var isup = true;
      let tabBar = document.getElementsByClassName("address_content")[0]
        .offsetTop;
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      let h = document.documentElement.clientHeight;
      console.log(tabBar);
      console.log(t);
      console.log(h);
      let isshow = tabBar - t - h;
      console.log(isshow);
      if (isshow < -100 && isup) {
        $(".address_content")
          .css("margin-top", "0")
          .css("opacity", "1");
        // alert("ok");
        isup = false;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.up);
  }
};
</script>
<style scoped>
.contactus {
  width: 100%;
}
.content {
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
.title {
  width: 432px;
  height: 120px;
  font-family: MicrosoftYaHei;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 40px;
  letter-spacing: 0px;
  color: #222222;
  text-align: center;
  margin: 0 auto;
}
.img {
  width: 1200px;
  height: 758px;
  margin: 58px auto;
}
.img img {
  width: 100%;
  height: 100%;
}
.address {
  width: 91.15vw;
  min-width: 1200px;
  background-color: #f8f8f8;
  margin: 0 auto 100px auto;
  padding: 1px;
  box-sizing: border-box;
}
.address_content {
  width: 1200px;
  height: 443px;
  /* margin: 100px auto 0 auto; */
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  opacity: 0;
  transition: margin 0.8s, opacity 1s;
}
.address_title {
  width: 1200px;
  font-family: MicrosoftYaHei;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 22px;
  letter-spacing: 0px;
  color: #222222;
  padding: 50px 0 20px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #e1e1e1;
}
.address_item {
  width: 1200px;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 600px;
  display: flex;
  align-items: center;
  /* border-right: 1px solid #999999; */
}
.item_img {
  width: 90px;
  height: 74px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-right: 33px;
}
.item_word {
  width: 475px;
  height: 74px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 27px;
  letter-spacing: 0px;
  color: #222222;
  border-right: 1px solid #999999;
}
.item:nth-child(2) {
  justify-content: flex-end;
}
.item:nth-child(2) .item_word {
  width: 392px;
  border: 0;
}
.item:nth-child(4) {
  justify-content: flex-end;
}
.item:nth-child(4) .item_word {
  width: 392px;
  border: 0;
}
</style>
