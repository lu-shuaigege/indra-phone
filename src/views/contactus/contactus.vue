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
</template>
<script>
export default {
  data() {
    return {
      address: [
        {
          url: require("../../assets/imgs/contactus/contactus5.png"),
          title: "沈阳总部：",
          t: "沈阳市沈河区十一纬路169号富中大厦六楼",
          f: "TEL：22874455"
        },
        {
          url: require("../../assets/imgs/contactus/contactus1.png"),
          title: "北京分公司：",
          t: "北京市朝阳区广渠路3号竞园商五 ",
          f: "TEL：010-61655810"
        },
        {
          url: require("../../assets/imgs/contactus/contactus6.png"),
          title: "上海分公司：",
          t: "上海市静安区南京西路1038号梅龙镇广场1704室",
          f: "TEL：021-52181103"
        },

        {
          url: require("../../assets/imgs/contactus/contactus3.png"),
          title: "长春办事处：",
          t: "地址：",
          f: "长春宽城区凯旋路466号万达华宅2号楼一单元1102 "
        },
        {
          url: require("../../assets/imgs/contactus/contactus4.png"),
          title: "大连办事处：",
          t: "地址：",
          f: "大连市中山区香榭丽广场C座1711室"
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
  background: #ffffff;
}
.content {
  width: 100%;
  padding: 1px;
  padding: 0.93rem 0.4rem 0rem 0.4rem;
  box-sizing: border-box;
}
.top {
  width: 10rem;
  height: 100%;
  /* height: 4.55rem; */
}
.top img {
  width: 100%;
}
.title {
  width: 6.67rem;
  height: 1.63rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.37rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.54rem;
  letter-spacing: 0rem;
  color: #222222;
  text-align: center;
  margin: 0 auto;
}
.img {
  width: 100%;
  height: 6.16rem;
}
.img img {
  width: 100%;
  height: 100%;
}
.address {
  width: 9.2rem;
  height: 10.07rem;
  background-color: #f8f8f8;
  padding: 1px 0.4rem;
  box-sizing: border-box;
  margin-bottom: 0.96rem;
}
.address_title {
  width: 100%;
  height: 1rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.37rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1rem;
  letter-spacing: 0rem;
  color: #222222;
  border-bottom: 1px solid #e1e1e1;
}
.address_item {
  width: 100%;
  height: 9.04rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
.item {
  width: 100%;
  display: flex;
  align-items: center;
}
.item_img {
  width: 1.55rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item_img img {
  max-width: 1.2rem;
  max-height: 100%;
}

.item_word {
  width: 6.52rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.32rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.48rem;
  letter-spacing: 0rem;
  color: #666666;
}
</style>
