<script setup lang="ts">
  import { Card, CardContent } from '@/components/ui/card'
  import {
    Pagination,
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
  } from '@/components/ui/pagination'

  import { Button } from '@/components/ui/button'
</script>
<template>
  <div>
    <div class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-5">
      <nav class="hidden md:grid gap-4 text-sm text-muted-foreground">
        <a href="#" class="font-semibold text-primary">General</a>
        <a href="#">Security</a>
        <a href="#">Integrations</a>
        <a href="#">Support</a>
        <a href="#">Organizations</a>
        <a href="#">Advanced</a>
      </nav>
      <div class="grid gap-6 md:col-span-4">
        <Card>
          <CardContent class="p-0">
            <div class="flex">
              <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.mH9YLFEL5YdVxJM82mjVJQAAAA?rs=1&pid=ImgDetMain"
                alt="dsa"
                class="rounded-l-sm w-5/12" />
              <div class="w-7/12">adsf</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="p-0">
            <div class="flex">
              <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.mH9YLFEL5YdVxJM82mjVJQAAAA?rs=1&pid=ImgDetMain"
                alt="dsa"
                class="rounded-l-sm w-5/12" />
              <div class="w-7/12">adsf</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="p-0">
            <div class="flex">
              <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.mH9YLFEL5YdVxJM82mjVJQAAAA?rs=1&pid=ImgDetMain"
                alt="dsa"
                class="rounded-l-sm w-5/12" />
              <div class="w-7/12">adsf</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="p-0">
            <div class="flex">
              <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.mH9YLFEL5YdVxJM82mjVJQAAAA?rs=1&pid=ImgDetMain"
                alt="dsa"
                class="rounded-l-sm w-5/12" />
              <div class="w-7/12">adsf</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="p-0">
            <div class="flex">
              <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.mH9YLFEL5YdVxJM82mjVJQAAAA?rs=1&pid=ImgDetMain"
                alt="dsa"
                class="rounded-l-sm w-5/12" />
              <div class="w-7/12">adsf</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="p-0">
            <div class="flex">
              <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.mH9YLFEL5YdVxJM82mjVJQAAAA?rs=1&pid=ImgDetMain"
                alt="dsa"
                class="rounded-l-sm w-5/12" />
              <div class="w-7/12">adsf</div>
            </div>
          </CardContent>
        </Card>
        <Pagination v-slot="{ page }" :total="100" :sibling-count="1" show-edges :default-page="1">
          <PaginationList v-slot="{ items }" class="flex items-center justify-center gap-1">
            <PaginationFirst />
            <PaginationPrev />
            <template v-for="(item, index) in items">
              <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
                  {{ item.value }}
                </Button>
              </PaginationListItem>
              <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            <PaginationNext />
            <PaginationLast />
          </PaginationList>
        </Pagination>
      </div>
    </div>
  </div>
</template>