<template>
  <div class="fourimg">
    <div class="four">
      <div class="title">
        <div class="redshu"></div>
        <div class="fourimg_title">我们的业务</div>
        <div class="OURSERVICE">OUR SERVICE</div>
      </div>
    </div>

    <div class="imgcontent">
      <div class="imgitem" v-for="(item,index) in fourimg" :key="index">
        <!-- <router-link to="/business"> -->
        <div class="item" @click="xiang(item.id)">
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
  width: 10rem;
  height: 10.36rem;
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
  width: 100%;
  height: 9.15rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.imgitem {
  width: 4.4rem;
  height: 3.91rem;
  margin-bottom: 0.67rem;
}
.item {
  width: 4.4rem;
  height: 3.31rem;
}
.item img {
  width: 4.4rem;
  height: 3.31rem;
}
.imgitem p {
  height: 0.33rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.35rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.33rem;
  letter-spacing: 0rem;
  color: #222222;
  margin-top: 0.27rem;
}
</style>
