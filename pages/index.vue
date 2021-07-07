<template>
  <section class="container">
    <h1 class="title">Articles</h1>
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
<script lang="ts">
import Vue from "vue";
import { Entry } from "contentful";
import { IBlogPostFields } from "@/contentful/generated/types";
import { createClient } from "@/plugins/contentful.js";

const client = createClient();
export default Vue.extend({
  async asyncData() {
    const entries = await client.getEntries({
      content_type: "blogPost"
    });
    return {
      posts: entries.items
    };
  },
  data() {
    return {
      posts: [] as Entry<IBlogPostFields>[]
    };
  }
});
</script>
