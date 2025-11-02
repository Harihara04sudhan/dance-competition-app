# 🎥 Demo Video Recording Guide

## 📹 Requirements

- **Format**: `.mp4` (H.264 codec, AAC audio)
- **Duration**: 2 minutes (120 seconds)
- **Resolution**: 1080p or higher
- **Frame Rate**: 30 fps minimum
- **Audio**: Clear, professional quality
- **Content**: Feature demonstration + code walkthrough

## 📋 Script Outline (2 minutes)

### Opening (0:00-0:15) - 15 seconds
```
"Hello, this is the Dance Competition Mobile App, built with React Native, 
TypeScript, and Supabase. This app demonstrates modern mobile development 
practices with real-time data fetching, authentication, and a TikTok-style 
video feed for dance competitions."
```

### Feature Demo (0:15-1:30) - 75 seconds

#### Part 1: Authentication (0:15-0:30)
```
"Let me start by showing the authentication system. I'll navigate to the 
registration screen and create an account."

Actions:
- Click "Don't have an account? Sign up"
- Fill in registration form
- Show form validation
- Click Sign Up
- Show success message
- Return to login screen
```

#### Part 2: Login (0:30-0:45)
```
"Now I'll log in with my credentials."

Actions:
- Enter email and password
- Click Login button
- Show loading state
- Navigate to Video Feed
- Show tab navigation
```

#### Part 3: Video Feed (0:45-1:15)
```
"This is the main video feed. You can see I have a vertical scrolling 
layout with full-screen videos from external URLs. Each video shows the 
performer's name, title, and description. I can like videos and view 
engagement metrics."

Actions:
- Show first video playing
- Demonstrate play/pause controls
- Show video info overlay
- Show like button and view counter
- Scroll to next video
- Demonstrate smooth pagination
- Scroll through 2-3 videos
```

#### Part 4: Leaderboard (1:15-1:30)
```
"Now let me show the leaderboard. Here we can see the top performers 
ranked by score. The top 3 have special badges - gold, silver, and bronze. 
Each entry shows the username, video title, score, and vote count."

Actions:
- Tap Leaderboard tab
- Show leaderboard header
- Highlight ranking badges
- Scroll through entries
- Point out score display
```

### Code Structure (1:30-1:55) - 25 seconds
```
"Let me quickly walk through the code structure. The app follows a clean 
architecture pattern with separate folders for screens, navigation, hooks, 
services, and types."

Actions:
- Open project structure in IDE
- Show folder hierarchy
- Point to key files:
  - src/screens/ - All screen components
  - src/navigation/AppNavigator - Navigation setup
  - src/hooks/useAuth - Auth state management
  - src/config/supabase - Backend config
- Briefly mention React Query for data fetching
- Show type definitions
```

### Key Technologies (1:55-2:00) - 5 seconds
```
"The app is built with React Native, Expo, TypeScript, React Query, and 
Supabase. All code is published on GitHub."

Actions:
- Show GitHub repository URL
- Display README on screen
- Show tech stack section
```

---

## 🎬 Recording Tools

### Option 1: Built-in Screen Recording

**macOS**:
```bash
# Use QuickTime Player
# File > New Screen Recording
```

**Windows**:
```bash
# Use Xbox Game Bar
# Press Windows + G
```

**Linux**:
```bash
# Install OBS or SimpleScreenRecorder
sudo apt install obs-studio
```

### Option 2: OBS Studio (Recommended)

Download: https://obsproject.com/

**Setup**:
1. Install OBS Studio
2. Create new scene
3. Add display capture or window capture
4. Set resolution to 1920x1080
5. Set frame rate to 30 fps
6. Add audio source (system audio)
7. Start recording

### Option 3: Screen Recording Apps

- **macOS**: ScreenFlow, Camtasia, CleanMyMac
- **Windows**: Camtasia, Snagit, Bandicam
- **Linux**: SimpleScreenRecorder, Kazam

---

## 📱 What to Show

### Screen 1: Login (15 seconds)
```
✓ Clean login interface
✓ Email and password fields
✓ Form validation on empty fields
✓ Transition to dashboard
✓ Show purple color scheme
```

### Screen 2: Video Feed (45 seconds)
```
✓ Full-screen video playback
✓ Video controls (play/pause)
✓ Username and video title
✓ Like button functionality
✓ View count
✓ Smooth vertical scrolling
✓ Multiple videos with different content
✓ Responsive layout
```

### Screen 3: Leaderboard (15 seconds)
```
✓ Ranking display (1-5+)
✓ Rank badges (🥇 🥈 🥉)
✓ User scores
✓ Vote counts
✓ Smooth scrolling
```

### Screen 4: Code (25 seconds)
```
✓ Project folder structure
✓ Key files and their purposes
✓ TypeScript type definitions
✓ React Query usage
✓ Supabase configuration
```

---

## 🎙️ Audio Tips

### Recording Audio
- Use external microphone for better quality
- Find quiet environment
- Speak clearly and at natural pace
- Record at consistent volume
- Add background music (optional, copyright-free)

