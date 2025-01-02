<template>
  {{ currentTime }}
  <span @click="up">移动</span>
  <div ref="lyricsRef" class="lyrics-wrapper">
    <div class="lyrics-container">
      <p
        v-for="(line, index) in lyricsArray"
        :key="index"
        :class="{ 'active': isHighlighted(index) }"
        class="lyric-line"
      >{{ line }}</p>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, watch, defineProps, nextTick } from 'vue';
  const props = defineProps(['currentTime1'])

  // 获取歌词区域DOM引用
  const lyricsRef = ref(null);
  const lyricsObj = {"0": "兰亭序 - 周杰伦 (Jay Chou)",
  "7": "词：方文山",
  "13": "曲：周杰伦",
  "20": "编曲：钟兴民",
  "26": "兰亭临帖 行书如行云流水",
  "32": "月下门推 心细如你脚步碎",
  "39": "忙不迭 千年碑易拓",
  "43": "却难拓你的美",
  "46": "真迹绝 真心能给谁",
  "51": "牧笛横吹 黄酒小菜又几碟",
  "58": "夕阳余晖 如你的羞怯似醉",
  "64": "摹本易写",
  "66": "而墨香不退与你同留余味",
  "71": "一行朱砂 到底圈了谁",
  "77": "无关风月 我题序等你回",
  "83": "悬笔一绝 那岸边浪千叠",
  "89": "情字何解 怎落笔都不对",
  "95": "而我独缺 你一生的了解",
  "103": "无关风月 我题序等你回",
  "107": "悬笔一绝 那岸边浪千叠",
  "110": "情字何解 怎落笔都不对",
  "113": "而我独缺 你一生的了解",
  "116": "无关风月 我题序等你回",
  "120": "悬笔一绝 那岸边浪千叠",
  "123": "情字何解 怎落笔都不对",
  "126": "独缺 你一生了解",
  "128": "弹指岁月 倾城顷刻间湮灭",
  "134": "青石板街 回眸一笑你婉约",
  "140": "恨了没",
  "142": "你摇头轻叹谁让你蹙着眉",
  "147": "而深闺 徒留胭脂味",
  "153": "人雁南飞 转身一瞥你噙泪",
  "159": "掬一把月 手揽回忆怎么睡",
  "165": "又怎么会",
  "167": "心事密缝绣花鞋针针怨怼",
  "172": "若花怨蝶 你会怨着谁",
  "178": "无关风月 我题序等你回",
  "184": "悬笔一绝 那岸边浪千叠",
  "190": "情字何解 怎落笔都不对",
  "197": "而我独缺 你一生的了解",
  "203": "无关风月 我题序等你回",
  "211": "手书无愧 无惧人间是非",
  "217": "雨打蕉叶 又潇潇了几夜",
  "223": "我等春雷 来提醒你爱谁"};
  // 存储歌词文本内容的数组
  const lyricsArray = [];
  // 记录组件渲染开始时间
  const currentTime = computed(() => Math.floor(props.currentTime1));
  // 记录高亮次数
  const highlightCount = ref(0);

  // 提取歌词文本内容到数组中（过滤掉非歌词的信息行）
  for (const key in lyricsObj) {
    if (key >= 0) {
      lyricsArray.push(lyricsObj[key]);
    }
  }
  // 判断歌词行是否高亮的函数
  const isHighlighted = (index) => {
    const lineStartTime = getLineStartTime(index);
    return currentTime.value >= lineStartTime && currentTime.value < getNextLineStartTime(index);
  };

  // 获取某一行歌词开始时间的函数（这里简单按照歌词顺序平均分配时间间隔示例，实际需按歌曲真实时间）
  const getLineStartTime = (index) => {
    return Object.keys(lyricsObj)[index]
  };

  // 获取下一行歌词开始时间的函数
  const getNextLineStartTime = (index) => {
    return getLineStartTime(index + 1);
  };

  const up = () => {
    const moveStep = 30; // 每次向上移动的像素值，可根据需求调整
    if (lyricsRef.value && highlightCount.value >= 6) {
      // lyricsRef.value.style.height = moveStep * highlightCount.value;
      // console.log(lyricsRef.value.style.height)
      lyricsRef.value.scrollTop = lyricsRef.value.scrollTop + moveStep;
      // lyricsRef.value.style.transform = `translateY(-${moveStep*(highlightCount.value - 5)}px)`;

    }
  }

  watch(currentTime, (newVal) => {
    if (lyricsObj[newVal]) {
      // 向上移动歌词
      highlightCount.value++;
      nextTick(() => {
        // 向上移动歌词，放在nextTick回调中确保DOM更新后操作
        up()
      });
    }
  });
</script>

<style scoped>
.lyrics-wrapper {
  height: 300px; /* 根据实际需求调整高度 */
  overflow: scroll;
  transition:  300ms;
  scroll-behavior: smooth; 
  /* transition: scroll-top 0.5s ease; */
}
.lyric-line {
  /* margin: 5px 0; */
  transition:  300ms;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-3);

}
.lyrics-container {
  transition: 300ms;
}
.active {
  /* background-color: yellow; 高亮的背景颜色，可按需更改 */
  font-size: large;
  color: var(--vp-c-text-1);
}
</style>