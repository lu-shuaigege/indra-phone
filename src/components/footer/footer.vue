<template>
  <!-- 导航 -->
  <div class="footer">
    <div class="content">
      <div>
        <router-link to="/business">
          <span @click="tiao(2)">业务介绍</span>
        </router-link>
      </div>
      <div>
        <router-link to="/success">
          <span @click="tiao(3)">成功案例</span>
        </router-link>
      </div>
      <div>
        <router-link to="/">
          <span @click="tiao(0)">
            <img src="../../assets/imgs/home/footerlogo.png" alt />
          </span>
        </router-link>
      </div>
      <div>
        <router-link to="/about" @click="tiao(1)">
          <span @click="tiao(1)">关于英铎</span>
        </router-link>
      </div>
      <div>
        <router-link to="/contactus">
          <span @click="tiao(4)">联系我们</span>
        </router-link>
      </div>
    </div>
    <div class="heng"></div>
    <div class="gongsi">copyright@英铎创智传媒集团</div>
  </div>
</template>
<script>
export default {
  data() {
    return { business_id: 0 };
  },

  methods: {
    tiao: function(x) {
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("titleactive", x);
      this.business_id = x;
      this.$store.commit("item_id", this.business_id);
    }
  }
};
</script>
<style scoped>
.footer {
  width: 100%;
  background-color: #2c2a2a;
}
.content {
  width: 1200px;
  height: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.content div a {
  width: 64px;
  height: 16px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 16px;
  letter-spacing: 0px;
  color: #969595;
}
.heng {
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  box-shadow: 0px 1px 0px 0px #000000;
  opacity: 0.2;
}
.gongsi {
  width: 1200px;
  height: 59px;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 59px;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
  margin: 0 auto;
}
</style>
