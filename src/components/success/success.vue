<template>
  <!-- 成功案例 -->
  <div class="success">
    <!-- 上面标题 -->
    <div class="four">
      <div class="title">
        <div class="redshu"></div>
        <div class="fourimg_title">成功案例</div>
        <div class="OURSERVICE">SUCCESSFUL CASES</div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="case">
      <div class="casecontent">
        <div class="imgcontent">
          <div
            class="imgitem"
            v-for="(caseitem,caseindex) in imglist"
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
</template>
<script>
import pagination from "../../components/pagination/pagination.vue";
export default {
  data() {
    return {
      total: 0, // 记录总条数
      display: 12, // 每页显示条数
      current: 1, // 当前的页数
      category: 1, //一级分类
      page: 1, //页码
      imglist: [],
      bgimg: ""
    };
  },
  components: {
    //引入分页组件
    "v-pagination": pagination
  },
  created() {
    this.caseslist();
    this.topbg();
  },
  methods: {
    //分页组件向后台发送请求
    pagechange: function(currentPage) {
      this.page = currentPage;
      // ajax请求, 向后台发送 currentPage, 来获取对应的数据
      this.pagination();
    },
    //点击一级分类向后台获取不同的数据
    nav: function(index, id) {
      this.category = id;
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("category", this.category);
      this.pagination();
      this.active = index;
    },
    //axios请求
    pagination: function() {
      this.$api.get(
        "cases",
        {
          page: this.page,
          per_page: 12
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            this.imglist = response.data.data.data;
            this.total = response.data.data.total;
            this.display = response.data.per_page;
          } else {
          }
        }
      );
    },
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
    },
    //axios请求
    caseslist: function() {
      this.$api.get(
        "cases-top?top=4",
        {
          // category: this.category,
          // page: this.page,
          // per_page: 4
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            this.imglist = response.data.data.data;
            this.total = response.data.data.total;
            this.display = response.data.per_page;
          } else {
          }
        }
      );
    },
    //axios请求
    topbg: function() {
      this.$api.get(
        "banners/cases",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            this.bgimg = response.data.data[0].image;
          } else {
          }
        }
      );
    }
  }
};
</script>
<style scoped>
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
  height: 0.33rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.35rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.33rem;
  letter-spacing: 0rem;
  color: #222222;
  padding: 0.27rem 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.imgitem .text {
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
