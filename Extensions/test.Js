(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "johnMyExtension",
    name: "My Extension",
    color1: "#cd7abc",
    color2: "#653165",
    color3: "#de0bff",
    docsURI: 'https://genrandom.com/cats/',

        blocks: [
           {
            text: 'Booleans',
            blockType: Scratch.BlockType.LABEL

          },

          {
            opcode: 'reportBooleanFalse',
            text: 'False',
            blockType: Scratch.BlockType.BOOLEAN,
            disableMonitor: true
          },

          {
            opcode: 'reportBooleanTrue',
            text: 'True',
            blockType: Scratch.BlockType.BOOLEAN,
            disableMonitor: true

          },

          {
            opcode: 'testArgument',
            text: 'testArgument[TEXT]',
            blockType: Scratch.BlockType.BOOLEAN,
            disableMonitor: true,
            arguments: {

            TEXT: {
            type: Scratch.ArgumentType.STRING  

            },

          }

          }
          
        ]
      }
    }

reportBooleanFalse() {
      return     false
    }
    
    reportBooleanTrue() {
      return     true
    }

        testArgument() {
      return args.TEXT
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);