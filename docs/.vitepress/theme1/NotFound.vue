<template>
  <div class="theme">
    <h1>404</h1>
    <blockquote>{{ getMsg() }}</blockquote>
    <a :href="$site.base" aria-label="go to home">Take me home.</a>
  </div>
</template>

<script setup lang="ts">
const msgs = [
  "这里什么都没有",
  '为什么会跳到这个页面?',
  "404页面不存在",
  "看起来好像跳到了一个失效的链接"
]
function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)]
}
</script>
