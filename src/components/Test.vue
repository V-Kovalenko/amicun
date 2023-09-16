<template>
  <div class="progress-bar" :style="`background: linear-gradient(to right, #00ff00 ${progressPercentage}%, #ffffff ${progressPercentage}%, #ffffff 100%);`">
    <div class="progress-info">
      <span>1111Passed</span>
      <span>2222 Remaining</span>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

const totalNumberOfTests = reactive({
  total: 500,
  passedTests: 492,
});

const progressPercentage = computed(() => (totalNumberOfTests.passedTests / totalNumberOfTests.total) * 100);
</script>

<style>
.progress-bar {
  width: 100%;
  height: 20px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
</style>