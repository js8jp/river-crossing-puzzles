<script lang="ts" setup>
import { useAppearance, useCast, useCastEmotion } from '@/composables';
import { useSceneStore } from '@/stores/scene';
import type { Cast } from '@/types';
const props = defineProps<{
  state: Cast
}>()
const { state: cast } = toRefs(props)
const { state: sceneState } = storeToRefs(useSceneStore())
const { gridSize } = useAppearance()
const { model, content, color } = useCastEmotion(sceneState, cast)
const { isRower } = useCast()
const offset = computed(() => gridSize.value * 0.1 * (isRower(cast.value) ? 1 : 2))
</script>

<template>
  <v-badge
    :model-value="model"
    :content="content"
    :color="color"
    :offset-x="offset"
    :offset-y="offset"
  >
    <slot />
  </v-badge>
</template>
