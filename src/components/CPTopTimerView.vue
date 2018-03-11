<template>
    <div class="clearfix topView">
        <p id="termNumber" class="textFont">{{term}}</p>
        <p id="stopTime" class="textFont redColor">{{stopTime}}</p>
    </div>
</template>
<script>
export default {
  name: 'topTimerView',
  data: () => ({
    term: '第2018-027期',
    stopTime: '2018/3/11 19:40:00 截止'
  })
}
</script>
<style scoped>
@import '../assets/css/home.css';
p{
  float: left;
}
#termNumber{
  margin-left: 10px;
}
#stopTime{
  margin-left: 30px;
}
.topView{
  margin-top: 64px;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  border-bottom-color: #999999;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  background-color: #F6F6F6;
}

.textFont{
  font-size:14px;
}
.redColor{
  color:red;
}
</style>