### Audio Editing
```bash
# Using FFmpeg to add background music
ffmpeg -i demo_video.mp4 -i background_music.mp3 -filter_complex \
"[1:a]volume=0.3[a1];[0:a][a1]amix=inputs=2:duration=first[a]" \
-map 0:v -map "[a]" -c:v copy -c:a aac output.mp4
```

---

## 🎨 Visual Presentation

### Tips for Better Look
- Clean desktop with no distractions
- Close unnecessary browser tabs
- Hide sensitive information
- Use high contrast colors
- Ensure text is readable at 1080p
- Smooth mouse movements
- Zoom in on important UI elements

### Highlight Important Features
- Use arrow pointers
- Circle buttons before clicking
- Pause on key screens
- Use text overlays for callouts
- Add transitions between sections

---

## ✂️ Post-Production

### Video Editing Tools
- **DaVinci Resolve** (Free & Professional)
- **CapCut** (Simple & Fast)
- **Adobe Premiere** (Professional)
- **Final Cut Pro** (macOS)

### Editing Steps
1. Import recorded video
2. Trim to exactly 2 minutes
3. Cut out any mistakes
4. Add intro text (app name, your name)
5. Add title cards for sections
6. Add background music (copyright-free)
7. Add captions/subtitles
8. Color correct if needed
9. Export as MP4 (H.264, AAC)

### Title Card Template
```
┌─────────────────────────┐
│  Dance Competition App  │
│    React Native Demo    │
│   Competency Assessment │
└─────────────────────────┘
```

---

## 📊 Recommended Video Settings

| Setting | Value |
|---------|-------|
| Codec | H.264 |
| Container | MP4 |
| Resolution | 1920x1080 (1080p) |
| Frame Rate | 30 fps |
| Bitrate | 5000-8000 kbps |
| Audio Codec | AAC |
| Audio Bitrate | 128-192 kbps |
| Sample Rate | 44.1 kHz or 48 kHz |

---

## 🔄 Recording Workflow

### Step 1: Preparation (5 min)
```bash
# Start the app
cd dance-competition-app
npx expo start --web

# Open in browser
# Navigate to http://localhost:8081
```

### Step 2: Recording (3-5 min)
```bash
# Start screen recording
# Use OBS or built-in tools
# Follow the script outline above
```

### Step 3: Review (2 min)
- Check audio clarity
- Verify video quality
- Confirm all features shown
- Check duration (should be ~2 minutes)

### Step 4: Editing (10-15 min)
- Trim to exactly 2 minutes
- Remove errors/pauses
- Add intro and outro
- Export as MP4

### Step 5: Verification
- Open MP4 in video player
- Confirm plays smoothly
- Check audio quality
- Verify file size < 100MB
- Test on different devices

---

## 💾 Export Instructions

### Using FFmpeg
```bash
# Create MP4 from screen recording
ffmpeg -i input.mov -c:v libx264 -preset fast -crf 18 \
-c:a aac -b:a 128k -r 30 -s 1920x1080 demo.mp4

# Cut to exactly 120 seconds
ffmpeg -i demo.mp4 -t 120 -c copy demo_2min.mp4

# Verify output
ffprobe demo_2min.mp4
```

### Using OBS
1. File > Export Video
2. Choose MP4 format
3. Set H.264 codec
4. Set quality to high
5. Include audio
6. Save as `dance-app-demo.mp4`

---

## 📤 Upload to GitHub

### Create Release with Video
```bash
# Create git tag
git tag -a v1.0.0 -m "Initial release with demo video"

# Add binary file
git lfs install
git lfs track "*.mp4"

# Or upload to GitHub Releases
# Go to: https://github.com/Harihara04sudhan/dance-competition-app/releases
# Create new release
# Upload demo.mp4 file
```

---

## ✅ Final Checklist

Before submitting, verify:
- [ ] Video is exactly 2 minutes (120 seconds)
- [ ] Format is MP4 with H.264 codec
- [ ] Resolution is 1080p or higher
- [ ] Audio is clear and audible
- [ ] All features are demonstrated
- [ ] Code structure is explained
- [ ] Video file size < 100MB
- [ ] No sensitive information visible
- [ ] Professional appearance
- [ ] Grammar and speech correct
- [ ] Video plays on all devices
- [ ] File uploaded to GitHub

---

## 🎯 Success Criteria

The demo video successfully demonstrates:
✅ Working application with all features
✅ Clean user interface
✅ Smooth navigation and interactions
✅ Authentication flow
✅ Video feed with vertical scrolling
✅ Leaderboard functionality
✅ Professional presentation
✅ Code structure explanation
✅ Technical knowledge
✅ Communication skills

---

## 🔗 Resources

- OBS Studio: https://obsproject.com/
- FFmpeg: https://ffmpeg.org/
- DaVinci Resolve: https://www.blackmagicdesign.com/
- Copyright-free Music: https://incompetech.com/
- YouTube Encoding Guide: https://support.google.com/youtube/
