(function (Scratch) {
  'use strict';
// extension options
  class Extension {
    getInfo() {
      return {
        id: 'summerUi',
        name: "ui",
        color1: '#86b44e',
        color2: '#718d4e',
        color3: '#aaf153',
        blocks: [
          {
            opcode: 'uiElements',
            blockType: Scratch.BlockType.REPORTER,
            text: 'elemtns[ELEMENTMENU]',
            disableMonitor: true,
            arguments: {
              
              ELEMENTMENU:{
                type: Scratch.ArgumentType.STRING,
                menu: 'elementNames',
              }
            }   
          },
          {
            opcode: 'uiAttrabutes',
            blockType: Scratch.BlockType.REPORTER,
            text: 'attrabutes[ATTRABUTEMENU]',
            disableMonitor: true,
            arguments: {
              
              ATTRABUTEMENU:{
                type: Scratch.ArgumentType.STRING,
                menu: 'attrabuteNames',
              }
            }
          }
        ],

        menus:{
          elementNames: {
            acceptReporters: false,
            items: ["frame", "button"]
          },
          attrabuteNames: {
            acceptReporters: false,
            items: ["position.x", "position.y","element.type","on.button.clicked","costume","stetch.width","stretch.hight","interactive.box.width","interactive.box.hight","button.mouse.collision.optimisation.distance.min.range"]
          }
        }

      };
    }
    // methods
    uiElements(args){
    return args.ELEMENTMENU
    }

    uiAttrabutes(args){
    return args.ATTRABUTEMENU
    }
}

  Scratch.extensions.register(new Extension());
})(Scratch);