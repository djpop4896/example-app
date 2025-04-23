<style>
.tooltip .tooltiptext {
    visibility: hidden;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -30px;
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}
</style>

<template>
    <div class="mb-3 text-5xl">Authentication</div>

    <div class="mb-5 flex flex-row gap-4">
        <div class="basis-2/3 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet diam
            pretium lacus ullamcorper rhoncus egestas eu ligula. Mauris gravida orci vel luctus tristique. Proin et
            gravida orci, nec ultricies lorem. Integer cursus condimentum ante, et pharetra elit bibendum vel. Nunc et
            venenatis nibh, et blandit mauris. Cras felis felis, ullamcorper a varius nec, iaculis et nisi. Mauris non
            commodo ante. Vivamus vestibulum elit sem, faucibus convallis mauris mollis sed. Pellentesque id sem ac
            tellus imperdiet gravida in at tortor. Donec sit amet varius ligula, at mollis urna. Nullam vel erat vitae
            neque mattis bibendum in in metus. Aenean elementum at erat eget luctus. Morbi imperdiet rhoncus ornare.
            Nunc sit amet condimentum nisl, id ultricies sapien.</div>
        <div class="basis-1/3">
            <div class="mb-4 border text-gray-300 dark:text-gray-300 bg-gray-700 border-gray-400 rounded-md">
                <div class="relative p-1 border-b-1 rounded-tr-md rounded-tl-md h-10">
                    <div class="absolute top-0 left-0 p-2">API URL</div>
                    <div class="tooltip absolute top-0 right-0 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                        <span class="tooltiptext bg-gray-900 dark:bg-gray-700 p-1">Click to copy</span>
                    </div>
                </div>
                <div class="p-4 rounded-br-md rounded-bl-md bg-gray-800/50" ref="code1"></div>
            </div>
            <div class="border text-gray-300 dark:text-gray-300 bg-gray-700 border-gray-400 rounded-md">
                <div class="relative p-1 border-b-1 rounded-tr-md rounded-tl-md h-10">
                    <div class="absolute top-0 left-0 p-2">Some Code</div>
                    <div class="absolute top-0 right-0 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </div>
                </div>
                <div class="p-4 rounded-br-md rounded-bl-md bg-gray-800/50" ref="code2"></div>
            </div>
        </div>
    </div>

    
    <div class="mb-5 flex flex-row gap-4">
        <div class="basis-2/3 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet diam
            pretium lacus ullamcorper rhoncus egestas eu ligula. Mauris gravida orci vel luctus tristique. Proin et
            gravida orci, nec ultricies lorem. Integer cursus condimentum ante, et pharetra elit bibendum vel. Nunc et
            venenatis nibh, et blandit mauris. Cras felis felis, ullamcorper a varius nec, iaculis et nisi. Mauris non
            commodo ante. Vivamus vestibulum elit sem, faucibus convallis mauris mollis sed. Pellentesque id sem ac
            tellus imperdiet gravida in at tortor. Donec sit amet varius ligula, at mollis urna. Nullam vel erat vitae
            neque mattis bibendum in in metus. Aenean elementum at erat eget luctus. Morbi imperdiet rhoncus ornare.
            Nunc sit amet condimentum nisl, id ultricies sapien.</div>
        <div class="basis-1/3">
            <div class="mb-4 border text-gray-300 dark:text-gray-300 bg-gray-700 border-gray-400 rounded-md">
                <div class="relative p-1 border-b-1 rounded-tr-md rounded-tl-md h-10">
                    <div class="absolute top-0 left-0 p-2">API URL</div>
                    <div class="tooltip absolute top-0 right-0 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                        <span class="tooltiptext bg-gray-900 dark:bg-gray-700 p-1">Click to copy</span>
                    </div>
                </div>
                <div class="p-4 rounded-br-md rounded-bl-md bg-gray-800/50" ref="code1"></div>
            </div>
            <div class="border text-gray-300 dark:text-gray-300 bg-gray-700 border-gray-400 rounded-md">
                <div class="relative p-1 border-b-1 rounded-tr-md rounded-tl-md h-10">
                    <div class="absolute top-0 left-0 p-2">Some Code</div>
                    <div class="absolute top-0 right-0 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </div>
                </div>
                <div class="p-4 rounded-br-md rounded-bl-md bg-gray-800/50" ref="code2"></div>
            </div>
        </div>
    </div>

    
    <div class="mb-5 flex flex-row gap-4">
        <div class="basis-2/3 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet diam
            pretium lacus ullamcorper rhoncus egestas eu ligula. Mauris gravida orci vel luctus tristique. Proin et
            gravida orci, nec ultricies lorem. Integer cursus condimentum ante, et pharetra elit bibendum vel. Nunc et
            venenatis nibh, et blandit mauris. Cras felis felis, ullamcorper a varius nec, iaculis et nisi. Mauris non
            commodo ante. Vivamus vestibulum elit sem, faucibus convallis mauris mollis sed. Pellentesque id sem ac
            tellus imperdiet gravida in at tortor. Donec sit amet varius ligula, at mollis urna. Nullam vel erat vitae
            neque mattis bibendum in in metus. Aenean elementum at erat eget luctus. Morbi imperdiet rhoncus ornare.
            Nunc sit amet condimentum nisl, id ultricies sapien.</div>
        <div class="basis-1/3">
            <div class="mb-4 border text-gray-300 dark:text-gray-300 bg-gray-700 border-gray-400 rounded-md">
                <div class="relative p-1 border-b-1 rounded-tr-md rounded-tl-md h-10">
                    <div class="absolute top-0 left-0 p-2">API URL</div>
                    <div class="tooltip absolute top-0 right-0 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                        <span class="tooltiptext bg-gray-900 dark:bg-gray-700 p-1">Click to copy</span>
                    </div>
                </div>
                <div class="p-4 rounded-br-md rounded-bl-md bg-gray-800/50" ref="code1"></div>
            </div>
            <div class="border text-gray-300 dark:text-gray-300 bg-gray-700 border-gray-400 rounded-md">
                <div class="relative p-1 border-b-1 rounded-tr-md rounded-tl-md h-10">
                    <div class="absolute top-0 left-0 p-2">Some Code</div>
                    <div class="absolute top-0 right-0 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </div>
                </div>
                <div class="p-4 rounded-br-md rounded-bl-md bg-gray-800/50" ref="code2"></div>
            </div>
        </div>
    </div>

    
    <div class="mb-5 flex flex-row gap-4">
        <div class="basis-2/3 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet diam
            pretium lacus ullamcorper rhoncus egestas eu ligula. Mauris gravida orci vel luctus tristique. Proin et
            gravida orci, nec ultricies lorem. Integer cursus condimentum ante, et pharetra elit bibendum vel. Nunc et
            venenatis nibh, et blandit mauris. Cras felis felis, ullamcorper a varius nec, iaculis et nisi. Mauris non
            commodo ante. Vivamus vestibulum elit sem, faucibus convallis mauris mollis sed. Pellentesque id sem ac
            tellus imperdiet gravida in at tortor. Donec sit amet varius ligula, at mollis urna. Nullam vel erat vitae
            neque mattis bibendum in in metus. Aenean elementum at erat eget luctus. Morbi imperdiet rhoncus ornare.
            Nunc sit amet condimentum nisl, id ultricies sapien.</div>
        <div class="basis-1/3">
            <div class="mb-4 border text-gray-300 dark:text-gray-300 bg-gray-700 border-gray-400 rounded-md">
                <div class="relative p-1 border-b-1 rounded-tr-md rounded-tl-md h-10">
                    <div class="absolute top-0 left-0 p-2">API URL</div>
                    <div class="tooltip absolute top-0 right-0 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                        <span class="tooltiptext bg-gray-900 dark:bg-gray-700 p-1">Click to copy</span>
                    </div>
                </div>
                <div class="p-4 rounded-br-md rounded-bl-md bg-gray-800/50" ref="code1"></div>
            </div>
            <div class="border text-gray-300 dark:text-gray-300 bg-gray-700 border-gray-400 rounded-md">
                <div class="relative p-1 border-b-1 rounded-tr-md rounded-tl-md h-10">
                    <div class="absolute top-0 left-0 p-2">Some Code</div>
                    <div class="absolute top-0 right-0 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </div>
                </div>
                <div class="p-4 rounded-br-md rounded-bl-md bg-gray-800/50" ref="code2"></div>
            </div>
        </div>
    </div>

    
    <div class="mb-5 flex flex-row gap-4">
        <div class="basis-2/3 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet diam
            pretium lacus ullamcorper rhoncus egestas eu ligula. Mauris gravida orci vel luctus tristique. Proin et
            gravida orci, nec ultricies lorem. Integer cursus condimentum ante, et pharetra elit bibendum vel. Nunc et
            venenatis nibh, et blandit mauris. Cras felis felis, ullamcorper a varius nec, iaculis et nisi. Mauris non
            commodo ante. Vivamus vestibulum elit sem, faucibus convallis mauris mollis sed. Pellentesque id sem ac
            tellus imperdiet gravida in at tortor. Donec sit amet varius ligula, at mollis urna. Nullam vel erat vitae
            neque mattis bibendum in in metus. Aenean elementum at erat eget luctus. Morbi imperdiet rhoncus ornare.
            Nunc sit amet condimentum nisl, id ultricies sapien.</div>
        <div class="basis-1/3">
            <div class="mb-4 border text-gray-300 dark:text-gray-300 bg-gray-700 border-gray-400 rounded-md">
                <div class="relative p-1 border-b-1 rounded-tr-md rounded-tl-md h-10">
                    <div class="absolute top-0 left-0 p-2">API URL</div>
                    <div class="tooltip absolute top-0 right-0 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                        <span class="tooltiptext bg-gray-900 dark:bg-gray-700 p-1">Click to copy</span>
                    </div>
                </div>
                <div class="p-4 rounded-br-md rounded-bl-md bg-gray-800/50" ref="code1"></div>
            </div>
            <div class="border text-gray-300 dark:text-gray-300 bg-gray-700 border-gray-400 rounded-md">
                <div class="relative p-1 border-b-1 rounded-tr-md rounded-tl-md h-10">
                    <div class="absolute top-0 left-0 p-2">Some Code</div>
                    <div class="absolute top-0 right-0 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </div>
                </div>
                <div class="p-4 rounded-br-md rounded-bl-md bg-gray-800/50" ref="code2"></div>
            </div>
        </div>
    </div>

    
    
</template>

<script>
import { EditorState } from "@codemirror/state"
import { EditorView, showTooltip } from "@codemirror/view"

const style = document.createElement('style');
style.innerHTML = `
    .cm-editor:focus { outline: none !important; }
    .cm-editor textarea:focus { outline: none !important; }
    .cm-editor .cm-line, .cm-scroller, .cm-gutter { outline: none !important; }
    .cm-editor.cm-focused { outline: none !important; }
`;
document.head.appendChild(style);

export default {
    name: 'CodeMirrorEditor',
    data() {
        return {
        }
    },
    mounted() {
        // Create a new CodeMirror editor instance
        this.editor = new EditorView({
            doc: "curl -v http://www.example.com/",
            parent: this.$refs.code1,
            extensions: [
                EditorState.readOnly.of(true),
                EditorView.editable.of(false),
                EditorView.contentAttributes.of({ tabindex: "0" }),
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