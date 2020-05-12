<template>
  <!-- 首页 -->
  <div class="home">
    <!-- 轮播图 -->
    <el-carousel class="banner animated 1 bounce delay-1s" arrow="never" height="53vw" width="100%">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.image" style="width:100%;height:100%" alt />
      </el-carousel-item>
    </el-carousel>
    <!-- 四图 -->
    <Fourimg></Fourimg>
    <!-- 关于英铎 -->
    <Aboutindra></Aboutindra>
    <!-- 成功案例 -->
    <div class="success">
      <!-- 上面标题 -->
      <div class="four">
        <div class="title">
          <div class="redshu"></div>
          <div class="fourimg_title">成功案例</div>
          <div class="OURSERVICE">SUCCESSFUL CASES</div>
        </div>
        <router-link to="/success">
          <div class="gengduo">
            <span>更多</span>
            <img src="../../assets/imgs/home/index-more.png" alt />
          </div>
        </router-link>
      </div>
      <!-- 列表 -->
      <div class="case">
        <div class="casecontent">
          <div class="imgcontent">
            <div
              class="imgitem"
              v-for="(caseitem,caseindex) in caseimg"
              :key="caseindex"
              @click="details(caseitem.id)"
            >
              <div class="imgitemcontent">
                <div class="img">
                  <img :src="caseitem.cover_image" alt />
                </div>

                <p class="imgitemtitle">{{caseitem.title}}</p>
                <span class="text">{{caseitem.classification}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="yema">
      <v-pagination :total="total" :current-page="current" @pagechange="pagechange"></v-pagination>
      </div>-->
    </div>
    <!-- 合作方 -->
    <Cooperation></Cooperation>
  </div>
</template>
<script>
import Fourimg from "@/components/fourimg/fourimg.vue";
import Aboutindra from "@/components/aboutindra/aboutindra.vue";
import Cooperation from "@/components/cooperation/cooperation.vue";
export default {
  data() {
    return {
      imgs: [],
      caseimg: []
    };
  },
  components: { Fourimg, Aboutindra, Cooperation },
  created() {
    this.banner();
    this.caseslist();
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
    window.addEventListener("scroll", this.about);
  },

  methods: {
    //axios请求轮播图
    banner: function() {
      //查询条件
      //   var param = {
      //     page: page,
      //     pageSize: pageSize
      //     //其它查询条件可在下面添加
      //   };
      this.$api.get(
        "banners/index",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            this.imgs = response.data.data;
          } else {
          }
        }
      );
    },
    //axios请求首页案例
    caseslist: function() {
      this.$api.get(
        "cases-top?top=4",
        {
          // category: this.category,
          // page: this.page
          // pageSize: 12
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            this.caseimg = response.data.data;
          } else {
          }
        }
      );
    },
    //点击案例跳转详情页
    details: function(id) {
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("casesid", id);
      //路由跳转携带参数
      this.$router.push({
        name: "details",
        params: {
          // business_id: this.id
        }
      });
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.about);
  }
};
</script>
<style scoped>
.home {
  background: #f8f8f8;
}
.success {
  width: 100%;
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
  justify-content: space-between;
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
.gengduo {
  width: 1.1rem;
  height: 0.307rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.32rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.307rem;
  letter-spacing: 0rem;
  color: #999999;
  display: flex;
  align-items: center;
}
.gengduo img {
  width: 0.307rem;
  height: 0.307rem;
  margin-left: 0.147rem;
}
.case {
  width: 100%;
  padding: 1px;
  box-sizing: border-box;
}
.casecontent {
  width: 100%;
  margin: 0 auto;
}
.imgcontent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.imgitem {
  width: 4.4rem;
  height: 4.76rem;
  background-color: #ffffff;
  box-sizing: border-box;
  margin-bottom: 0.67rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.img {
  width: 100%;
  height: 3.31rem;
  overflow: hidden;
}
.img img {
  width: 100%;
  height: 100%;
}
.imgitemtitle {
  width: 4.4rem;
  height: 0.4rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.35rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.46rem;
  letter-spacing: 0rem;
  color: #222222;
  padding: 0.2rem 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.imgitem .text {
  width: max-content;
  display: inline-block;
  height: 0.64rem;
  background-color: #f1f1f1;
  border-radius: 0.11rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.29rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.28rem;
  letter-spacing: 0rem;
  color: #999999;
  margin: 0.21rem 0 0 0;
  padding: 0.19rem;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>
