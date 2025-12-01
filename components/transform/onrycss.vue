<template>
   <h1 class="wave-text">Dynamic Gradient</h1>
</template>
<script setup>
const message = 'Hello'
</script>
<style scoped>
.wave-text {
  font-size: 5rem;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(to bottom, #ff4d4d, #4d94ff);
  -webkit-background-clip: text;
  background-clip: text;
  position: relative;
  display: inline-block;
  overflow: hidden;
}

/* 波の境界をマスクで作る */
.wave-text::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 100%;
  background: repeating-radial-gradient(
    circle at 50% 100%,
    transparent 0,
    transparent 10px,
    black 11px,
    black 20px
  );
  animation: wave 6s infinite linear;
  mask-image: linear-gradient(to bottom, black 50%, transparent 50%);
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 50%);
  mix-blend-mode: multiply;
}

.wave-text {
  width: 100%;
  height: 200px;
}

/* 波を左右に動かすアニメーション */
#wave-path {
  animation: waveMove 4s infinite linear;
}

@keyframes waveMove {
  from { transform: translateX(0); }
  to   { transform: translateX(-100px); }
}


</style>