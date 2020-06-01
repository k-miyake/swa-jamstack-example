<template>
  <section class="container">
    <h1>{{ post.fields.title }}</h1>
    <div>
      {{ post.fields.description }}
    </div>
  </section>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  async asyncData({ params, payload }) {
    const entry = await client.getEntry(params.id)
    return {
      post: entry
    }
  }
}
</script>