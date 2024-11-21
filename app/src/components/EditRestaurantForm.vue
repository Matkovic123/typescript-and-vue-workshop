<script setup lang="ts">
import { restaurantStatusList } from '@/constants'
import { useRestaurantStore } from '@/stores/RestaurantStore'
import type { Restaurant } from '@/types'
import { onMounted, ref } from 'vue'

type PropsShape = {
  restaurant: Restaurant
}
const props = defineProps<PropsShape>()

const store = useRestaurantStore()

const newRestaurant = { ...props.restaurant }
const newRestaurantRef = ref(newRestaurant)

const emit = defineEmits<{
  (e: 'edit-restaurant', restaurant: Restaurant): void
  (e: 'cancel-edit-restaurant'): void
}>()

const elNameInput = ref<HTMLInputElement | null>(null)
const editRestaurant = () => {
  store.editRestaurant(newRestaurantRef.value)
  emit('cancel-edit-restaurant')
}

const cancelEditRestaurant = () => {
  emit('cancel-edit-restaurant')
}

onMounted(() => {
  elNameInput.value?.focus()
})
</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Name: {{ newRestaurantRef.name }}</label>
        <div class="control">
          <input
            v-model="newRestaurantRef.name"
            type="text"
            class="input is-large"
            placeholder="Beignet and the Jets"
            required
            ref="elNameInput"
          />
        </div>
      </div>
      <div class="field">
        <label for="website" class="label">Website</label>
        <div class="control">
          <input v-model="newRestaurantRef.website" type="text" class="input" placeholder="www.beignetandthejets.com" />
        </div>
      </div>
      <div class="field mb-5">
        <label for="status" class="label">Status</label>
        <div class="select">
          <select v-model="newRestaurantRef.status" id="status">
            <option v-for="status in restaurantStatusList" :value="status" :key="`option-${status}`">
              {{ status }}
            </option>
          </select>
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button @click="editRestaurant" class="button is-success">Save</button>
          <button @click="cancelEditRestaurant" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>
