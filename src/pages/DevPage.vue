<template>
  <div class="prompt">
    <div>dsfdf</div>
    <div>fsdfs</div>
    <div>5678hbnjkm,</div>
    <div>5678hbnjkm,</div>
    <div>5678hbnjkm,</div>
    <div>5678hbnjkm,</div>
    <div class="anchor"></div>
    <div class="target"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'

const speed = 200 // unit: ms

const writeLine = function (msg: string) {
  return new Promise((resolve, reject) => {
    let i = 0
    let el = document.getElementsByClassName('target')[0]

    let typing = function () {
      if (i < msg.length) {
        el.innerHTML += msg.charAt(i)
        i++
        setTimeout(typing, speed)
      } else {
        resolve(1)
      }
    }
    typing()
  })
}

const newLine = function () {
  let el = document.getElementsByClassName('prompt')[0]
  let target = document.getElementsByClassName('target')[0]
  let content = target.innerHTML

  let anchor = document.getElementsByClassName('anchor')[0]
  let newone = document.createElement('div')
  newone.innerHTML = content

  el.insertBefore(newone, anchor)
  target.innerHTML = ''
}

onMounted(() => {
  writeLine('ilovyeu')
    .then(() => {
      newLine()
      return writeLine('xiaoming')
    })
    .then(() => {
      newLine()
      return writeLine('tingtian')
    })
})
</script>
<style>
.prompt {
  width: 500px;
  height: 3em;

  overflow: hidden;
  border: solid 1px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
