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
  margin-left: 0.266rem;
}
#stopTime{
  margin-left: 0.8rem;
}
.topView{
  margin-top: 1.706rem;
  height: 0.8rem;
  line-height: 0.8rem;
  overflow: hidden;
  border-bottom-color: #999999;
  border-bottom-style: solid;
  border-bottom-width: 0.013rem;
  background-color: #F6F6F6;
}

.textFont{
  font-size:0.186rem;
}
.redColor{
  color:red;
}
</style>
