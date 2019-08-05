<template>
  <div class="fourimg">
    <div class="four">
      <div class="OURSERVICE">OUR SERVICE</div>
      <div class="fourimg_title">我们的业务</div>
    </div>

    <div class="imgcontent">
      <div class="imgitem" v-for="(item,index) in fourimg" :key="index">
        <!-- <router-link to="/business"> -->
        <div class="item" @click="xiang(item.id)">
          <div class="itemtop">+</div>
          <img :src="item.image" alt />
        </div>
        <p>{{item.title}}</p>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      business_id: 0,
      fourimg: [
        {
          image: require("../../assets/imgs/home/business4.jpg"),
          id: 1,
          title: "影视节目投资"
        },
        {
          image: require("../../assets/imgs/home/business1.jpg"),
          id: 2,
          title: "短视频营销"
        },
        {
          image: require("../../assets/imgs/home/business2.jpg"),
          id: 3,
          title: "华为移动媒体播放"
        },
        {
          image: require("../../assets/imgs/home/business3.jpg"),
          id: 4,
          title: "交通出行媒体"
        }
      ]
    };
  },
  created() {
    // this.businesses();
  },
  mounted() {
    // this.up();
  },
  beforeDestroy() {
    // window.removeEventListener("scroll", this.up);
  },
  methods: {
    xiang(row) {
      this.business_id = row;
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("business_id", this.business_id);
      //   console.log(row); //此时就能拿到整行的信息
      this.$router.push({
        name: "investment",
        params: {
          business_id: this.business_id
        }
      });
    },
    //axios请求
    businesses: function() {
      this.$api.get(
        "businesses",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.fourimg = response.data.data;
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
          $(".four").offset().top - $(window).scrollTop() - $(window).height();
        console.log(istitle);
        if (istitle < -100 && isup) {
          $(".four")
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
.fourimg {
  max-width: 1920px;
  min-width: 1200px;
  max-height: 45vw;
  min-height: 548px;
  height: 868px;
  padding: 1px;
  box-sizing: border-box;
  margin: 100px auto;
}
.four {
  margin: 100px;
  opacity: 0;
  transition: margin 0.8s, opacity 1s;
}
.OURSERVICE {
  width: 243px;
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
.fourimg_title {
  width: 120px;
  height: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #000000;
  margin: -12px auto 0 auto;
}
.imgcontent {
  width: 91vw;
  min-width: 1200px;
  height: 30vw;
  display: flex;
  justify-content: space-between;
  margin: 3vw auto 0 auto;
}
.imgitem {
  /* width: 21vw; */
  min-width: 276px;
  /* height: 28vw; */
  min-height: 370px;
  text-align: center;
}
.item {
  width: 21vw;
  min-width: 276px;
  height: 28vw;
  min-height: 370px;
  background-color: #b81b22;
  position: relative;
}
.item:hover {
  cursor: pointer;
}

.itemtop {
  width: 21vw;
  min-width: 276px;
  height: 28vw;
  min-height: 370px;
  background: rgba(187, 24, 34, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color: #fff;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999;
  opacity: 0;
  /* visibility: hidden; */
  transition: visibility 1s;
  -moz-transition: visibility 1s;
  -webkit-transition: visibility 1s;
  -o-transition: visibility 1s;
}
.itemtop:hover {
  opacity: 1;
}
.item img {
  width: 100%;
  height: 27vw;
  min-height: 358px;
}
.imgitem p {
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #222222;
  margin-top: 17px;
}
</style>
