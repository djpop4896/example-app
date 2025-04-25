<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Example Web Application</title>
    @vite(['resources/css/app.css', 'resources/js/api.js'])
    <script>
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    </script>
</head>

<body class="overflow-hidden h-screenbg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300">
    <div id="api" class="min-h-dvh flex flex-col"></div>
</body>

</html>