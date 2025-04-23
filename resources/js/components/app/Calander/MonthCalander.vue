<template>
    
</template>

<script>
const now = new Date();
export default {
    name: 'MonthCalander',
    data() {
        return {
            day: now.getDate(),
            month: now.toLocaleString('default', { month: 'short' }),
            year: now.getFullYear(),
        }
    },
}
</script>