<template>
  <v-row align="center" justify="center">
    <div class="inline-content">
      <template v-for="(icon, index) in icons" :key="index">
        <v-col cols="2">
          <v-btn density="comfortable" variant="text" :href="icon.link">
            <v-img :src="getIconPath(icon.name)" :height="icon.height" :width="icon.width"></v-img>
          </v-btn>
        </v-col>
      </template>
    </div>
  </v-row>
</template>

<script setup>
import { ref, computed } from 'vue';

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

const iconDimensions = computed(() => {
  return props.TypeIcons === 'White' || props.TypeIcons === 'GreenLarge' ? { height: '48px', width: '48px' } : { height: '24px', width: '24px' };
});

icons.value = icons.value.map(icon => ({
  ...icon,
  height: iconDimensions.value.height,
  width: iconDimensions.value.width
}));
</script>

<style scoped>
.inline-content {
  display: flex;
  align-items: center;
}
</style>
