<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu'
  import { Input } from '@/components/ui/input'
  import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from '@/components/ui/navigation-menu'
  import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
  import { CircleUser, Menu, Search } from 'lucide-vue-next'
  import Logo from '@/components/icon/Logo.vue'
</script>

<template>
  <header class="sticky z-40 top-0 bg-background/60 backdrop-blur-lg">
    <div class="container flex h-14 items-center">
      <NavigationMenu
        class="hidden font-medium md:flex md:flex-row md:items-center md:gap-5  lg:gap-6">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Logo class="w-10 h-10" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink :class="navigationMenuTriggerStyle()" asChild>
              <RouterLink to="./about">About</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink :class="navigationMenuTriggerStyle()" asChild>
              <RouterLink to="./about">About</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger as-child>
          <Button variant="outline" size="icon" class="shrink-0 md:hidden">
            <Menu class="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav class="grid gap-6 text-lg font-medium py-5">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              class="rounded-md object-cover w-full h-full" />
            <RouterLink to="./about" class="text-primary">About</RouterLink>
            <RouterLink to="./about" class="text-primary">About</RouterLink>
            <RouterLink to="./about" class="text-primary">About</RouterLink>
            <RouterLink to="./about" class="text-primary">About</RouterLink>
            <RouterLink to="./about" class="text-primary">About</RouterLink>
            <RouterLink to="./about" class="text-primary">About</RouterLink>
          </nav>
        </SheetContent>
      </Sheet>
      <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form class="ml-auto flex-1 sm:flex-initial">
          <div class="relative">
            <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </header>
</template>