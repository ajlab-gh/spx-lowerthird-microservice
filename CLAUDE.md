# SPX Lowerthird Microservice

## Overview
A reusable, professional broadcast graphics microservice built on SPX Graphics. Provides HTML-based lowerthirds with real-time control for live streaming and video production.

## Architecture  
- **SPX Graphics Core** - Open-source broadcast graphics platform
- **HTML/CSS/JS Templates** - Professional web-based graphics with transparency
- **NodeJS Server** - Web interface and API control
- **Browser Source Compatible** - Direct integration with OBS, vMix, CasparCG

## Key Features
- **Broadcast Quality** - Used by professional broadcasters worldwide
- **Real-time Updates** - Change text without regenerating graphics
- **Multiple Color Schemes** - DataDash (Fortinet-inspired) + Corporate themes
- **Reusable Templates** - Brand-agnostic with configurable outputs
- **Live Control** - Web interface + REST API

## Development Commands

### Local Setup
```bash
# Clone and install
git clone [repository]
cd spx-lowerthird-microservice/SPX-GC
npm install

# Start SPX server
npm start
# Access: http://localhost:5000
```

### Docker Deployment
```bash
# Build container
docker build -t spx-lowerthird-microservice .

# Run with data persistence
docker run -d -p 5000:5000 -v $(pwd)/data:/app/data spx-lowerthird-microservice
```

### Template Development
```bash
# Edit templates
./templates/datadash/lowerthird.html      # HTML template
./templates/datadash/template.json       # SPX definition
./config/color-schemes.json              # Color configurations

# Test in browser
http://localhost:5000/renderer/[project]/[template]
```

## Template Structure

### DataDash Template Features
- **Premium glass/gradient effects** with Apple-like sophistication
- **Intersecting DD logo** - modern overlapping design  
- **4 Color Themes** - cloud-blue, secure-red, sase-purple, connectivity-yellow
- **Character-by-character text reveal** with subtle glow effects
- **Professional timing** - 2.5s smooth entrance, 6s display, 1s exit

### CSS Variables
```css
--primary-color: #307FE2     /* Theme primary */
--secondary-color: #1E5AB4   /* Gradient secondary */  
--accent-color: #C8DCFF      /* Highlights */
--text-primary: #FFFFFF      /* Main text */
--text-secondary: #C8DCFF    /* Subtitle */
```

## SPX Integration

### Template Definition (template.json)
- **Field definitions** - Title, subtitle, theme selection
- **Playback settings** - Duration, commands, server config
- **UI configuration** - Control panel layout

### Control Commands
- **Play**: Animate lowerthird entrance
- **Stop**: Immediate hide/fade out
- **Update**: Change text fields in real-time

## OBS Integration

### Browser Source Setup
```
URL: http://localhost:5000/renderer/[project]/[template] 
Width: 1920
Height: 1080
CSS: body { background-color: rgba(0,0,0,0); }
```

### Live Control
1. Open SPX web interface
2. Create project and add templates
3. Control via web UI or API calls
4. Real-time updates appear in OBS

## API Usage

### Update Template Data
```bash
curl -X POST http://localhost:5000/api/v1/updateItemData \
  -H "Content-Type: application/json" \
  -d '{
    "rundownID": "project1",
    "itemID": "item1", 
    "data": {
      "f0": "Speaker Name",
      "f1": "Company Position",
      "theme": "secure-red"
    }
  }'
```

### Play/Stop Commands
```bash
# Play lowerthird
curl -X POST http://localhost:5000/api/v1/item/play/[project]/[item]

# Stop lowerthird  
curl -X POST http://localhost:5000/api/v1/item/stop/[project]/[item]
```

## Deployment Pattern

Follows 40docs microservice architecture:
- **Single container** - SPX Graphics + custom templates
- **GitHub Container Registry** compatible
- **Volume mounts** - Persistent data and templates
- **Web interface** - Browser-based control
- **REST API** - Programmatic integration

## Technical Stack
- **SPX Graphics** - NodeJS broadcast graphics platform
- **HTML5/CSS3** - Modern web graphics with transparency
- **Browser rendering** - Real-time graphics in streaming software  
- **JSON configuration** - Template definitions and color schemes

## Performance
- **Real-time rendering** - No pre-generation required
- **GPU accelerated** - Browser-based graphics acceleration
- **Low latency** - Instant text updates via API
- **Professional timing** - Broadcast-quality animation curves