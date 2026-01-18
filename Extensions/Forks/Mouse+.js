// Name: Mouse+
// ID: Mouse+Ex
// Description: Give's the moust more control over the project. //By Sharkpool(hyper Sense V2), Fork by Webzzen
// By: SharkPool,Webzzen
// License: MIT

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Mouse+ must run unsandboxed");

  const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMi4wMzg0NCIgaGVpZ2h0PSIyNS4wNjc2NyIgdmlld0JveD0iMCwwLDIyLjAzODQ0LDI1LjA2NzY3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI3LjYxMTg0LC0xNjkuMDM1NDkpIj48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yMjcuNjExODQsMTcxLjUzNTQ5YzAsLTEuMzgwNzEgMS4xMTkyOSwtMi41IDIuNSwtMi41YzEuMzgwNzEsMCAyLjUsMS4xMTkyOSAyLjUsMi41YzAsMS4zODA3MSAtMS4xMTkyOSwyLjUgLTIuNSwyLjVjLTEuMzgwNzEsMCAtMi41LC0xLjExOTI5IC0yLjUsLTIuNXoiIGZpbGw9IiM4ZmQ4ZmYiLz48cGF0aCBkPSJNMjQ0LjY1MDI4LDE3MS45MTQxM2MwLC0xLjM4MDcxIDEuMTE5MjksLTIuNSAyLjUsLTIuNWMxLjM4MDcxLDAgMi41LDEuMTE5MjkgMi41LDIuNWMwLDEuMzgwNzEgLTEuMTE5MjksMi41IC0yLjUsMi41Yy0xLjM4MDcxLDAgLTIuNSwtMS4xMTkyOSAtMi41LC0yLjV6IiBmaWxsPSIjOGZkOGZmIi8+PHBhdGggZD0iTTIzNS4wNDA3NywxNzguMjEwNjZjMC4wNDc4OCwwLjA1NTggMC4wOTM2MywwLjEyNDczIDAuMTM3NDYsMC4yMDU1YzAuMjkxMzIsMC40MDg4IDAuNDYyNjcsMC45MDkgMC40NjI2NywxLjQ0OTIzYzAsMC4wMjcyOCAtMC4wMDA0NCwwLjA1NDQ3IC0wLjAwMTMsMC4wODE1NGMwLjU2MDMxLDIuODE0NTggMC43NzU5Niw3LjczNDk4IDEuODExMTEsNy41MjQzMmMyLjUwNDE4LC0wLjUwOTYgMS44OTQwNiwtMTEuNjM5NDggNi43MTU2MiwtMTAuNzg0MDRjNS45MDI1LDEuMDQ3MjIgLTQuODc1NTcsMjQuMzAyNDMgLTkuOTksMTUuMzgyNzhjLTIuMTU1NjIsLTMuNzU5NDMgLTIuNjQ5MzcsLTcuNTI2NzggLTMuNDc2NzUsLTExLjY2MzY5Yy0wLjAzODQyLC0wLjE3NDE4IC0wLjA1ODY3LC0wLjM1NTE4IC0wLjA1ODY3LC0wLjU0MDkxYzAsLTEuMzcxMTggMS4xMDM4OCwtMi40ODQ1MyAyLjQ3MTQ0LC0yLjQ5OTg0YzAuNjU2NzcsLTAuMDY4OTEgMS4zNDQyOSwwLjE2NDMgMS45Mjg0NCwwLjg0NTExeiIgZmlsbD0iIzhmZDhmZiIvPjwvZz48L2c+PC9zdmc+"
  const Cast = Scratch.Cast;

  class MousePlus {
    getInfo() {
      return {
        id: "Mouse+Ex",
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
