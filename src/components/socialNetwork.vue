<template>
  <v-row align="center" justify="center">
    <template v-for="(icon, index) in icons" :key="index">
      <v-col cols="3">
        <a :href="icon.link" target="_blank">
          <img class="icon" :src="getIconPath(icon.name)" :class="icon.class">
        </a>
      </v-col>
    </template>
  </v-row>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps(['TypeIcons']);

const linkFaceBook = ref('https://www.facebook.com/CajaMorelia');
const linkYoutube = ref('https://www.youtube.com/channel/UCB-nXchsFrP2NzCfdkNBSjw');
const linkX = ref('https://x.com/Caja_Morelia');

const icons = ref([
  { name: 'facebook', link: linkFaceBook.value },
  { name: 'youtube', link: linkYoutube.value },
  { name: 'x', link: linkX.value },
]);

const getIconPath = (iconName) => {
  let basePath = '/src/assets/images/SocialMedia/';
  let suffix = '';

  if (props.TypeIcons === 'Green' || props.TypeIcons === 'GreenLarge') {
    suffix = 'Cmv';
  } else if (props.TypeIcons === 'Dark') {
    suffix = 'CmvDark';
  } else if (props.TypeIcons === 'White') {
    suffix = 'CmvWhite';
  }

  return `${basePath}${iconName}${suffix}.svg`;
};

const iconClass = computed(() => {
  return props.TypeIcons === 'White' || props.TypeIcons === 'GreenLarge' ? 'icon-large' : 'icon-small';
});

watch(
  () => props.TypeIcons,
  () => {
    icons.value = icons.value.map(icon => ({
      ...icon,
      class: iconClass.value
    }));
  },
  { immediate: true }
);
</script>

<style scoped>
.inline-content {
  display: flex;
  align-items: center;
}

.icon {
  display: block;
}

.icon-small {
  width: 24px;
  height: 24px;
}

.icon-large {
  width: 48px;
  height: 48px;
}
</style>
