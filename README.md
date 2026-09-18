# 🚀 Pro Launcher New Tab

A lightweight and customizable **Chrome New Tab Extension** that provides a clean Google-style new tab page with custom shortcuts, most visited websites, and persistent local storage.

![Version](https://img.shields.io/badge/version-1.0-blue)
![Manifest](https://img.shields.io/badge/Manifest-V3-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green)

---

## 📌 Overview

**Pro Launcher New Tab** replaces the default Chrome New Tab page with a simple and customizable launcher.

The extension allows you to:

* 🔗 Create your own website shortcuts
* 🗑️ Remove custom shortcuts
* ⭐ View your most visited websites
* 💾 Persist shortcuts using Chrome Storage
* 🔍 Search the web directly from the new tab page
* 🌐 Automatically display website favicons
* 🌓 Support light and dark mode based on the system theme

The project was built as a practical JavaScript project to explore **Chrome Extension APIs, DOM manipulation, local storage, and frontend UI development**.

---

## ✨ Features

### 🔗 Custom Shortcuts

Create your own shortcuts by providing:

* Website name
* Website URL

Example:

```text
Name: GitHub
URL: github.com
```

The extension automatically adds `https://` when it is not provided.

---

### ⭐ Most Visited Websites

The **Most Visited** section uses Chrome's `topSites` API to display frequently visited websites.

Up to **12 websites** are displayed.

---

### 🗑️ Delete Shortcuts

Custom shortcuts can be removed directly from the launcher.

The delete button appears when hovering over a shortcut.

---

### 💾 Persistent Storage

Custom shortcuts and the selected launcher mode are stored using:

```javascript
chrome.storage.local
```

This means your shortcuts remain available when you reopen Chrome.

---

### 🔍 Google Search

The search bar allows you to search Google directly from the new tab page.

For example:

```text
javascript tutorial
```

will open a Google search for the entered query.

---

### 🌐 Website Favicons

Website icons are automatically loaded using Chrome's favicon functionality.

This makes shortcuts easier to recognize visually.

---

### 🌓 Dark Mode

The interface automatically adapts to the operating system's light/dark preference using:

```css
@media (prefers-color-scheme: dark)
```

---

## 🛠️ Technologies Used

| Technology                    | Purpose                       |
| ----------------------------- | ----------------------------- |
| HTML5                         | Page structure                |
| CSS3                          | Styling and responsive layout |
| JavaScript ES6+               | Application logic             |
| Chrome Extensions Manifest V3 | Extension configuration       |
| Chrome Storage API            | Saving user shortcuts         |
| Chrome Top Sites API          | Most visited websites         |
| Chrome Favicon API            | Website icons                 |

---

## 📁 Project Structure

```text
pro-launcher-new-tab/
│
├── manifest.json
├── newtab.html
├── style.css
├── script.js
│
└── README.md
```

### Main Files

#### `manifest.json`

Defines the Chrome extension configuration, permissions, and New Tab override.

#### `newtab.html`

Contains the main UI:

* Navigation
* Search bar
* Shortcut controls
* Shortcut container
* Add shortcut modal

#### `style.css`

Contains the complete styling and theme configuration.

#### `script.js`

Handles:

* Shortcut management
* Chrome Storage
* Most visited websites
* Search
* Favicon loading
* Add/Delete functionality
* UI interaction

---

## 🚀 Installation

Since this project is currently in development, it can be installed manually as an unpacked Chrome extension.

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/pro-launcher-new-tab.git
```

### 2. Open Chrome Extensions

Go to:

```text
chrome://extensions/
```

### 3. Enable Developer Mode

Enable:

```text
Developer mode
```

from the top-right corner.

### 4. Load the Extension

Click:

```text
Load unpacked
```

Then select the project folder.

### 5. Open a New Tab

Open a new Chrome tab and the Pro Launcher page should appear automatically.

---

## 📸 Preview

Add screenshots of the extension here:

```text
docs/
├── homepage.png
├── custom-shortcuts.png
└── most-visited.png
```

Example:

![Pro Launcher Preview](docs/homepage.png)

---

## 🎯 Version 1.0

The first version focuses on the core functionality of a customizable Chrome launcher.

### Included

* [x] Custom shortcuts
* [x] Add shortcuts
* [x] Delete shortcuts
* [x] Most visited websites
* [x] Google search
* [x] Persistent storage
* [x] Website favicons
* [x] Dark mode
* [x] Manifest V3

---

## 🔮 Future Improvements

Planned improvements for future versions include:

* [ ] Edit existing shortcuts
* [ ] Drag & Drop shortcut reordering
* [ ] Shortcut folders
* [ ] Better URL validation
* [ ] Settings page
* [ ] Theme customization
* [ ] Import / Export shortcuts
* [ ] Chrome Storage Sync
* [ ] Clock and date widget
* [ ] Weather widget
* [ ] To-Do list
* [ ] Notes
* [ ] Improved accessibility
* [ ] Improved project architecture

---

## 🧠 What I Learned

This project helped me practice and understand:

* Chrome Extension development
* Manifest V3
* Browser APIs
* DOM manipulation
* Event handling
* Form handling
* JavaScript state management
* Local storage
* Responsive UI design
* Working with external URLs
* Dynamic DOM creation

---

## 🔐 Permissions

The extension currently uses the following Chrome permissions:

```json
{
  "permissions": [
    "topSites",
    "favicon",
    "storage"
  ]
}
```

These permissions are used to:

* Access frequently visited websites
* Load website favicons
* Save custom shortcut data

---

## 👨‍💻 Author

**Thomas Amir**

Built as a practical Chrome Extension project while learning and improving JavaScript and web development.

---

⭐ If you find this project useful or interesting, feel free to star the repository.
