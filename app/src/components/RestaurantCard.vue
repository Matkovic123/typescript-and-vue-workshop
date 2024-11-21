<script setup lang="ts">
import { computed, defineProps, defineEmits, ref } from 'vue'
import type { Restaurant } from '@/types'
import EditRestaurantForm from '@/components/EditRestaurantForm.vue'

type PropTypes = {
  restaurant: Restaurant
}

const props = defineProps<PropTypes>()

const emits = defineEmits<{
  (e: 'delete-restaurant', restaurant: Restaurant): void
  (e: 'edit-restaurant', restaurant: Restaurant): void
}>()

const statusColor = computed(() => {
  switch (props.restaurant.status) {
    case 'Want to Try':
      return 'is-warning'
    case 'Recommended':
      return 'is-success'
    case 'Do Not Recommend':
      return 'is-danger'
    default:
      return ''
  }
})

const showEditForm = ref(false)

const hideForm = () => {
  showEditForm.value = false
}

const deleteRestaurant = () => {
  emits('delete-restaurant', props.restaurant)
}

const editRestaurant = () => {
  showEditForm.value = true
}
</script>

<template>
  <article class="box">
    <div class="media">
      <aside class="media-left">
        <img src="https://placehold.jp/150x150.png" alt="" />
      </aside>
      <div class="media-content">
        <p class="title is-4 is-spaced mb-1">
          {{ restaurant.name }}
        </p>
        <p class="subtitle mb-2">
          <span class="tag" :class="statusColor">{{ restaurant.status }}</span>
        </p>
        <div class="content mb-2">
          {{ restaurant.address }}
        </div>
        <br />
        <div class="columns">
          <div class="column is-1">
            <button @click="deleteRestaurant" class="button is-small is-danger is-light">Delete</button>
          </div>
          <div class="column">
            <button @click="editRestaurant" class="button is-small is-info is-light">Edit</button>
            <EditRestaurantForm
              :restaurant="restaurant"
              v-if="showEditForm"
              @edit-restaurant="editRestaurant"
              @cancel-edit-restaurant="hideForm"
            />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style></style>
