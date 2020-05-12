<template>
    <!-- 首页 -->
    <div class="business">
        <!-- 上面背景图片 -->
        <!-- <Topbg></Topbg> -->
        <div class="top">
            <img :src="bgimg" alt />
        </div>
        <!-- 四图 -->
        <Fourimg class="fourimg"></Fourimg>
        <!-- 我们的业务 -->
        <div class="content">
            <!-- 上面标题 -->
            <div class="four">
                <div class="title">
                    <div class="redshu"></div>
                    <div class="fourimg_title">我们的业务</div>
                    <div class="OURSERVICE">OUR SERVICE</div>
                </div>
            </div>
            <div class="img1">
                <img src="../../assets/imgs/business/business1.jpg" alt />
            </div>
            <div class="img2">
                <div class="word">
                    <p class="word_title">
                        <b>强势媒体资源</b>
                    </p>
                    <p class="word_content">确保整合传播效果</p>
                    <p class="content_word">
                        12年紧密合作的媒体平台
                        <br />2000+实效营销网红/KOL
                        <br />350+高流量明星合作资源
                        <br />强势出行媒体的独家性运营
                        <br />HUAWEI移动媒体的强势合作
                    </p>
                </div>
                <div class="img2_top">
                    <img src="../../assets/imgs/business/business2.jpg" alt />
                </div>
                <!-- <div class="img2_bottom">
          <img src="../../assets/imgs/business/business3.jpg" alt />
                </div>-->
            </div>
        </div>
        <!-- 合作方 -->
        <Cooperation></Cooperation>
    </div>
</template>
<script>
// import Topbg from "@/components/topbg/topbg.vue";
import Fourimg from "@/components/fourimg/fourimg.vue";
import Cooperation from "@/components/cooperation/cooperation.vue";
export default {
    data() {
        return { bgimg: "" };
    },
    components: {
        Fourimg,
        // Topbg,
        Cooperation
    },
    created() {
        this.businesses();
        this.topbg();
    },
    mounted() {
        // this.$router.afterEach((to, from, next) => {
        this.$router.afterEach(() => {
            window.scrollTo(0, 0);
        });
        //在dom挂载的时候注册scroll事件
        window.addEventListener("scroll", this.four);
    },

    methods: {
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
                        this.imgs = response.data.data;
                    } else {
                    }
                }
            );
        },
        //axios请求
        topbg: function() {
            //查询条件
            //   var param = {
            //     page: page,
            //     pageSize: pageSize
            //     //其它查询条件可在下面添加
            //   };
            this.$api.get(
                "banners/businesses",
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
        },
        four: function() {
            //判断元素到达当前窗口的什么位置（四图）
            let isfour = true;
            let tabBar = document.getElementsByClassName("four")[0].offsetTop;
            let t =
                document.documentElement.scrollTop || document.body.scrollTop;
            let h = document.documentElement.clientHeight;
            let isshow = tabBar - t - h;
            if (isshow < -100 && isfour) {
                $(".four")
                    .css("margin-top", "0")
                    .css("opacity", "1");
                // alert("ok");
                isfour = false;
            }
            var isup = true;
            // let andtitle = document.getElementsByClassName("andtitle")[0]
            //     .offsetTop;
            // let isandlistshow = andtitle - t - h;
            // if (isandlistshow < -100 && isup) {
            //     $(".andtitle")
            //         .css("margin-top", "0")
            //         .css("opacity", "1");
            //     // alert("ok");
            //     isup = false;
            // }
        }
    },
    //页面销毁前注销scroll事件
    beforeDestroy() {
        window.removeEventListener("scroll", this.four);
    }
};
</script>
<style scoped>
.business {
    width: 100%;
    background: #f8f8f8;
}
.top {
    width: 10rem;
    height: 100%;
    /* height: 4.55rem; */
}
.top img {
    width: 100%;
}
.fourimg {
    height: 100%;
}
.content {
    width: 10rem;
    background-color: #ffffff;
    padding: 1px;
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
    font-size: 0.27rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.27rem;
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
.content {
    width: 100%;
    padding: 1px;
    padding: 0px 0.4rem 0.4rem 0.4rem;
    margin: 0.27rem auto;
    box-sizing: border-box;
}
.content img {
    width: 100%;
    margin: 0.27rem auto;
    background: #f8f8f8;
    padding: 1rem 0;
    box-sizing: border-box;
}
.img2 {
    width: 9.2rem;
    /* height: 16rem; */
    background-color: #f8f8f8;
    padding: 0.667rem 0.28rem;
    box-sizing: border-box;
}
.word {
    font-family: 微软雅黑;
    font-size: 0.4rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.56rem;
    letter-spacing: 0rem;
    color: #000000;
    text-align: center;
}
.content_word {
    font-family: MicrosoftYaHei;
    font-size: 0.347rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.7rem;
    letter-spacing: 0rem;
    color: #666666;
    background: #f8f8f8;
    margin-top: 0.5rem;
}
.img2_top img {
    width: 100%;
    padding-top: 1rem;
    box-sizing: border-box;
}
</style>
