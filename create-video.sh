#!/bin/bash

# Professional Lowerthird Video Creator
# Converts PNG sequence to MP4 video

echo "🎬 Creating video from PNG sequence..."

# Check if FFmpeg is available
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg not found!"
    echo ""
    echo "To install FFmpeg:"
    echo "  sudo apt update && sudo apt install ffmpeg"
    echo ""
    echo "Or use alternative methods below 👇"
    exit 1
fi

# Check if frames directory exists
if [ ! -d "frames" ]; then
    echo "❌ frames/ directory not found!"
    echo "Run: node record-png-sequence.js first"
    exit 1
fi

# Count PNG files
frame_count=$(ls frames/frame-*.png 2>/dev/null | wc -l)
echo "📁 Found $frame_count PNG frames"

if [ $frame_count -eq 0 ]; then
    echo "❌ No PNG frames found in frames/ directory"
    exit 1
fi

# Create video with transparent background preserved
echo "🎞️ Creating MP4 with transparency support..."
ffmpeg -y \
    -framerate 30 \
    -i frames/frame-%04d.png \
    -c:v libx264 \
    -pix_fmt yuv420p \
    -preset medium \
    -crf 18 \
    lowerthird.mp4

if [ $? -eq 0 ]; then
    echo "✅ Video created successfully!"
    echo "📽️ Output: lowerthird.mp4"
    echo "📏 Duration: 5 seconds (150 frames at 30fps)"
    echo "📐 Resolution: 1920x1080"
    
    # Show file info
    ls -lh lowerthird.mp4
    
    echo ""
    echo "🎯 Next steps:"
    echo "  • Play video: vlc lowerthird.mp4"
    echo "  • Use in video editor as overlay"
    echo "  • Copy to your video projects folder"
else
    echo "❌ Video creation failed"
    exit 1
fi