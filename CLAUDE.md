# Professional Lowerthird PNG Generator

## Overview
Clean, professional tool for generating broadcast-quality lowerthird graphics as PNG sequences. Perfect for video overlay in any editing software.

## Key Features
- **4 DataDash Themes**: Fortinet-inspired color schemes
- **Professional Quality**: Broadcast-grade animations and typography  
- **PNG Sequence Output**: 150 frames (5 seconds at 30fps)
- **Transparent Background**: Clean overlay on any video
- **Easy Customization**: Simple text and theme editing

## Quick Commands

### Generate Lowerthird
```bash
# 1. Install dependencies
npm install

# 2. Start HTTP server  
python3 -m http.server 8002

# 3. Generate PNG sequence
node record-png-sequence.js
```

### Customize Text
Edit `record-png-sequence.js` around line 54:
```javascript
const testData = {
    f0: "Your Name",
    f1: "Your Position", 
    f2: "Your Company",
    f99: "themes/DataDash-CloudBlue.css"
};
```

### Available Themes
- `DataDash-CloudBlue.css` - Default professional blue
- `DataDash-SecureRed.css` - Security/alerts
- `DataDash-SASE-Purple.css` - Technical content  
- `DataDash-Connectivity-Yellow.css` - Networking topics

## Project Structure
```
├── record-png-sequence.js  # Main generator
├── lowerthird.html        # Template
├── themes/               # Color schemes
├── fonts/               # Typography
└── frames/              # Generated PNGs
```

## Output
- 150 PNG files (frame-0000.png to frame-0149.png)
- 1920x1080 resolution
- Transparent background
- Ready for video editor import

## Integration
Works with all major video editors:
- Adobe Premiere Pro (import as image sequence)
- DaVinci Resolve (30fps sequence)
- Camtasia (auto-detects sequence)
- FFmpeg command line tools