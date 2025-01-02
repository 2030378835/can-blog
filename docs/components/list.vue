<template>
  <div style="width: 1230;">
    <span style="margin: 20px; font-size: 20px;">文档支持的题目</span>
    <div class="list">
      <Card 
        :hoverable="true"
        v-for="item in data" 
        :key="item.title" 
        style="
          background: var(--vp-c-bg-soft); 
          border: none;
          width: 300px;
          cursor: pointer;
        "
        @click="() => goToPage(item.link)"
      >
        <div class="title">
          <img v-if="item.icon" :src="item.icon" :alt="item.title">
          <span v-else>{{ item.moj }}</span>
          {{ item.title  }}
        </div>
        <div class="des">{{ item.des }}</div>
      </Card>
    </div>  
  </div>

</template>

<script setup>
import { onMounted } from 'vue'
import { useSidebar } from 'vitepress/theme'
import { Card } from 'ant-design-vue'
// import { reRenderSidebar } from '../router/index'

const sidebar = useSidebar()
const data = [
  {
    title: 'React',
    icon: '/icon/react.svg',
    des: '这里是react相关的面试题目',
    link: '/pages/docs/react/01'
  },
  {
    title: 'Vue',
    icon: '/icon/vue.svg',
    des: '这里是vue相关的面试题目',
    link: '/pages/docs/vue/01'  
  },
  {
    title: 'JavaScript',
    icon: '/icon/js.svg',
    des: '这里是JavaScript相关的面试题目',
    link: '/pages/docs/javascript/01'
  },
  {
    title: '其他',
    moj: '📖',
    des: '这里是其他的面试题目',
    link: '/pages/docs/others/01'
  }
]

onMounted(() => {
  console.log(sidebar.sidebarGroups)
})

const goToPage = (link) => {
  window.open(link, '_self')
}
</script>

<style scoped lang="scss"">
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  .title {
    display: flex;
    align-items: end;
    color: var(--vp-c-text-1);
    img {
      width: 36px;
      height: 36px;
      margin-right: 10px;
    }
    span {
      font-size: 36px;
      padding: 0px;
      height: 36px;
      line-height: 36px;
      margin-right: 10px;
    }
    font-size: 20px;
    font-weight: bold;
  }
  .des {
    font-size: 14px;
    color: var(--vp-c-text-2);
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
  }
}
</style>