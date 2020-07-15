<template>
  <div class="container">
    <h1 class="title">{{ post.fields.title }}</h1>
    <div class="content" v-html="$md.render(post.fields.body)"></div>
  </div>
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