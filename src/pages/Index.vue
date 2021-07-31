<template>
  <div class="filter">
    <div class="lines">
      <div class="small-left" />
      <div class="small-right" />
      <div class="center">
        <div class="center2"></div>
      </div>
    </div>
    <div class="time">
      <span
        ><svg
          t="1626617916427"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2389"
          width="28"
          height="28"
        >
          <path
            d="M512 64C264.667 64 64 264.667 64 517.818 64 759.333 264.667 960 512 960s448-200.667 448-442.182C960 264.667 759.333 64 512 64z m206.77 585.846H477.537c-30.913 0-57.435-26.4-57.435-57.436V293.744c0-31.036 26.522-57.436 57.435-57.436 34.743 0 61.265 26.4 57.436 57.436v241.23H718.77c30.914-3.282 57.436 23.118 57.436 57.436 0 31.036-26.522 57.436-57.436 57.436z"
            fill="#ffffff"
            p-id="2390"
          ></path></svg
      ></span>
      {{ time }}
    </div>
    <div class="location">
      <span
        ><svg
          t="1626617654928"
          class="licon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1200"
          width="28"
          height="28"
        >
          <path
            d="M87.424 469.312a426.816 426.816 0 0 1 381.888-381.888V0h85.376v87.424a426.816 426.816 0 0 1 381.888 381.888H1024v85.376h-87.424a426.816 426.816 0 0 1-381.888 381.888V1024H469.312v-87.424a426.816 426.816 0 0 1-381.888-381.888H0V469.312h87.424z m424.576 384A341.312 341.312 0 1 0 512 170.688a341.312 341.312 0 0 0 0 682.624z m0-170.624a170.688 170.688 0 1 0 0-341.376 170.688 170.688 0 0 0 0 341.376z"
            fill="#ffffff"
            p-id="1201"
          ></path></svg
      ></span>
      ShenZhen·GuangDong·China
    </div>
    <div class="path">
      <span>
        <svg
          style="transform: translateY(7px)"
          t="1626617015723"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1205"
          width="32"
          height="32"
        >
          <path
            d="M957.44 376.832c-3.072-26.624-25.6-46.08-53.248-44.032-62.464 3.072-125.952 4.096-190.464 3.072 0-1.024-1.024-1.024-2.048-2.048l-112.64-112.64c-27.648-28.672-57.344-54.272-90.112-77.824-20.48-14.336-41.984-21.504-64.512-22.528-106.496-6.144-169.984-8.192-212.992-8.192-37.888 0-74.752 2.048-117.76 7.168-24.576 3.072-41.984 21.504-44.032 45.056C57.344 279.552 51.2 396.288 51.2 512c0 110.592 6.144 220.16 17.408 326.656 3.072 24.576 22.528 43.008 47.104 44.032C246.784 894.976 380.928 901.12 513.024 901.12s266.24-6.144 397.312-18.432c23.552-2.048 43.008-19.456 46.08-43.008 11.264-68.608 16.384-142.336 16.384-225.28 1.024-81.92-4.096-162.816-15.36-237.568z m-40.96 456.704c-1.024 5.12-4.096 8.192-9.216 8.192C776.192 854.016 644.096 860.16 513.024 860.16s-263.168-6.144-394.24-18.432c-6.144 0-9.216-5.12-9.216-8.192C98.304 729.088 92.16 620.544 92.16 512c0-113.664 6.144-229.376 18.432-344.064 0-4.096 4.096-8.192 8.192-9.216 40.96-5.12 76.8-7.168 112.64-7.168 41.984 0 105.472 2.048 210.944 8.192 14.336 1.024 29.696 6.144 43.008 15.36 30.72 21.504 58.368 46.08 83.968 72.704l83.968 83.968-52.224-3.072c-111.616-7.168-224.256-7.168-335.872 0-11.264 1.024-19.456 10.24-19.456 21.504 1.024 11.264 10.24 19.456 21.504 19.456 109.568-7.168 220.16-7.168 329.728 0 105.472 6.144 208.896 7.168 307.2 2.048 5.12 0 9.216 3.072 10.24 9.216 10.24 73.728 16.384 152.576 16.384 232.448 2.048 81.92-3.072 153.6-14.336 220.16z"
            p-id="1206"
            fill="#ffffff"
          ></path>
        </svg>
      </span>
      /User/teddybai/vlog/SatJul17-007
    </div>
    <div class="sync-setting">
      <span
        ><svg
          t="1626618045895"
          class="sync-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3310"
          width="28"
          height="28"
        >
          <path
            d="M271.914667 837.418667C182.314667 756.522667 128 637.653333 128 508.714667 128 304.896 263.338667 129.834667 450.986667 85.333333L469.333333 170.026667c-150.016 35.584-258.304 175.658667-258.304 338.688 0 106.069333 45.866667 203.562667 121.258667 268.373333L426.666667 682.666667v256H170.666667l101.248-101.248zM727.082667 168.917333C831.530667 249.045333 896 377.088 896 517.077333c0 202.922667-135.338667 377.258667-322.986667 421.589334L554.666667 854.357333c150.016-35.456 258.304-174.933333 258.304-337.322666 0-117.12-56.405333-223.786667-146.901334-287.146667L554.666667 341.333333V85.333333h256l-83.584 83.584z"
            p-id="3311"
            fill="#ffffff"
          ></path></svg
      ></span>
      Synchronizing...IP:10.030.080
    </div>
    <div class="status">
      <span
        ><svg
          t="1626619123550"
          class="sicon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4276"
          width="32"
          height="32"
        >
          <path
            d="M512.006827 3.413333C792.855893 3.413333 1020.586667 231.10656 1020.586667 511.993173 1020.586667 792.8832 792.855893 1020.586667 512.006827 1020.586667S3.413333 792.85248 3.413333 511.993173 231.120213 3.413333 512.006827 3.413333z"
            p-id="4277"
            fill="#1afa29"
          ></path></svg
      ></span>
      REC
    </div>
    <div class="prompt" style="transition: 150ms">
      <div>Power On</div>
      <div>Camera connected</div>
      <div>Microphone connected</div>
      <div>Booting up......</div>
      <div class="anchor"></div>
      <div class="target"></div>
    </div>
    <!-- <div class="sound">typing sound at 01:08:29/01:12:21</div> -->
  </div>
  <video src="../assets/selfIntro.mp4" autoplay muted></video>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

