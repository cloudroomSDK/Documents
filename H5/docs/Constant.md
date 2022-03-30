---
pageClass: pageChangLiangDingYi
---

# 常量定义

<script>
import {
  CONSTDEF
} from '@json/constDef';
import toAnthor from "@mixins/toAnthor";

export default {
    name: 'ConstDef',
    // mixins: [toAnthor(500)],
    data () {
      return {
        CONSTDEF
      }
    },
    methods: {}
}

// console.log(CONSTDEF)
</script>
<template v-for="(item, index) in CONSTDEF">
  <h3 :id="item.content" :key="index" class="mt-0 pt-60">{{item.type}}</h3>
  <p><i>{{item.content}}</i></p>
  <const-table :data="item.detail" type="typeDef" style="margin-bottom:-20px"></const-table>
</template>
