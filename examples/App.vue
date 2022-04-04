<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo/>
    <Card img-src="123.png" summary="这是概要这是概要这是概要，哈哈哈">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 | 1000人报名</div>
          <div class="price">￥2999.00</div>
        </div>
      </template>
    </Card>
    <br/>
    <br/>
    <br/>
    <Card img-src="123.png" img-height="160" summary="这是概要这是概要这是概要，哈哈哈">
      默认插槽默认插槽默认插槽
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">中级 | 100人报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </Card>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #F01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