let time = ref<string>(Date())

setInterval(() => {
  time.value = Date()
}, 1000)
const speed = 70 // unit: ms

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
  writeLine('connecting to remote host: 10.030.080')
    .then(() => {
      newLine()
      return writeLine('schema: hot standby')
    })
    .then(() => {
      newLine()
      return writeLine('Synchronization start')
    })
    .then(() => {
      newLine()
      return writeLine('Error: speech recognition failed, missing file: AI_core.bin')
    })
    .then(() => {
      newLine()
      return writeLine('position located')
    })
    .then(() => {
      newLine()
      return writeLine('latitude and longtitude: 116.413384 39.910925')
    })
    .then(() => {
      newLine()
      return writeLine('location name: shenzhen guangdong')
    })
    .then(() => {
      newLine()
      return writeLine('stage: initialize slide show ETA: 100ms')
    })
})
</script>

<style scoped>
.prompt {
  width: 320px;
  height: 4em;
  overflow: hidden;
  border-bottom: solid 2px white;
  box-shadow: 0 0 black;
  color: white;
  display: flex;
  position: absolute;
  top: 200px;
  right: 108px;
  flex-direction: column;
  justify-content: flex-end;

  font-family: sans-serif;
}

.filter {
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
}
.lines {
  z-index: -1;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
video {
  width: 1200px;
}
.center {
  position: relative;
  width: 85%;
  height: 90%;
  border-left: white 2px dotted;
  border-right: white 2px dotted;
}
.center2 {
  position: relative;
  width: 100%;
  height: 100%;
  border-left: white 2px dotted;
  border-right: white 2px dotted;
}
.small-left {
  transform: translateY(50%);
  position: absolute;
  width: 25px;
  left: 66px;
  height: 0px;
  border: dotted 2px white;
}
.small-right {
  transform: translateY(50%);
  position: absolute;
  width: 25px;
  right: 68px;
  height: 0;
  border: dotted 2px white;
}
.time {
  position: absolute;
  bottom: 0;
  right: 59px;
  font-size: 23px;
  color: white;
  font-family: sans-serif;
  text-shadow: 2px -1px 12px black;
}
.location {
  position: absolute;
  bottom: 0;
  left: 65px;
  font-size: 23px;
  color: white;
  font-family: sans-serif;
  text-shadow: 2px -1px 12px black;
}
.path {
  position: absolute;
  top: 20px;
  font-size: 21px;
  color: white;
  left: 116px;
  font-family: sans-serif;
  text-shadow: 2px -1px 12px black;
}
.sync-setting {
  position: absolute;
  top: 66px;
  font-size: 21px;
  color: white;
  left: 116px;
  font-family: sans-serif;
  text-shadow: 2px -1px 12px black;
}
.sync-icon {
  animation: turn 5s linear infinite;
}
@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.licon {
  animation: spark 1s ease-in-out infinite;
}
@keyframes spark {
  10% {
    opacity: 0;
  }

  90% {
    opacity: 1;
  }
}
.status {
  position: absolute;
  right: 190px;
  top: 60px;
  font-size: 2em;
  color: white;
  text-shadow: 0 0 10px black;
}
.sicon {
  margin-right: 10px;
  transform: translateY(5px);
  animation: spark 1.5s ease-in-out infinite;
}
</style>
