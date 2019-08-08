<template>
  <!-- 合作详情 -->
  <div class="business">
    <!-- 上面背景图片 -->
    <!-- <Topbg></Topbg> -->
    <div class="top">
      <img class="img" :src="bgimg" alt />
      <div class="redbtn">
        <div class="listtop">
          <div
            class="redbtncontent"
            v-for="(item,index) in tablist"
            :key="index"
            v-show="item.id==active"
          >
            <span>{{item.title}}</span>
          </div>
          <img
            src="../../assets/imgs/home/up.png"
            class="topimg"
            v-show="isshow==0"
            @click="list(1)"
            alt
          />
          <img
            src="../../assets/imgs/home/upimg.png"
            class="topimg"
            v-show="isshow==1"
            @click="list(0)"
            alt
          />
        </div>
      </div>
      <div class="list" v-show="isshow==1">
        <div class="item" v-for="(item,index) in tablist" :key="index" v-show="item.id!=active">
          <span @click="nav(item.id)">{{item.title}}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <!-- <ul class="tabitem">
        <li
          class
          v-for="(item,index) in tablist"
          :key="index"
          @click="nav(item.id)"
          :style="{background:item.id==active?'#b81b22':'#fff',color:item.id==active?'#fff':'#000000'}"
        >{{item.title}}</li>
      </ul>-->
      <div class="item_content">
        <div class="item_img">
          <img :src="image" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Topbg from "@/components/topbg/topbg.vue";
import { constants } from "fs";
import { connect } from "tls";
export default {
  data() {
    return {
      tablist: [
        { id: 1, title: "影视节目投资" },
        { id: 2, title: "短视频内容营销" },
        { id: 3, title: "华为移动媒体投放" },
        { id: 4, title: "交通出行媒体" }
      ],
      image: "",
      active: 0,
      bgimg: "",
      isshow: 0
    };
  },
  components: {
    Topbg
  },
  created() {
    // 接收路由跳转Params里面传过来的参数
    // this.active = this.$route.params.business_id;

    //从sessionStorage把页面要用的参数取出来
    this.active = sessionStorage.getItem("business_id");
    this.businessesid();
    // this.businesses();
    this.topimg();
  },
  watch: {
    "$store.state.item_id": function() {
      //你需要执行的代码
      this.active = this.$store.state.item_id;
      console.log(this.active);
      console.log(this.$store.state.item_id);
      this.businessesid();
    }
  },
  methods: {
    // 列表下拉列表显示不显示
    list: function(y) {
      this.isshow = y;
    },
    //点击一级分类向后台获取不同的数据
    nav: function(index) {
      //把页面要传的参数存到sessionStorage里面
      this.active = sessionStorage.setItem("business_id", index);
      this.active = index;
      console.log(this.active);
      this.businessesid();
      this.isshow = 0;
    },
    //axios请求
    businessesid: function() {
      this.$api.get(
        "businesses/" + this.active,
        {
          // id: this.active
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.image = response.data.data.image;
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
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
            this.tablist = response.data.data;
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    //axios请求
    topimg: function() {
      this.$api.get(
        "banners/businesses",
        {
          // page: 1,
          // pageSize: 10
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
    }
  }
};
</script>
<style scoped>
.business {
  width: 100%;
}

.content {
  width: 100%;
  padding: 1px;
  padding: 0px 0.4rem;
  margin: 0.27rem auto;
  box-sizing: border-box;
}
.top {
  width: 10rem;
  position: relative;
}
.top .img {
  width: 100%;
}
.redbtn {
  width: 10rem;
  height: 0.93rem;
  background-color: rgba(183, 26, 34, 0.7);
  /* opacity: 0.7; */
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 1px;
  padding: 0px 0.4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
span {
  height: 0.31rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.32rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.31rem;
  letter-spacing: 0rem;
  color: #ffffff;
}
.listtop {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topimg {
  width: 0.45rem;
  height: 0.25rem;
}
.list {
  position: absolute;
  bottom: -2.77rem;
}
.item {
  width: 10rem;
  height: 0.93rem;
  background-color: rgba(183, 26, 34, 0.7);
  padding: 1px;
  padding: 0px 0.4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.item_content {
  width: 100%;
}
.item_img {
  width: 100%;
}
.item_img img {
  width: 100%;
}
</style>
