const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const SandboxRunner = require('../../util/sandboxed-javascript-runner');
const Cast = require('../../util/cast');

/**
 * Class
 * @constructor
 */
class jgJavascript {
    constructor(runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {runtime}
         */
        this.runtime = runtime;
        this.runningEditorUnsandboxed = false;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo() {
        return {
            id: 'jgJavascript',
            name: 'JavaScript',
            isDynamic: true,
            blocks: [
                {
                    opcode: 'unsandbox',
                    text: 'Run Unsandboxed',
                    blockType: BlockType.BUTTON,
                    hideFromPalette: this.runningEditorUnsandboxed
                },
                {
                    opcode: 'sandbox',
                    text: 'Run Sandboxed',
                    blockType: BlockType.BUTTON,
                    hideFromPalette: !this.runningEditorUnsandboxed
                },
                {
                    opcode: 'javascriptHat',
                    text: 'when javascript [CODE] == true',
                    blockType: BlockType.HAT,
                    hideFromPalette: !this.runningEditorUnsandboxed,
                    arguments: {
                        CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: "Math.round(Math.random()) === 1"
                        }
                    }
                },
                {
                    opcode: 'javascriptStack',
                    text: 'javascript [CODE]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: "alert('Hello!')"
                        }
                    }
                },
                {
                    opcode: 'javascriptString',
                    text: 'javascript [CODE]',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    arguments: {
                        CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: "Math.random()"
                        }
                    }
                },
                {
                    opcode: 'javascriptBool',
                    text: 'javascript [CODE]',
                    blockType: BlockType.BOOLEAN,
                    disableMonitor: true,
                    arguments: {
                        CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: "Math.round(Math.random()) === 1"
                        }
                    }
                },
                {
                    blockType: BlockType.LABEL,
                    text: 'You can run unsandboxed',
                    hideFromPalette: !this.runningEditorUnsandboxed
                },
                {
                    blockType: BlockType.LABEL,
                    text: 'when packaging the project.',
                    hideFromPalette: !this.runningEditorUnsandboxed
                },
                {
                    blockType: BlockType.LABEL,
                    text: '⠀',
                    hideFromPalette: !this.runningEditorUnsandboxed
                },
                {
                    blockType: BlockType.LABEL,
                    text: 'Player Options >',
                    hideFromPalette: !this.runningEditorUnsandboxed
                },
                {
                    blockType: BlockType.LABEL,
                    text: 'Remove sandbox on the JavaScript Ext.',
                    hideFromPalette: !this.runningEditorUnsandboxed
                },
            ]
        };
    }

    async unsandbox() {
        const unsandbox = await this.runtime.vm.securityManager.canUnsandbox('JavaScript');
        if (!unsandbox) return;
        this.runningEditorUnsandboxed = true;
        this.runtime.extensionManager.refreshBlocks("jgJavascript");
    }

    sandbox() {
        this.runningEditorUnsandboxed = false;
        this.runtime.extensionManager.refreshBlocks("jgJavascript");
    }

    // Internal evaluation logic
    evaluateCode(code) {
        // Synchronous execution for unsandboxed mode (no frame wait)
        if (this.runtime.extensionRuntimeOptions.javascriptUnsandboxed === true || this.runningEditorUnsandboxed) {
            try {
                // eslint-disable-next-line no-eval
                return eval(code);
            } catch (err) {
                return err;
            }
        }
        
        // Sandboxed mode is inherently asynchronous (waits at least one frame)
        return SandboxRunner.execute(code).then(result => result.value);
    }

    // Block implementations
    javascriptStack(args) {
        const code = Cast.toString(args.CODE);
        return this.evaluateCode(code);
    }

    javascriptString(args) {
        const code = Cast.toString(args.CODE);
        const result = this.evaluateCode(code);

        if (result && typeof result.then === 'function') {
            return result.then(val => Cast.toString(val));
        }
        return Cast.toString(result);
    }

    javascriptBool(args) {
        const code = Cast.toString(args.CODE);
        const result = this.evaluateCode(code);

        if (result && typeof result.then === 'function') {
            return result.then(val => Boolean(val));
        }
        return Boolean(result);
    }

    javascriptHat(args) {
        // Hats cannot be async/sandboxed without causing timing issues
        if (!this.runtime.extensionRuntimeOptions.javascriptUnsandboxed && !this.runningEditorUnsandboxed) {
            return false;
        }
        const result = this.javascriptBool(args);
        if (result && typeof result.then === 'function') {
            return false; 
        }
        return result;
    }
}

module.exports = jgJavascript;
