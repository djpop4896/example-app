<template>
    <div class="mb-3 text-5xl">Authentication</div>

    <div class="mb-5">
        <p class="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet diam
            pretium lacus ullamcorper rhoncus egestas eu ligula. Mauris gravida orci vel luctus tristique. Proin et
            gravida orci, nec ultricies lorem. Integer cursus condimentum ante, et pharetra elit bibendum vel. Nunc et
            venenatis nibh, et blandit mauris. Cras felis felis, ullamcorper a varius nec, iaculis et nisi. Mauris non
            commodo ante. Vivamus vestibulum elit sem, faucibus convallis mauris mollis sed. Pellentesque id sem ac
            tellus imperdiet gravida in at tortor. Donec sit amet varius ligula, at mollis urna. Nullam vel erat vitae
            neque mattis bibendum in in metus. Aenean elementum at erat eget luctus. Morbi imperdiet rhoncus ornare.
            Nunc sit amet condimentum nisl, id ultricies sapien.
        </p>
        <div class="mb-6 shadow-xl shadow-gray-500 dark:shadow-[#454545] border text-gray-300 dark:text-gray-300 bg-[#1a1a1a] border-gray-200 rounded-md">
            <div class="relative p-1 border-b-1 border-b-gray-200 rounded-tr-md rounded-tl-md h-10">
                <div class="absolute top-0 left-0 p-2">API URL</div>
                <div class="tooltip absolute top-0 right-0 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-copy" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                    </svg>
                </div>
            </div>
            <div class="p-4 rounded-br-md rounded-bl-md bg-[#1a1a1a]" ref="code"></div>
        </div>
        <p class="mb-5">
            Sit ea quot nibh, ne dicam congue aperiam sed, iisque delenit molestiae his in. Qui no habeo velit, an eum
            meis ornatus. Sed esse homero tritani ea, reque graeci ne eam. Soluta molestie comprehensam an per, ludus
            euismod recusabo ei quo, ei purto albucius epicurei mei. Vim ne rebum moderatius, prima iracundia ut quo.
            Sed ex viris graeco.
        </p>
    </div>
</template>

<script>
import { EditorState} from "@codemirror/state"
import { EditorView, lineNumbers } from "@codemirror/view"

const style = document.createElement('style');
style.innerHTML = `
`;
document.head.appendChild(style);

export default {
    data() {
        return {
        }
    },
    mounted() {
        // Create a new CodeMirror editor instance
        this.editor = new EditorView({
            doc: `curl -v http://www.example.com/
hehehe
hahaha`,
            parent: this.$refs.code,
            extensions: [
                lineNumbers(),
                EditorState.readOnly.of(true),
                EditorView.editable.of(false),
                EditorView.contentAttributes.of({ tabindex: "0" }),
                EditorView.theme({
                    ".cm-gutter": {
                        backgroundColor: "#1a1a1a",
                        color: "#abb2bf",
                    },
                    ".cm-gutterElement": {
                        backgroundColor: "#1a1a1a",
                        color: "#61afef",
                    }
                })
            ],
        });
    },
    beforeDestroy() {
        // Clean up the editor when the component is destroyed
        if (this.editor) {
            this.editor.destroy();
        }
    }
};
</script>