<template>
    <header class="fixed z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <button type="button" @click="sideBar"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                    <router-link to="/" class="flex ms-2 md:me-24">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                        <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ">Flowbite</span>
                    </router-link>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center ms-3">
                        <button id="theme-toggle" type="button" @click="darkThemeChange"
                            class="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-full text-sm p-2.5">
                            <svg v-if="darkTheme" id="theme-toggle-dark-icon" class="w-5 h-5" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg v-if="!darkTheme" id="theme-toggle-light-icon" class="w-5 h-5" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <Menu as="div" class="relative ml-3">
                        <div>
                            <MenuButton
                                class="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                <span class="absolute -inset-1.5" />
                                <span class="sr-only">Open user menu</span>
                                <img class="size-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden">
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
                                    Profile</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign
                                    out</a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
        </div>
    </header>

    <div class="flex flex-row pt-16">
        <aside id="logo-sidebar" :class="[sideBarOpen ? 'transform-x-0' : '-translate-x-full']"
            class="h-[92vh] fixed sm:static transition-transform duration-100 ease-in-out top-0 left-0 z-40 w-50 overflow-y-auto overscroll-contain
            bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 scrollbar-thin"
            aria-label="Sidebar">
            <div class="py-2 px-3 mb-20 bg-white dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                    <li v-for="item in navigation">
                        <router-link :key="item.name" :to="item.href" :class="{ 'text-blue-500 dark:text-blue-600': item.current }"
                            class="flex items-center p-1 rounded-lg hover:text-blue-500 dark:hover:text-blue-600 group"
                            :aria-current="item.current ? 'page' : undefined">
                            <span class="">{{ item.name }}</span>
                        </router-link>
                        <ul class="font-medium">
                            <li v-for="api_list in item.api_list">
                                <router-link :key="api_list.name" :to="api_list.href" :class="{ 'text-blue-500 dark:text-blue-600': api_list.current }"
                                    class="flex items-center p-1 rounded-lg hover:text-blue-500 dark:hover:text-blue-600 group"
                                    :aria-current="api_list.current ? 'page' : undefined">
                                    <span class="ml-3 p-1">{{ api_list.name }}</span>
                                </router-link>
                            </li>
                        </ul>
                        <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                    </li>
                </ul>
            </div>
        </aside>

        <div v-if="screenWidth < 640 && sideBarOpen" @click="sideBar" id="overlay"
            class="fixed inset-0 bg-gray-900/50 dark:bg-dark-900/80 z-30">
        </div>

        <main
            class="h-[92vh] relative flex-1 overflow-y-auto overscroll-contain p-8 rounded-lg border-gray-400 dark:border-gray-700 scrollbar-thin">
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ref } from 'vue'
</script>

<script>
export default {
    data() {
        return {
            navigation: [
                {
                    name: 'GET STARTED', href: '/get_started', current: false,
                    api_list: [
                        { name: 'Overview', href: '/overview', current: false, },
                        { name: 'Quickstart', href: '/quickstart', current: false, },
                        { name: 'Pricing', href: '/pricing', current: false, },
                    ]
                },
                {
                    name: 'AUTHENTICATION', href: '/authentication', current: false,
                    api_list: [
                        { name: 'Create Token', href: '/auth/token/create', current: false, },
                        { name: 'Edit Token', href: '/auth/token/create', current: false, },
                        { name: 'Login', href: '/auth/login', current: false, },
                    ]
                },
                {
                    name: 'NOTIFICATION', href: '/notifications', current: false,
                    api_list: [
                        { name: 'Send Notification', href: '/notifications/send', current: false, },
                        { name: 'Get Notification Status', href: '/notifications/status', current: false, },
                        { name: 'List Notification', href: '/notifications/list', current: false, },
                        { name: 'Cancel Notification', href: '/notifications/cancel', current: false, },
                    ]
                },
                {
                    name: 'TRANSACTION', href: '/transaction', current: false,
                    api_list: [
                        { name: 'Create Transaction', href: '/transaction/create', current: false, },
                        { name: 'Get Transaction Details', href: '/transaction/details', current: false, },
                        { name: 'List Transactions', href: '/transaction/list', current: false, },
                        { name: 'Cancel Transaction', href: '/transaction/cancel', current: false, },
                        { name: 'Update Transaction', href: '/transaction/update', current: false, },
                    ]
                },
            ],
            screenWidth: window.innerWidth,
            sideBarOpen: ref(window.innerWidth >= 640),
            darkTheme: localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
        }
    },
    computed: {
        activePage() {
            const currentRoute = this.$route.path;
            this.navigation.forEach(item => {
                item.current = item.href === currentRoute;
            });
        },
    },
    methods: {
        darkThemeChange() {
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
            this.darkTheme = !this.darkTheme;
            console.log('darkThemeChange');
        },
        sideBar() {
            this.sideBarOpen = !this.sideBarOpen;
        },
        handleResize() {
            this.screenWidth = window.innerWidth
        }
    },
    watch: {
        // Watch for route changes and update active state accordingly
        '$route.path'(newPath) {
            this.activePage;
        },
        screenWidth(newWidth) {
            this.sideBarOpen = (newWidth >= 640);
        }
    },
    mounted() {
        this.activePage;
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.addEventListener('resize', this.handleResize)
    },
}
</script>

<style>
/* Basic thin scrollbar */
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #a0aec0 transparent;
}

/* WebKit Scrollbar Styling */
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: #a0aec0; /* tailwind gray-400 */
  border-radius: 8px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

/* Optional: dark mode support */
.dark .scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: #4b5563; /* tailwind gray-700 */
}
</style>