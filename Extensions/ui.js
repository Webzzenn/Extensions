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
          opcode: 'colorReporter',
          blockType: Scratch.BlockType.REPORTER,
          text: "color[COLOR]",
          arguments:{

            COLOR:{
              type: Scratch.ArgumentType.COLOR
            }
          }

         },
          
          
         {
            blockType: Scratch.BlockType.LABEL,
            text: 'Elements'
          },
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
            blockType: Scratch.BlockType.LABEL,
            text: 'Global'
          },
          {
            opcode: 'uiGlobalAttrabutes',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Global attrabutes[GLOBALATTRABUTEMENU]',
            disableMonitor: true,
            arguments: {
              
              GLOBALATTRABUTEMENU:{
                type: Scratch.ArgumentType.STRING,
                menu: 'menuGlobalAttrabutes',
              }
            }
          },
          {
            opcode: 'uiGlobalEventsAttrabutes',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Global attrabutes[GLOBALEVENTSATTRABUTEMENU]',
            disableMonitor: true,
            arguments: {
              
              GLOBALEVENTSATTRABUTEMENU:{
                type: Scratch.ArgumentType.STRING,
                menu: 'menuGlobalEventsAttrabutes',
              }
            }
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Frame'
          },
          {
            opcode: 'uiFrameAttrabutes',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Frame attrabutes[FRAMEATTRABUTEMENU]',
            disableMonitor: true,
            arguments: {
              
              FRAMEATTRABUTEMENU:{
                type: Scratch.ArgumentType.STRING,
                menu: 'menuFrameAttrabutes',
              }
            }
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Button'
          },
          {
            opcode: 'uiButtonAttrabutes',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Button attrabutes[BUTTONATTRABUTEMENU]',
            disableMonitor: true,
            arguments: {
              
              BUTTONATTRABUTEMENU:{
                type: Scratch.ArgumentType.STRING,
                menu: 'menuButtonAttrabutes',
              }
            }
          },
          {
            opcode: 'uiButtonEventsAttrabutes',
            blockType: Scratch.BlockType.REPORTER,
            text: 'ButtonEvents attrabutes[BUTTONEVENTSATTRABUTEMENU]',
            disableMonitor: true,
            arguments: {
              
              BUTTONEVENTSATTRABUTEMENU:{
                type: Scratch.ArgumentType.STRING,
                menu: 'menuButtonEventsAttrabutes',
              }
            }
          },
        ],

        menus:{
          elementNames: {
            acceptReporters: false,
            items: ["frame", "button"]
          },
          menuGlobalAttrabutes: {
            acceptReporters: false,
            items: ["position.x", "position.y","element.type","costume","stetch.width","stretch.hight"]
          },
          menuGlobalEventsAttrabutes:{
            acceptReporters: false,
            items: ["on.element.logic.start","on.element.logic.end"]
          },
          menuFrameAttrabutes: {
            acceptReporters: false,
            items: []
          },
          menuButtonEventsAttrabutes: {
            acceptReporters: false,
            items: ["on.button.hover","on.button.clicked","on.button.held","on.button.mouse.release"]
          },
          menuButtonAttrabutes:{
            acceptReporters: false,
            items: ["interactive.box.width","interactive.box.hight","button.mouse.collision.optimisation.distance.min.range","button.touching.on.first.click"]
          }
          
        }

      };
    }
    // methods
    colorReporter(args){
      return args.COLOR
    }
    uiElements(args){
    return args.ELEMENTMENU
    }

    uiGlobalAttrabutes(args){
    return args.GLOBALATTRABUTEMENU
    }

    uiGlobalEventsAttrabutes(args){
      return args.GLOBALEVENTSATTRABUTEMENU
    }
    
    uiFrameAttrabutes(args){
      return args.FRAMEATTRABUTEMENU
    }
    
    uiButtonEventsAttrabutes(args){
      return args.BUTTONEVENTSATTRABUTEMENU
    }

    uiButtonAttrabutes(args){
      return args.BUTTONATTRABUTEMENU
    }
}

  Scratch.extensions.register(new Extension());
})(Scratch);