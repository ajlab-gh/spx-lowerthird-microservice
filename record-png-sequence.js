const path = require('path');
const fs = require('fs');

async function recordPNGSequence() {
    try {
        // Import puppeteer dynamically to handle missing dependency gracefully
        const puppeteer = require('puppeteer');
        
        console.log('🎬 Starting PNG sequence recording...');
        
        // Create frames directory
        const framesDir = path.join(__dirname, 'frames');
        if (!fs.existsSync(framesDir)) {
            fs.mkdirSync(framesDir);
            console.log('📁 Created frames directory');
        }
        
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--disable-gpu'
            ]
        });
        
        const page = await browser.newPage();
        
        // Set viewport to match video dimensions
        await page.setViewport({ 
            width: 1920, 
            height: 1080,
            deviceScaleFactor: 1
        });
        
        console.log('🌐 Navigating to template...');
        
        // Navigate to enhanced template
        await page.goto('http://localhost:8002/templates/datadash/enhanced-professional-lowerthird.html', {
            waitUntil: 'networkidle0',
            timeout: 30000
        });
        
        // Wait for fonts and CSS to load
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        console.log('🎨 Setting up test data...');
        
        // Trigger the lowerthird animation
        await page.evaluate(() => {
            const testData = {
                f0: "Tech Expert",
                f1: "Senior Engineer", 
                f2: "Leading Edge Tech",
                f3: "unified",
                f99: "../../themes/DataDash-CloudBlue.css"
            };
            
            // Update data
            if (window.update) {
                window.update(JSON.stringify(testData));
            } else if (window.runTemplateUpdate) {
                window.runTemplateUpdate();
            }
            
            // Trigger animation IN
            if (window.runAnimationIN) {
                window.runAnimationIN();
            }
        });
        
        console.log('📸 Recording PNG sequence...');
        
        // Record animation frames (5 seconds at 30fps = 150 frames)
        const totalFrames = 150;
        const frameDuration = 1000 / 30; // 30fps
        
        for (let i = 0; i < totalFrames; i++) {
            const frameNumber = i.toString().padStart(4, '0');
            const framePath = path.join(framesDir, `frame-${frameNumber}.png`);
            
            await page.screenshot({ 
                path: framePath,
                omitBackground: true, // Transparent background
                fullPage: false
            });
            
            // Progress indicator
            if (i % 30 === 0) {
                console.log(`📹 Recorded ${i}/${totalFrames} frames (${Math.round(i/totalFrames*100)}%)`);
            }
            
            // Wait for next frame
            await new Promise(resolve => setTimeout(resolve, frameDuration));
        }
        
        await browser.close();
        
        console.log('✅ PNG sequence recording complete!');
        console.log(`📁 Created ${totalFrames} frames in: ${framesDir}`);
        console.log('');
        console.log('🎯 Next steps:');
        console.log('1. Use FFmpeg to create video: ffmpeg -framerate 30 -i frames/frame-%04d.png -c:v libx264 -pix_fmt yuv420p lowerthird.mp4');
        console.log('2. Or use in video editor by importing frame sequence');
        console.log('3. Or overlay on existing video: ./overlay-video.sh your-video.mp4 output.mp4');
        
    } catch (error) {
        if (error.code === 'MODULE_NOT_FOUND' && error.message.includes('puppeteer')) {
            console.error('❌ Puppeteer is not installed!');
            console.log('');
            console.log('📦 To install Puppeteer, run:');
            console.log('   npm install puppeteer');
            console.log('');
            console.log('⚠️  Note: Puppeteer will download Chromium (~170MB)');
            console.log('   This may take a few minutes on first install.');
        } else {
            console.error('❌ Error recording PNG sequence:', error.message);
            console.log('');
            console.log('🔧 Troubleshooting:');
            console.log('1. Make sure HTTP server is running: python3 -m http.server 8002');
            console.log('2. Check if template loads in browser: http://localhost:8002/lowerthird.html');
            console.log('3. Ensure all dependencies are installed: npm install');
        }
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    recordPNGSequence().catch(console.error);
}

module.exports = { recordPNGSequence };
