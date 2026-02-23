(function (Scratch) {
  'use strict';

  class Extension {
    getInfo() {
      return {
        id: 'sumutils',
        name: "Summer's Utils",
        color1: '#d4bd56',
        color2: '#a79543',
        color3: '#f6e9ae',
        docsURI: 'https://example.com',
        blocks: [

          {
            blockType: Scratch.BlockType.LABEL,
            text: "Booleans"
          },

          {
            opcode: 'booleanInpuit',
             blockType: Scratch.BlockType.BOOLEAN,
            text: '[BOOLEAN]',
            disableMonitor: true,
            arguments: {
              BOOLEAN: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },

          {
            opcode: 'booleanDropdown',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[booleanMenu]',
            arguments: {
              
              booleanMenu:{
                type: Scratch.ArgumentType.STRING,
                menu: 'booleanDropdownMenu',
              }
            }
          },

          {
            opcode: 'flipBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '! [BOOLEAN]',
            disableMonitor: true,
            arguments: {
              BOOLEAN: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },

          {
            blockType: Scratch.BlockType.LABEL,
            text: "Math"
          },

          {
            opcode: 'percentage',
            blockType: Scratch.BlockType.REPORTER,
            text: '[INPUT] % Of [INPUT2]',
            arguments:{

                INPUT:{
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '10',
                },
                INPUT2:{
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '100',
                }
            }
          },
          {
            opcode: 'math',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            text: 'Method [METHOD] argument(s) [NUMBERS]',
            arguments:{

                METHOD:{
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'pow'
                },
                NUMBERS:{
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '5,2'
                }
            }
          },
        ],

        menus:{
          booleanDropdownMenu: {
            acceptReporters: true,
            items: ["true", "false"]
          },

          mathDropdownMenu: {
            

          }
        }

      };
    }

    flipBoolean(args) {
     return !args.BOOLEAN
    }

    booleanInpuit(args) {
      return args.BOOLEAN
    }

    booleanDropdown(args) {
      return args.booleanMenu
    }

    percentage(args) {
      return args.INPUT / 100 * args.INPUT2
    }

    math(args) {
      const method = args.METHOD
      const numbers = args.NUMBERS.split(',').map(Number);
      return Math[method](...numbers);
    }

  }

  Scratch.extensions.register(new Extension());
})(Scratch);