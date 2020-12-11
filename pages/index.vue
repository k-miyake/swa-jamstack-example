<template>
  <section class="container">
    <h1 class="title">Posts</h1>
    <div class="content">
      <ul>
        <li v-for="(post, index) in posts" :key="index" class="links">
          <nuxt-link :to="`/posts/${post.sys.id}`">
            {{ post.fields.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  async asyncData({ params }) {
    const entries = await client.getEntries({
      content_type: "blogPost",
    });
    return {
      posts: entries.items,
    };
  },
};
</script>
