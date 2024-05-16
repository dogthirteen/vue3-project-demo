<script setup>
import { defineComponent, reactive } from 'vue'
import PDF from 'pdf-vue3'
import pdfFile from './1220071637.pdf' //替换pdf路径
defineComponent({
  PDF
})

function handleFullScroll() {
  window.open(pdfFile)
}
</script>

<template>
  <button @click="handleFullScroll">全屏</button>
  <div style="height: 700px">
    <PDF :src="pdfFile" :showPageTooltip="false" pdfWidth="1000px" />
  </div>
  <!-- <PDF :src="BASE64" /> -->
  <!-- <PDF :src="Uint8Array" /> -->\
</template>
