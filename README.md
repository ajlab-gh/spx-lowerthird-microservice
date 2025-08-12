# SPX Lowerthird Microservice

A reusable SPX Graphics-based microservice for generating professional broadcast-quality lowerthird graphics. Built on the open-source SPX Graphics platform with customizable color schemes and branding.

## Features

- **Professional Broadcast Quality** - Built on SPX Graphics platform used by broadcasters
- **Live HTML Graphics** - Real-time browser-source compatible lowerthirds
- **Customizable Color Schemes** - Support for multiple brand color palettes
- **OBS/vMix Integration** - Browser source compatibility for live streaming
- **Reusable Templates** - Brand-agnostic templates with configurable outputs

## Supported Color Schemes

### DataDash (Fortinet-Inspired)
- **Cloud Blue**: RGB(48, 127, 226) #307FE2
- **Secure Red**: RGB(218, 41, 28) #DA291C  
- **SASE Purple**: RGB(144, 99, 205) #9063CD
- **Connectivity Yellow**: RGB(255, 185, 0) #FFB900

### Default Corporate
- **Primary**: Professional blue/gray palette
- **Secondary**: Complementary accent colors

## Architecture

Built on SPX Graphics Controller:
- **NodeJS Server** - Web-based control interface
- **HTML/CSS/JS Templates** - Professional web-based graphics
- **Multi-layer Support** - 20+ simultaneous graphics layers
- **Real-time Control** - Live updates without regeneration

## Quick Start

### Prerequisites
- NodeJS (v14+)
- npm
- OBS Studio or compatible streaming software

### Installation
```bash
# Clone repository
git clone [repository-url]
cd spx-lowerthird-microservice

# Install SPX Graphics
cd SPX-GC
npm install

# Start SPX server
npm start
```

### Usage
1. Open SPX Graphics web interface (typically http://localhost:5000)
2. Load lowerthird templates
3. Configure brand colors and text
4. Add browser source in OBS pointing to template URL

## Template Customization

Templates support configurable:
- **Brand Colors** - CSS variable-based theming
- **Logo/Branding** - SVG or image assets
- **Typography** - Font family and sizing
- **Animation Timing** - Professional motion graphics

## Integration

### OBS Studio
```
Add Browser Source:
URL: http://localhost:5000/renderer/[template-id]
Width: 1920
Height: 1080
```

### API Control
```javascript
// Update lowerthird text
fetch('http://localhost:5000/api/v1/updateItemData', {
  method: 'POST',
  body: JSON.stringify({
    rundownID: 'project1',
    itemID: 'item1',
    data: {
      title: 'Speaker Name',
      subtitle: 'Company Position'
    }
  })
})
```

## Development

### Project Structure
```
spx-lowerthird-microservice/
├── SPX-GC/                    # SPX Graphics core
├── templates/                 # Custom lowerthird templates
│   ├── datadash/             # DataDash branded templates
│   └── corporate/            # Generic corporate templates
├── assets/                   # Logos, fonts, images
└── config/                   # Color schemes and presets
```

### Creating New Templates
1. Add HTML template in `templates/[brand]/`
2. Define template.json with fields and settings
3. Add CSS with color scheme variables
4. Test in SPX Graphics interface

## Deployment

### Docker (Recommended)
```bash
docker build -t spx-lowerthird-microservice .
docker run -p 5000:5000 spx-lowerthird-microservice
```

### Production Setup
- Reverse proxy for HTTPS
- Process management (PM2)
- Database for persistent projects

## Technical Specifications

- **Output**: 1920x1080 HD browser graphics
- **Formats**: HTML5 with alpha transparency
- **Compatibility**: OBS, vMix, CasparCG, Wirecast
- **Performance**: Real-time rendering, no pre-generation
- **Control**: Web-based interface + REST API

## License

Built on SPX Graphics (MIT License). See SPX-GC/LICENSE for details.