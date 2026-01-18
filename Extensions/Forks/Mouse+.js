// Name: Mouse+
// ID: HyperSense2SP
// Description: fork of sharkpool extension 
// By: SharkPool,webzzen
// License: MIT

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Mouse+ must run unsandboxed");

  const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDUuMjkzIiBoZWlnaHQ9IjE0NS4yOTMiIHZpZXdCb3g9IjAgMCAxNDUuMjkzIDE0NS4yOTMiPjxnIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTAgNzIuNjQ3QzAgMzIuNTI1IDMyLjUyNSAwIDcyLjY0NyAwczcyLjY0NyAzMi41MjUgNzIuNjQ3IDcyLjY0Ny0zMi41MjUgNzIuNjQ3LTcyLjY0NyA3Mi42NDdTMCAxMTIuNzY5IDAgNzIuNjQ3IiBmaWxsPSIjNDI3Zjk5Ii8+PHBhdGggZD0iTTguMDkxIDcyLjY0N2MwLTM1LjY1MyAyOC45MDMtNjQuNTU2IDY0LjU1Ni02NC41NTZzNjQuNTU2IDI4LjkwMyA2NC41NTYgNjQuNTU2LTI4LjkwMyA2NC41NTYtNjQuNTU2IDY0LjU1NlM4LjA5MSAxMDguMyA4LjA5MSA3Mi42NDciIGZpbGw9IiM1Y2IxZDYiLz48cGF0aCBkPSJNMTA2LjIxNSAxMDguODg0YTIuNjcgMi42NyAwIDAgMS0xLjg4Ni0uNzhMMzcuNzUgNDEuNTIyYTIuNjcgMi42NyAwIDAgMSAwLTMuNzcyIDIuNjcgMi42NyAwIDAgMSAzLjc3MiAwbDY2LjU4IDY2LjU4YTIuNjY5IDIuNjY5IDAgMCAxLTEuODg3IDQuNTU0IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTY1Ljc1NCA1MS4wODNjMCA4LjEwMy02LjU2OCAxNC42NzEtMTQuNjcxIDE0LjY3MXMtMTQuNjcxLTYuNTY4LTE0LjY3MS0xNC42N2MwLTguMTA0IDYuNTY4LTE0LjY3MiAxNC42Ny0xNC42NzIgOC4xMDQgMCAxNC42NzIgNi41NjggMTQuNjcyIDE0LjY3MSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik02My43MiA4MS4zNzFjLTcuODg1LTEuODYyLTEyLjc2OS05Ljc2NC0xMC45MDYtMTcuNjVzOS43NjQtMTIuNzY5IDE3LjY1LTEwLjkwNyAxMi43NjkgOS43NjUgMTAuOTA3IDE3LjY1Yy0xLjg2MiA3Ljg4Ni05Ljc2NSAxMi43Ny0xNy42NSAxMC45MDciIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNOTcuNzY3IDgzLjA5NGMwIDguMTAyLTYuNTcgMTQuNjczLTE0LjY3MyAxNC42NzNzLTE0LjY3Mi02LjU3LTE0LjY3Mi0xNC42NzMgNi41NjktMTQuNjcxIDE0LjY3Mi0xNC42NzFjOC4xMDIgMCAxNC42NzMgNi41NyAxNC42NzMgMTQuNjciIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTA2LjIxNSAxMDguODg0YTIuNjcgMi42NyAwIDAgMS0xLjg4Ni0uNzhsLTE2LjM0LTE2LjM0YTIuNjY1IDIuNjY1IDAgMCAxIDAtMy43NzMgMi42NyAyLjY3IDAgMCAxIDMuNzcyIDBsMTYuMzQgMTYuMzRhMi42NyAyLjY3IDAgMCAxIDAgMy43NzMgMi42OCAyLjY4IDAgMCAxLTEuODg2Ljc4IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE1LjMxNSA3Mi42NDcgMjguMTIyIDU5Ljg0djI1LjYxNHptNzAuMTM5LTQ0LjUyNShighVDRsMTIuODA3LTEyLjgwNyem00NC41MjUgNDQuNTI1LTEyLjgwNyAxMi44MDdWNTkuODR6TTU5Ljg0IDExNy4xNzJoMjUuNjE0bC0xMi44MDcgMTIuODA3eiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvZz48L3N2Zz4=";

  const Cast = Scratch.Cast;

  class MousePlus {
    getInfo() {
      return {
        id: "HyperSense2SP",
        name: "Mouse+",
        color1: "#5cb1d6",
        color2: "#47a8d1",
        color3: "#2e8eb8",
        menuIconURI,
        blocks: [
          {
            opcode: "mouseClick",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is mouse [BUTTON] down?"),
            arguments: {
              BUTTON: { type: Scratch.ArgumentType.STRING, menu: "MOUSE_BUTTONS" }
            }
          }
        ],
        menus: {
          MOUSE_BUTTONS: {
            acceptReporters: true,
            items: [
              { text: Scratch.translate("left"), value: "0" },
              { text: Scratch.translate("scroll wheel"), value: "1" },
              { text: Scratch.translate("right"), value: "2" },
              { text: Scratch.translate("back"), value: "3" },
              { text: Scratch.translate("forward"), value: "4" }
            ],
          }
        }
      };
    }

    mouseClick(args, util) {
      return util.ioQuery("mouse", "getButtonIsDown", [Cast.toNumber(args.BUTTON)]);
    }
  }

  Scratch.extensions.register(new MousePlus());
})(Scratch);
