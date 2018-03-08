<template>
  <div id="  ">
    <div class="main-list clearfix topView">
      <p id="redLine">s</p>
      <p id="termNumber" class="textFont">{{term}}</p>
      <p id="stopTime" class="textFont redColor">{{stopTime}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "topTimerView",
  data: () => ({
    term:"第2018-027期",
    stopTime: "2018/3/11 19:40:00 截止"
  })
}
</script>
<style scoped>
@import '../assets/css/home.css';
p{
  float: left;
}

#redLine{
  border: 1px solid #999;
  padding:5;
  width:5px;
  height: 10;
  background-color: #999;
}

#termNumber{
  margin-left: 10px;
}
#stopTime{
  margin-left: 30px;
}
.topView{
  background-color: #666;
}

.textFont{
  font-size:14px;
}
.redColor{
  color:red;
}
</style>
