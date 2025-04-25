<template>
    <div class="editor-container">
        <!-- Textarea to be converted into CodeMirror -->
        <textarea ref="editor" />
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    name: 'CodeEditor',
    setup() {
        const editor = ref(null);

        // Initialize CodeMirror on mount
        onMounted(() => {
            if (editor.value) {
                new CodeMirror(editor.value, {
                    value: '// Write your code here...',
                    mode: 'javascript',  // or any other mode you want
                    theme: 'dracula',     // Set the theme you prefer
                    lineNumbers: true,   // Show line numbers
                    lineWrapping: true,  // Enable line wrapping
                    tabSize: 2,          // Set tab size
                    autofocus: true,     // Focus the editor automatically
                });
            }
        });

        return {
            editor,
        };
    },
};
</script>

<style scoped>
.editor-container {
    width: 100%;
    height: 400px;
}

.CodeMirror {
    height: 100%;
    /* Ensure it takes the full height of its container */
    width: 100%;
}
</style>