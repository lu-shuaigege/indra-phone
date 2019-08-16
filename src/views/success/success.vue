<template>
  <!-- 成功案例 -->
  <div class="success">
    <!-- 上面背景图片 -->
    <!-- <Topbg></Topbg> -->
    <div class="top">
      <img :src="bgimg" alt />
    </div>
    <div class="content">
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
                <div class="text">{{caseitem.classification}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="end" v-text="updown"></div>
    <div class="yema" style="display:none">
      <v-pagination :total="total" :current-page="current" @pagechange="pagechange"></v-pagination>
    </div>
  </div>
</template>
<script>
import Topbg from "@/components/topbg/topbg.vue";
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
      bgimg: "",
      current_page: 1, //后台当前页码
      last_page: 1, //后台最后页码
      updown: "- 下拉加载更多 -"
    };
  },
  components: {
    Topbg,
    //引入分页组件
    "v-pagination": pagination
  },
  created() {
    this.caseslist();
    this.topbg();
    this.pagechange();
  },
  methods: {
    //分页组件向后台发送请求
    // pagechange: function(currentPage) {
    //   this.page = currentPage;
    //   // ajax请求, 向后台发送 currentPage, 来获取对应的数据
    //   this.pagination();
    // },
    //分页
    pagechange: function() {
      let that = this;
      $(window).scroll(function() {
        var srollPos = $(window).scrollTop() + 0.5; //滚动条距顶部距离(页面超出窗口的高度)
        // console.log(srollPos);
        // console.log($(document).height());
        // console.log($(window).height());
        console.log(srollPos >= $(document).height() - $(window).height());
        if (
          srollPos >= $(document).height() - $(window).height() &&
          that.current_page <= that.last_page
        ) {
          that.current++;
          that.page = that.current;
          // ajax请求, 向后台发送 , 来获取对应的数据
          that.pagination();

          console.log(11111111111);
          console.log(that.page);
          if ((that.current_page = that.last_page)) {
            // that.updown = "我也是有底线的";
          }
        }
      });
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
            console.log(response.data); //请求成功，response为成功信息参数
            let data = response.data.data.data;
            console.log(data);
            for (var index in data) {
              // console.log(data[index]);
              this.imglist.push(data[index]);
            }

            this.total = response.data.data.total;
            this.display = response.data.per_page;
            this.current_page = response.data.current_page;
            this.last_page = response.data.last_page;
            console.log(this.imglist);
            if (this.current_page == this.last_page) {
              this.updown = "- 我也是有底线的 -";
            }
          } else {
            console.log(response.message); //请求失败，response为失败信息
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
        "cases",
        {
          // category: this.category,
          page: this.page,
          per_page: 12
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.imglist = response.data.data.data;
            this.total = response.data.data.total;
            this.display = response.data.per_page;
            console.log(this.imglist);
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    //axios请求最上面banner
    topbg: function() {
      this.$api.get(
        "banners/cases",
        {
          page: 1,
          pageSize: 10
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
.success {
  width: 100%;

  box-sizing: border-box;
  background-color: #ffffff;
}
.top {
  width: 10rem;
  height: 100%;
  /* height: 4.55rem; */
}
.top img {
  width: 100%;
}
.content {
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
.end {
  /* width: 2.39rem; */
  height: 0.28rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.29rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.28rem;
  letter-spacing: 0rem;
  color: #c1c1c1;
  margin: 0px auto 0.7rem auto;
  box-sizing: border-box;
  text-align: center;
}
</style>
