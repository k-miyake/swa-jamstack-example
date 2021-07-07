<template>
  <div class="container">
    <h1 class="title">{{ post.fields.title }}</h1>
    <div class="content" v-html="$md.render(post.fields.body)"></div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Entry } from "contentful";
import { IBlogPostFields } from "@/contentful/generated/types";
import { createClient } from "@/plugins/contentful.js";

const client = createClient();
export default Vue.extend({
  async asyncData({ params }) {
    const entry = await client.getEntry(params.id);
    return {
      post: entry
    };
  },
  data() {
    return {
      post: {} as Entry<IBlogPostFields>
    };
  }
});
</script>
