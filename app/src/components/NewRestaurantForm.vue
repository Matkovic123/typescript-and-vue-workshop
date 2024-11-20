<script setup lang="ts">
import { reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { restaurantStatusList } from '@/constants'
import { Restaurant } from '@/types'

type State = {
  newRestaurant: Restaurant
}

const emits = defineEmits<{
  (e: 'add-new-restaurant', restaurant: Restaurant): void
  (e: 'cancel-new-restaurant'): void
}>()
const state = reactive<State>({
  newRestaurant: {
    id: uuidv4(),
    name: '',
    address: '',
    website: '',
    status: 'Want to Try',
  },
})

const addRestaurant = () => {
  emits('add-new-restaurant', state.newRestaurant)
}
const cancelRestaurant = () => {
  emits('cancel-new-restaurant')
}
</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Name</label>
        <div class="control">
          <input
            :value="state.newRestaurant.name"
            @keyup.space="updateName"
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
          <input
            v-model="state.newRestaurant.website"
            type="text"
            class="input"
            placeholder="www.beignetandthejets.com"
          />
        </div>
      </div>
      <div class="field mb-5">
        <label for="status" class="label">Status</label>
        <div class="select">
          <select v-model="state.newRestaurant.status" id="status">
            <option v-for="status in restaurantStatusList" :value="status" :key="`option-${status}`">
              {{ status }}
            </option>
          </select>
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button @click="addRestaurant" class="button is-success">Create</button>
          <button @click="cancelRestaurant" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>
