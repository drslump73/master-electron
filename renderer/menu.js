const { remote, shell } = require("electron");

const template = [
  {
    label: "Items",
    submenu: [
      {
        label: "Add New",
        click: window.newItem,
        accelerator: 'CmdOrCtrl+O'
      },
      {
        label: "Open Item",
        click: window.openItem,
        accelerator: 'CmdOrCtrl+Enter'
      },
      {
        label: "Delete Item",
        click: window.deleteItem,
        accelerator: 'CmdOrCtrl+Backspace'
      },
      {
        label: "Open in Browser",
        click: window.openItemNative,
        accelerator: 'CmdOrCtrl+Shift+O'
      },
      {
        label: "Search Item",
        click: window.searchItem,
        accelerator: 'CmdOrCtrl+S'
      },
    ]
  },
  {
    role: "editMenu"
  },
  {
    role: "windowMenu"
  },
  {
    role: "help",
    submenu: [
      {
        label: "Learn more",
        click: () => {
          shell.openExternal("https://www.fromjapan.co.jp");
        }
      }
    ]
  }
];

if (process.platform === "darwin") {
  template.unshift({
    label: remote.app.getName(),
    submenu: [
      { role: "about" },
      { type: "separator" },
      { role: "services" },
      { type: "separator" },
      { role: "hide" },
      { role: "hideothers" },
      { role: "unhide" },
      { type: "separator" },
      { role: "quit" }
    ]
  });
}

const menu = remote.Menu.buildFromTemplate(template);

remote.Menu.setApplicationMenu(menu);
