# DataDash Color Themes Guide

## Quick Theme Reference

| Theme | File | Colors | Best For |
|-------|------|--------|----------|
| **Cloud Blue** | `DataDash-CloudBlue.css` | #307FE2 → #1E5AB4 | General content, cloud security |
| **Secure Red** | `DataDash-SecureRed.css` | #DA291C → #A01E14 | Security alerts, threats |
| **SASE Purple** | `DataDash-SASE-Purple.css` | #9063CD → #644696 | SASE, SD-WAN, technical |
| **Connectivity Yellow** | `DataDash-Connectivity-Yellow.css` | #FFB900 → #C89100 | Networking, connectivity |

## How to Change Themes

### In Generator Script
Edit `record-png-sequence.js` line 54:
```javascript
const testData = {
    f0: "Your Name",
    f1: "Your Position", 
    f2: "Your Company",
    f99: "themes/DataDash-SecureRed.css"  // 👈 Change this line
};
```

### Create Custom Theme

1. **Copy existing theme:**
```bash
cp themes/DataDash-CloudBlue.css themes/MyCustom-Theme.css
```

2. **Edit the colors:**
```css
:root {
    --theme-lite-color: #YOUR_PRIMARY;    /* Main background gradient start */
    --theme-dark-color: #YOUR_DARK;       /* Main background gradient end */
    --theme-brandColor: #YOUR_ACCENT;     /* Subtitle background & accents */
}
```

3. **Use your theme:**
```javascript
f99: "themes/MyCustom-Theme.css"
```

## Color Variables Explained

```css
:root {
    /* Primary gradient (main title background) */
    --theme-lite-color: #307FE2;     /* Gradient start (lighter) */
    --theme-dark-color: #1E5AB4;     /* Gradient end (darker) */
    
    /* Accent colors */
    --theme-brandColor: #C8DCFF;     /* Subtitle background */
    --theme-tickerBack: white;       /* Ticker background */
    
    /* Layout */
    --theme-accent-width: 0.5vw;     /* Left border width */
    --theme-ticker-height: 4.7vh;    /* Ticker height */
}
```

## Fortinet Brand Colors

The DataDash themes are inspired by Fortinet's brand palette:

| Fortinet Name | Hex Code | DataDash Theme |
|---------------|----------|----------------|
| Cloud Blue | #307FE2 | DataDash-CloudBlue |
| Secure Red | #DA291C | DataDash-SecureRed |
| SASE Purple | #9063CD | DataDash-SASE-Purple |
| Connectivity Yellow | #FFB900 | DataDash-Connectivity-Yellow |

## Design Tips

### Professional Look
- Use **Cloud Blue** for general business content
- Choose **Secure Red** for security/alert topics
- Pick **SASE Purple** for technical deep dives
- Select **Connectivity Yellow** for networking content

### Custom Colors
- Keep high contrast between `--theme-lite-color` and text
- Make `--theme-brandColor` complement your primary color
- Test readability with your specific text content
- Maintain professional appearance with subtle gradients

### Color Accessibility
- Ensure sufficient contrast for text readability
- Test on different screen types/brightness
- Consider colorblind-friendly combinations
- Stick to established brand guidelines when possible