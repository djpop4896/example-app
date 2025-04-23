<template>
    <main class="grid min-h-full place-items-center px-6 py-24 sm:py-28 lg:px-8">
        <div class="text-center">
            <h1 class="text-8xl font-semibold text-gray-900 dark:text-gray-500">404</h1>
            <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-500 sm:text-7xl">Page not found
            </h1>
            <p class="mt-6 text-lg font-medium text-pretty text-gray-500 dark:text-gray-300 sm:text-xl/8">Sorry, we couldn’t find the page
                you’re looking for.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <router-link to="/"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Go back home
                </router-link>
                <router-link to="/" 
                    class="rounded-md px-3.5 py-2.5 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-300 dark:hover:text-gray">
                    Contact support <span aria-hidden="true"> &rarr; </span>
                </router-link>
            </div>
        </div>
    </main>
</template>