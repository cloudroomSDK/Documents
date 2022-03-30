---
sidebarDepth: 1
pageClass: pageAPI
---

# API

<script>
import {
    APIAll,
    modulesData
} from '@json/api';
import toAnthor from "@mixins/toAnthor";
export default {
    name: 'API',
    // mixins: [toAnthor(200)],
    data () {
		return {
			APIAll,
            modulesData
        }
    },
    methods: {
        isArray (val) {
            return val instanceof Array
        }
    }
}
</script>

<api-mains :data="APIAll"></api-mains>

<h2 id="接口描述">接口描述</h2>
<!-- 展示接口描述全部接口 -->
<template v-for="(module, index) in modulesData" >
    <h3 :id="module.id" :key="index">{{module.name}}</h3>
    <api-table class="w-800 mt-10 " methodLabel="xxx" :data="module.data"></api-table>
</template>

<h2 id="接口详情" class="mb-10">接口详情</h2>

<div v-for="(detail, pid) in modulesData" :class="{'mt_70':pid==0}">
    <div v-for="(detl,index) in detail.data" class="mb_55">
        <template v-if="detl.detail">
            <h4 :id="detl.id || detl.interface" class="mb-0 pt-85 fz-18 ">{{detl.detail.content}}</h4>
            <ul class="mt-5">
                <li>
                    <strong>描述：</strong>
                    <span v-html="detl.description"></span>
                </li>
                <li v-if="detl.detail.returnVal">
                    <strong>返回值：</strong>
                    <vue-markdown class="inline-block vue-md-returnVal">{{detl.detail.returnVal}}</vue-markdown>
                    <param-table :data="detl.detail.retrunData" type="returnData" v-if="detl.detail.retrunData"></param-table>
                </li>
                <li v-if="detl.detail.callback">
                    <strong>回调：</strong>
                    <vue-markdown class="inline-block vue-md-callback">{{detl.detail.callback}}</vue-markdown>
                </li>
                <li v-if="detl.detail.data">
                    <strong>参数：</strong>
                    <param-table :data="detl.detail.data" :type="detl.detail.type" v-if="detl.detail.data"></param-table>
                </li>
                <li v-if="detl.detail.callbackParam">
                    <strong>回调参数：</strong>
                    <param-table :data="detl.detail.callbackParam" :type="detl.detail.type" v-if="detl.detail.callbackParam"></param-table>
                </li>
                <li v-if="detl.detail.resParam">
                    <strong>resObject，参数如下：</strong>
                    <param-table :data="detl.detail.resParam" :type="detl.detail.type" v-if="detl.detail.resParam"></param-table>
                </li>
                <li v-if="detl.detail.errParam">
                    <strong>errObject，参数如下：</strong>
                    <param-table :data="detl.detail.errParam" :type="detl.detail.type" v-if="detl.detail.errParam"></param-table>
                </li>
            </ul>
            <div v-if="detl.detail.example">
                <strong class="mb-5 mt-10 inline-block">示例代码：</strong>
                <vue-markdown class="vue-md-example mb-10">{{detl.detail.example}}</vue-markdown>
            </div>
            <div v-if="detl.detail.attent">
                <vue-markdown class="vue-md-attent mt-5 mb-5">{{detl.detail.attent}}</vue-markdown>
            </div>
            <blockquote v-if="detl.detail.sub">
                <div v-if="isArray(detl.detail.sub)">
                    <p v-for="sb in detl.detail.sub" v-html="sb"></p>
                </div>
                <div v-else>
                    <p v-html="detl.detail.sub"></p>
                </div>
            </blockquote>
        </template>
    </div>
</div>