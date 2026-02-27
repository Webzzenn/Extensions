(function (Scratch) {
  'use strict';

  class Extension {
    getInfo() {
      return {
        id: 'testbranch',
        name: "branchtest",
        color1: '#d4bd56',
        color2: '#a79543',
        color3: '#f6e9ae',
        blocks: [
          {
            opcode: 'branch',
            blockType: Scratch.BlockType.CONDITIONAL,
            disableMonitor: true,
            text: "my test branch",
            branchCount: 1,
          }
        ]
      };
    }

    branch(argsm, util) {
      util.startBranch(1, false);
      return "hi"
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);