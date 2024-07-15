<script setup lang="ts">
  import testImage from '@/assets/test.png'
  import Bilibili from '@/components/icon/Bilibili.vue'
  import Email from '@/components/icon/Email.vue'
  import QQ from '@/components/icon/QQ.vue'
  import Wechat from '@/components/icon/Wechat.vue'
  import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
  import { watchOnce } from '@vueuse/core'
  import { Link, Minus } from 'lucide-vue-next'

  import { ref } from 'vue'
  import '@/assets/font.css'
import { useRequest } from 'alova'
import { getYiyan } from '@/api/methods/tenapi'

  const { loading, error, data } = useRequest(getYiyan())

  const emblaMainApi = ref<CarouselApi>()
  const emblaThumbnailApi = ref<CarouselApi>()
  const selectedIndex = ref(0)

  function onSelect() {
    if (!emblaMainApi.value || !emblaThumbnailApi.value) return
    selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
    emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
  }

  function onThumbClick(index: number) {
    if (!emblaMainApi.value || !emblaThumbnailApi.value) return
    emblaMainApi.value.scrollTo(index)
  }

  watchOnce(emblaMainApi, (emblaMainApi) => {
    if (!emblaMainApi) return

    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  })
</script>
<template>
  <div class="bg-image flex items-center justify-center select-none text-white font-homory" >
    <div class="container p-20 grid grid-rows-2 grid-flow-col gap-x-32 gap-y-6">
      <div class="row-span-2 flex flex-col items-center justify-center gap-6">
        <div>
          <img :src="testImage" alt="test" class="max-w-96" />
        </div>
        <div class="backdrop-blur-sm w-full max-w-96 h-40 bg-black/30">红红火火恍恍惚惚哈哈哈哈哈哈</div>

        <div class="flex justify-between items-center gap-4">
          <QQ class="w-8 h-8" />
          <Wechat class="w-8 h-8" />
          <Bilibili class="w-8 h-8" />
          <Email class="w-8 h-8" />
        </div>
      </div>
      <div class="flex items-center justify-between gap-4">
        <div class="backdrop-blur-sm flex flex-col gap-10 max-w-80 items-center justify-center p-6 bg-black/30">
          <p v-if="loading">data</p>
          <template v-else>
            <p>{{ data?.hitokoto }}</p>

            <p>{{ data?.author }}</p>
          </template>
        </div>
        <div class="backdrop-blur-sm flex flex-col gap-10 max-w-80 items-center justify-center p-6 bg-black/30">
          <p>博客博客博客博客jlkjlkjlj博客博客博客博客博客博客博客博客客博客博客博客博客博客博客</p>
          <p>博客博客</p>
        </div>
      </div>

      <div class="w-full">
        <div class="flex py-4 gap-2">
          <Link />
          网站列表
        </div>

        <Carousel @init-api="(val) => (emblaMainApi = val)">
          <CarouselContent>
            <CarouselItem v-for="(_, index) in 2" :key="index">
              <div>
                <div class="grid grid-rows-2 grid-flow-col gap-6">
                  <div class="backdrop-blur-sm flex items-center justify-center h-24 bg-black/30">博客博客</div>
                  <div class="backdrop-blur-sm flex items-center justify-center h-24 bg-black/30">博客博客</div>
                  <div class="backdrop-blur-sm flex items-center justify-center h-24 bg-black/30">博客博客</div>
                  <div class="backdrop-blur-sm flex items-center justify-center h-24 bg-black/30">博客博客</div>
                  <div class="backdrop-blur-sm flex items-center justify-center h-24 bg-black/30">博客博客</div>
                  <div class="backdrop-blur-sm flex items-center justify-center h-24 bg-black/30">博客博客</div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <Carousel @init-api="(val) => (emblaThumbnailApi = val)">
          <CarouselContent class="ml-0 justify-center items-center">
            <CarouselItem
              v-for="(_, index) in 2"
              :key="index"
              class="cursor-pointer basis-10 pl-0"
              @click="onThumbClick(index)">
              <Minus class="w-10 h-10 text-black" :class="index === selectedIndex ? '' : 'opacity-30'" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<style>
  .bg-image {
    background-image: url('../assets/background.webp'); /* 替换为你的图片路径 */
    background-size: cover; /* 背景图片覆盖整个元素 */
    background-position: center; /* 背景图片居中显示 */
    height: 100vh; /* 示例高度，根据需要调整 */
  }
</style>