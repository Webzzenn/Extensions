(function (Scratch) {
  'use strict';


  class Extension {
    getInfo() {
      return {
        id: 'websumBooleans',
        name: 'Booleans',
        color1: '#43d359',
        color2: '#3f8449',
        color3: '#9bf3a8',
        blocks: [
          {
            opcode: 'reportBooleanFalse',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'False',
            disableMonitor: true
          },
          {
            opcode: 'reportBooleanTrue',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'True',
            disableMonitor: true
          },
          {
            opcode: 'booleanInpuit',
             blockType: Scratch.BlockType.BOOLEAN,
            text: '[BOOLEAN]',
            disableMonitor: true,
            blockShape: Scratch.BlockShape.SQUARE,
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
            opcode: 'oppositeBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Flip Boolean [BOOLEAN]',
            disableMonitor: true,
            blockShape: Scratch.BlockShape.SQUARE,
            arguments: {
              BOOLEAN: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },

          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Builder'
          },

          {
            opcode: 'builder',
           blockType: Scratch.BlockType.REPORTER,
           text: 'Boolean builder',
           disableMonitor: true,
           branchCount: 1,
           alignments: []
          },
          {
            opcode: 'builderAppend',
           blockType: Scratch.BlockType.COMMAND,
           text: 'Append [BOOLEAN] To Builder',
           disableMonitor: true,
           arguments:{

            BOOLEAN:{
              type: Scratch.ArgumentType.BOOLEAN
            }
           }
          },

          {
            blockType: Scratch.BlockType.LABEL,
            text: 'im sorry'
          },

          {
            opcode: 'monster',
           blockType: Scratch.BlockType.COMMAND,
           text: 'whatever the fuck this is',
           disableMonitor: true,
           branchCount: 25,
           alignments: []
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

    reportBooleanFalse() {
      return false;
    }

    reportBooleanTrue() {
      return true;
    }

    oppositeBoolean(args) {
     return !args.BOOLEAN
    }

    booleanInpuit(args) {
      return args.BOOLEAN
    }

    builder(args, util) {
     return 'work in progress'
    }

    builderAppend(args) {
      return 'work in progress'
    }   

    booleanDropdown(args) {
      return args.booleanMenu
    }

    monster(){
      return 'im sorry'
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);