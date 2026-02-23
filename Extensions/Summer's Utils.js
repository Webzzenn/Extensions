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
            text: 'Booleans [booleanMenu]',
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
                    type: Scratch.ArgumentType.NUMBER
                },
                INPUT2:{
                    type: Scratch.ArgumentType.NUMBER
                }
            }
          },
        ],

        menus:{
          booleanDropdownMenu: {
            acceptReporters: true,
            items: ["true", "false"]
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

  }

  Scratch.extensions.register(new Extension());
})(Scratch);