<template>
  <div class="spin"></div>
</template>

<style>
.spin {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #7c68eece;
  animation: spin 1s ease infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotateZ(360deg);
  }
}
</style>
