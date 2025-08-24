# TestFunc Plugin

**TestFunc** is a sample plugin built for the **Axeron Manager** plugin system.  
It demonstrates how to structure and configure a plugin using `axplugin.toml` with assets, scripts, and optional binaries.

---

## 📂 Project Structure

```
TestFunc/
 ├─ .axignore              # Files to be ignored by plugin loader
 ├─ axplugin.toml          # Main configuration file for the plugin
 ├─ banner.png             # Plugin banner/icon
 ├─ main.html              # HTML UI entry point
 ├─ main.js                # Main JavaScript logic
 ├─ test.js                # Additional script
 ├─ bin/                   # Example binary/script folder
 └─ TestIgnoredFolder/bin/ # Nested binary folder
```

---

## ⚙️ Plugin Configuration

The plugin metadata and configuration are defined in **`axplugin.toml`**.  
Example fields include:

```toml
[plugin]
id = "testfunc"
name = "TestFunc"
version = "1.0.0"
author = "FahrezONE"
description = "A sample plugin demonstrating Axeron Manager structure."
```

---

## 🚀 How to Use

1. Place the `TestFunc/` folder inside your Axeron Manager `plugins/` directory.
2. Launch Axeron Manager.
3. The plugin should appear with its banner and metadata.
4. Run the plugin from the Axeron Manager UI.

---

## 🧩 Features

- **HTML + JS UI** via `main.html` and `main.js`.
- **Plugin metadata** with `axplugin.toml`.
- **Binary files support** inside `bin/` folder.
- **Ignore support** via `.axignore`.

---

## 📌 Notes

- Files listed in `.axignore` will not be included in plugin packaging or runtime.
- `.bak` files are just backups, not loaded by default.
- This plugin is for demonstration purposes only.

---

## 📜 License

This project is open source under the **Apache 2.0 License**.  
Feel free to explore, modify, and build upon it.
