<template>
  <button class="custom-button">
    <span class="button-text">TE DAMOS</span>
    <span class="plus-sign">+</span>
    <span class="small-text">CON UNA CUENTA</span>
  </button>
</template>

<style scoped>
.custom-button {
  background: linear-gradient(to bottom, #8cc63f, #4c7b1d);
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-text {
  font-size: 18px;
}

.plus-sign {
  color: yellow;
  font-size: 24px;
  margin: 5px 0;
}

.small-text {
  font-size: 12px;
}
</style>
