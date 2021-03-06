const windowsShortcutsData = [
  {
    hotkeys: ["Control", "N"],
    description: "Opens a new browser window.",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "Shift", "N"],
    description: "Opens a new tab in Incognito mode.",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "L"],
    description: "Shifts focus to the address bar.",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "W"],
    description: "Close the current tab or pop-up.",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "T"],
    description: "Open a new tab, and jump to it",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "9"],
    description: "Jump to the last tab",
    category: "Browser",
  },
  {
    hotkeys: ["F12"],
    description: "Open Developer Tools",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "F"],
    description: "Open the Find Bar to search the current page.",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "+"],
    description: "Make everything on the page bigger (Zoom in).",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "-"],
    description: "Make everything on the page smaller (Zoom out).",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "0"],
    description: "Reset page zoom level.",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "Tab"],
    description: "Move forward to the next tab (to the right)",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "Shift", "Tab"],
    description: "Move backward to the previous tab (to the left)",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "Shift", "Tab"],
    description: "Move backward to the previous tab (to the left)",
    category: "Browser",
  },
  {
    hotkeys: ["Control", "Z"],
    description: "Undo the previous command.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "Y"],
    description: "Redo the previous command.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "C"],
    description:
      "Copy the selected item to the Clipboard. This also works for files in the Explorer.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "A"],
    description: "Select all items.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "V"],
    description:
      "Paste the contents of the Clipboard into the current document or app. This also works for files in the Explorer.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "F"],
    description: "Find items in a document or open a Find window.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "S"],
    description: "Save the current document.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "B"],
    description: "Make the selected text bold, or turn bold on or off",
    category: "Document",
  },
  {
    hotkeys: ["Control", "I"],
    description: "Italicize the selected text, or turn italics on or off.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "K"],
    description: "Create a hyperlink.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "U"],
    description: "Underline the selected text, or turn underlining on or off.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "ArrowUp"],
    description: "Move the cursor to the beginning of the previous paragraph.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "ArrowDown"],
    description: "Move the cursor to the beginning of the next paragraph.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "ArrowLeft"],
    description: "Move the cursor to the beginning of the previous word.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "ArrowRight"],
    description: "Move the cursor to the beginning of the next word.",
    category: "Document",
  },
  {
    hotkeys: ["Shift", "Control", "ArrowUp"],
    description:
      "Select the text between the cursor and the beginning of the document.",
    category: "Document",
  },
  {
    hotkeys: ["Shift", "Control", "ArrowDown"],
    description:
      "Select the text between the insertion point and the end of the document.",
    category: "Document",
  },
  {
    hotkeys: ["Shift", "Control", "ArrowLeft"],
    description: "Select the word to the left of the cursor.",
    category: "Document",
  },
  {
    hotkeys: ["Shift", "Control", "ArrowRight"],
    description: "Select the word to the right of the cursor.",
    category: "Document",
  },
  {
    hotkeys: ["Alt", "Delete"],
    description: "Delete the word to the left of the cursor.",
    category: "Document",
  },
  {
    hotkeys: ["Control", "W"],
    description: "In Explorer window -> Close the active window.",
    category: "Native",
  },
  {
    hotkeys: ["Control", "N"],
    description: "In Explorer window -> Open a new window.",
    category: "Native",
  },
  {
    hotkeys: ["Control", "F"],
    description: "In Explorer window -> Select the search box.",
    category: "Native",
  },
  {
    hotkeys: ["Control", "E"],
    description: "In Explorer window -> Select the search box.",
    category: "Native",
  },
  {
    hotkeys: ["Alt", "D"],
    description: "In Explorer window -> Select the address bar.",
    category: "Native",
  },
  {
    hotkeys: ["Control", "Shift", "N"],
    description: "In Explorer window -> Create a new folder.",
    category: "Native",
  },
  {
    hotkeys: ["Control", "Escape"],
    description: "Open Start window.",
    category: "Native",
  },
  {
    hotkeys: ["Control", "Shift", "Escape"],
    description: "Open Task Manager.",
    category: "Native",
  },
  {
    hotkeys: ["Alt", "F4"],
    description: "Close the active item, or exit the active app.",
    category: "Native",
  },
  {
    hotkeys: ["Alt", "Tab"],
    description: "Switch between open apps.",
    category: "Native",
  },
  {
    hotkeys: ["Meta", "L"],
    description: "???? Lock your PC.",
    category: "Native",
  },
  {
    hotkeys: ["Meta", "D"],
    description: "Display and hide the desktop.",
    category: "Native",
  },
  {
    hotkeys: ["Meta", "."],
    description: "Open emoji panel.",
    category: "Native",
  },
  {
    hotkeys: ["Meta", ";"],
    description: "Open emoji panel.",
    category: "Native",
  },
  {
    hotkeys: ["Control", "Z"],
    description: "Undo the previous command.",
    category: "Native",
  },
  {
    hotkeys: ["Control", "Y"],
    description: "Redo the previous command.",
    category: "Native",
  },
  {
    hotkeys: ["Control", "C"],
    description:
      "Copy the selected item to the Clipboard. This also works for files in the Explorer.",
    category: "Native",
  },
  {
    hotkeys: ["Control", "A"],
    description: "Select all items.",
    category: "Native",
  },
  {
    hotkeys: ["Control", "V"],
    description:
      "Paste the contents of the Clipboard into the current document or app. This also works for files in the Explorer.",
    category: "Native",
  },
  {
    hotkeys: ["Control", "P"],
    description: "T??m ki???m v?? m??? m???t file trong th?? m???c l??m vi???c c???a b???n.",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "Shift", "Tab"],
    description: "??i???u h?????ng gi???a c??c t???p m?? b???n hi???n ??ang m??? (ho???c l??m vi???c)",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "L"],
    description: "Ch???n d??ng hi???n t???i",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "Shift", "L"],
    description: "Ch???n t???t c??? c??c l???n xu???t hi???n c???a l???a ch???n hi???n t???i",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "Shift", "K"],
    description: "X??a m???t d??ng n??i m?? con tr??? ??ang ?????ng",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "Space"],
    description: "Hi???n th??? g???i ??",
    category: "VSCode",
  },
  {
    hotkeys: ["Alt", "ArrowUp"],
    description: "Di chuy???n d??ng hi???n t???i l??n tr??n",
    category: "VSCode",
  },
  {
    hotkeys: ["Alt", "ArrowDown"],
    description: "Di chuy???n d??ng hi???n t???i xu???ng d?????i",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "`"],
    description: "???n / hi???n Terminal",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "B"],
    description: "???n / hi???n Sidebar",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "G"],
    description: "??i???u h?????ng ?????n d??ng mong mu???n trong t???p tin.",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "/"],
    description: "Comment cho m???t d??ng ho???c m???t block",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "\\"],
    description: "Chia nh??? c???a s??? l??m vi???c",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", ","],
    description: "M??? c??i ?????t",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "J"],
    description: "???n/hi???n Terminal",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "Shift", "P"],
    description: "M??? b???ng l???nh (Command Pallette)",
    category: "VSCode",
  },
  {
    hotkeys: ["Control", "K", "Z"],
    description: "B???t Zen Mode",
    category: "VSCode",
  },
];

export default windowsShortcutsData;
