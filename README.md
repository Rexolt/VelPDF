# VelPDF - Electron-based PDF Reader

**VelPDF** is a modern, Electron-powered PDF reader that uses Mozilla’s **PDF.js** for rendering. It provides a fast, lightweight, and user-friendly experience for viewing PDFs on Windows, macOS, and Linux.



---

## 🚀 Features
- **Modern and intuitive UI**
- **Offline functionality**
- **Fast and lightweight PDF rendering**
- **Dark mode support**
- **Annotation and highlighting** (coming soon!)
- **Multi-tab PDF viewing** (coming soon!)
- **Cloud integration (Google Drive, Dropbox)** (planned)

---

## 📦 Installation & Usage

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/VelPDF.git
cd VelPDF
```
### **2️⃣ Install Dependencies**
```bash
npm install
```
### **3️⃣ Run the Application**
```bash
npm start
```
## ⚙️ Development Guide

*To modify or contribute to the project, follow these steps:*

### 1️⃣ Build PDF.js

*Before running the application, you need to build the PDF.js viewer:*
```bash
gulp generic
```
### 2️⃣ Start the Electron App
```bash
npm start
```
### 3️⃣ Modifying the Viewer

-The main UI and controls are located in ```web/viewer.html```.
    -If you want to customize the appearance, ```modify web/viewer.css```.
    -For functionality changes, edit ```web/viewer.js```.

### 💾 Packaging & Distribution

To build a **distributable** version for Windows, macOS, and Linux:
```bash
npm run build

```
The installer files will be generated in the ```dist/``` directory.

### 📜 License

### ***This project is licensed under the Apache 2.0 License.***
