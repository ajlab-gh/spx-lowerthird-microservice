# Professional Lowerthird PNG Generator

🎬 **Generate professional lowerthird graphics as PNG sequences for video overlay**

A clean, simple tool for creating broadcast-quality lowerthird graphics with customizable text and professional color themes.

## ✨ Features

- **Professional Quality**: Broadcast-grade animations and typography
- **4 DataDash Themes**: Cloud Blue, Secure Red, SASE Purple, Connectivity Yellow
- **Transparent PNGs**: Perfect for video overlay in any editor
- **Customizable Text**: Name, position, company/topic fields
- **30fps Output**: 150 frames (5 seconds) for smooth animation

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start HTTP Server
```bash
python3 -m http.server 8002
```

### 3. Generate Your Lowerthird
```bash
node record-png-sequence.js
```

### 4. Find Your PNGs
Your 150 PNG files will be in the `frames/` folder, ready for video editing!

## ✏️ Customizing Your Text

Edit the text in `record-png-sequence.js` around line 54:

```javascript
const testData = {
    f0: "Your Name Here",           // Main title
    f1: "Your Position",            // Subtitle line 1  
    f2: "Your Company",             // Subtitle line 2
    f99: "themes/DataDash-CloudBlue.css"  // Theme file
};
```

**Example:**
```javascript
const testData = {
    f0: "Sarah Johnson",
    f1: "Senior Security Engineer", 
    f2: "Fortinet Technologies",
    f99: "themes/DataDash-SecureRed.css"
};
```

## 🎨 Available Themes

### Cloud Blue (Default)
```javascript
f99: "themes/DataDash-CloudBlue.css"
```
- **Use for**: General content, cloud security topics
- **Colors**: Professional blue gradient (#307FE2)

### Secure Red
```javascript
f99: "themes/DataDash-SecureRed.css"
```
- **Use for**: Security alerts, threat intelligence
- **Colors**: Bold red gradient (#DA291C)

### SASE Purple
```javascript
f99: "themes/DataDash-SASE-Purple.css"
```
- **Use for**: SASE, SD-WAN, technical deep dives
- **Colors**: Modern purple gradient (#9063CD)

### Connectivity Yellow
```javascript
f99: "themes/DataDash-Connectivity-Yellow.css"
```
- **Use for**: Networking content, connectivity topics
- **Colors**: Bright yellow gradient (#FFB900)

## 🎥 Using in Video Editors

### Import PNG Sequence

**Adobe Premiere Pro:**
1. File → Import → Select first frame (`frame-0000.png`)
2. Check "Image Sequence" 
3. Set frame rate to 30fps
4. Drag to timeline above your video

**DaVinci Resolve:**
1. Import all PNG files to Media Pool
2. Right-click → "Change Clip Frame Rate" → 30fps
3. Drag to timeline as overlay

**Camtasia:**
1. Import all PNGs to library
2. Drag to timeline above your video
3. Camtasia auto-detects sequence

### FFmpeg Command Line
```bash
# Create MP4 from PNG sequence
ffmpeg -framerate 30 -i frames/frame-%04d.png -c:v libx264 -pix_fmt yuv420p lowerthird.mp4

# Overlay on existing video  
ffmpeg -i your-video.mp4 -i lowerthird.mp4 -filter_complex "[0:v][1:v] overlay=0:H-h-50" output.mp4
```

## 🛠️ Advanced Customization

### Creating Custom Themes

1. Copy an existing theme file:
```bash
cp themes/DataDash-CloudBlue.css themes/MyCustom-Theme.css
```

2. Edit the CSS variables:
```css
:root {
    --theme-lite-color: #YOUR_PRIMARY_COLOR;
    --theme-dark-color: #YOUR_DARK_COLOR;
    --theme-brandColor: #YOUR_ACCENT_COLOR;
}
```

3. Use your theme:
```javascript
f99: "themes/MyCustom-Theme.css"
```

### Modifying Animation Timing

Edit `lowerthird.html` around line 87 to adjust animation speeds:

```javascript
var timeline = anime.timeline({
    easing: 'easeOutCubic',
    duration: 800  // Animation speed in milliseconds
})
```

### Changing Fonts

Replace font files in the `fonts/` folder and update CSS references in your theme files.

## 📁 Project Structure

```
professional-lowerthird/
├── README.md              # This file
├── package.json           # Dependencies
├── record-png-sequence.js # Main generator script
├── lowerthird.html        # Template file
├── themes/                # Color themes
│   ├── DataDash-CloudBlue.css
│   ├── DataDash-SecureRed.css
│   ├── DataDash-SASE-Purple.css
│   └── DataDash-Connectivity-Yellow.css
├── fonts/                 # Typography assets
├── css/                   # Base styles
├── js/                    # Animation libraries
└── frames/                # Generated PNGs (after running)
```

## 🔧 Technical Specifications

- **Output**: 150 PNG files, 1920x1080 resolution
- **Duration**: 5 seconds at 30fps
- **Background**: Transparent for clean overlay
- **Animation**: Professional easing curves
- **Browser**: Uses Puppeteer (Chrome-based rendering)

## 🆘 Troubleshooting

**"Cannot find module" error:**
```bash
npm install
```

**Server won't start:**
```bash
# Try different port
python3 -m http.server 8003
# Update port in record-png-sequence.js line 12
```

**Blank/black PNGs:**
- Check that HTTP server is running on correct port
- Verify theme file path is correct
- Ensure all dependencies are installed

**Animation too fast/slow:**
- Edit duration in `lowerthird.html` animation timeline
- Adjust frame count in `record-png-sequence.js`

## 📄 License

MIT License - feel free to customize and use for your projects!

---

**Need help?** Check the project issues or create a new one with your question.