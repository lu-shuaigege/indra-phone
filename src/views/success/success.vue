<template>
  <!-- 成功案例 -->
  <div class="success">
    <!-- 上面背景图片 -->
    <!-- <Topbg></Topbg> -->
    <div class="top">
      <img :src="bgimg" alt />
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
              <p class="text">{{caseitem.classification}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="yema">
      <v-pagination :total="total" :current-page="current" @pagechange="pagechange"></v-pagination>
      <!-- <div id="demo7"></div> -->
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
      bgimg: ""
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
.case {
  width: 100%;
  /* height: 1300px; */
  /* height: 69vw; */
  min-height: 960px;
  padding: 1px;
  box-sizing: border-box;
}
.casecontent {
  width: 100%;
  /* height: 1145px; */
  margin: 0 auto;
}
.imgcontent {
  /* width: 92vw; */
  /* max-width: 1750px; */
  /* min-width: 1200px; */
  margin: 50px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.imgitem {
  width: 33.3%;
  min-width: 355px;
  height: 28vw;
  min-height: 345px;
  background-color: #ffffff;
  box-sizing: border-box;
  margin-bottom: 50px;
  overflow: hidden;
  /* flex: 33.3%; */
  display: flex;
  justify-content: center;
  padding: 0px 2vw;
}
.imgitemcontent {
  /* width: 100%; */
  /* background: #d8362b; */
}
.imgitem:hover .imgitemcontent {
  box-shadow: 0vw 0vw 1vw 0vw rgba(51, 51, 51, 0.15);
  border-bottom: 2px solid #d8362b;
  background: #d8362b;
  /* animation-duration: 2s;
  animation-delay: 2s;
  animation-iteration-count: infinite; */
}
.imgitem:hover p {
  color: #ffffff;
}
.imgitem:hover img {
  transition: all 0.5s;
  -webkit-transition: all 0.5s; /* Safari */
  cursor: pointer;
  transform: scale(1.1);
  -ms-transform: scale(1.1); /* IE 9 */
  -moz-transform: scale(1.1); /* Firefox */
  -webkit-transform: scale(1.1); /* Safari 和 Chrome */
  -o-transform: scale(1.1);
}
.img {
  width: 100%;
  min-width: 355px;
  height: 22vw;
  min-height: 269px;
  overflow: hidden;
}
.img img {
  width: 100%;
  height: 100%;
}
.imgitem .imgitemtitle {
  /* width: 100%; */
  height: 21px;
  font-family: MicrosoftYaHei;
  font-size: 1vw;
  font-weight: normal;
  font-stretch: normal;
  line-height: 21px;
  letter-spacing: 0px;
  color: #222222;
  padding: 1.2vw 1vw 0 1vw;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.imgitem .text {
  height: 15px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 15px;
  letter-spacing: 0px;
  color: #999999;
  padding: 0.5vw 1vw 0 1vw;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.yema {
  margin-bottom: 170px;
}
</style>
