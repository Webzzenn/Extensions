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
            opcode: 'mathMethod',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            text: 'Get Math Method [METHOD]',
            arguments:{

                METHOD:{
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'PI'
                },
            }
          },
          {
            opcode: 'mathMethodArgument',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            text: 'Math Method [METHOD] argument(s) [NUMBERS]',
            arguments:{

                METHOD:{
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'pow'
                },
                NUMBERS:{
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '5,2'
                },
            }
          },
                    {
            blockType: Scratch.BlockType.LABEL,
            text: "Other"
          },

          {
            opcode: 'null',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            blockShape: Scratch.BlockShape.OCTAGONAL,
            text: "null"
          },

          {
            opcode: 'NaN',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            blockShape: Scratch.BlockShape.OCTAGONAL,
            text: "NaN"
          },

          {
            opcode: 'undefined',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            blockShape: Scratch.BlockShape.OCTAGONAL,
            text: "undefined"
          },
          
          {
            opcode: 'Infinity',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            blockShape: Scratch.BlockShape.OCTAGONAL,
            text: "Infinity"
          },
          {
            opcode: 'minusInfinity',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            blockShape: Scratch.BlockShape.OCTAGONAL,
            text: "-Infinity"
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

    mathMethod(args) {
      const method = args.METHOD
      return Math[method];

    }

    mathMethodArgument(args) {
      const method = args.METHOD
      const numbers = args.NUMBERS.split(',').map(Number);
      return Math[method](...numbers);

    }

    null(){
      return "null"
    }

    undefined(){
      return "undefined"
    }

    NaN(){
      return "NaN"
    }

    Infinity(){
      return "Infinity"
    }

    minusInfinity(){
      return "-Infinity"
    }

  }

  Scratch.extensions.register(new Extension());
})(Scratch);