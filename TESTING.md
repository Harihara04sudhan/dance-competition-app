# 🧪 Testing Guide - Dance Competition App

This guide covers how to test all features of the Dance Competition mobile app.

## 🚀 Quick Start Testing

### 1. Start the Development Server

```bash
cd dance-competition-app
npm install
npx expo start --web
```

Then open http://localhost:8081 in your browser.

## 📋 Test Scenarios

### Test 1: Registration & Authentication Flow

**Objective**: Verify user registration and account creation works properly

**Steps**:
1. Launch the app - you should see the **Login Screen**
2. Tap "Don't have an account? Sign up" link
3. Fill in the registration form:
   - Username: `testuser123`
   - Email: `test@example.com`
   - Password: `testpass123`
4. Tap "Sign Up" button
5. Verify success message appears

**Expected Results**:
- ✅ Form validates all fields are filled
- ✅ Password validation (minimum 6 characters)
- ✅ Success alert shown
- ✅ Redirected to Login screen

**Edge Cases to Test**:
- [ ] Empty email field - should show error
- [ ] Invalid email format - should show error
- [ ] Password less than 6 characters - should show error
- [ ] Email already exists - should show error

---

### Test 2: User Login

**Objective**: Verify login functionality works correctly

**Steps**:
1. On Login screen, enter credentials:
   - Email: `test@example.com`
   - Password: `testpass123`
2. Tap "Login" button
3. Wait for authentication
4. Verify app navigates to main dashboard

**Expected Results**:
- ✅ Login button shows loading state
- ✅ User authenticated successfully
- ✅ Navigation to Video Feed screen
- ✅ Tab navigation appears (Feed & Leaderboard)

**Edge Cases to Test**:
- [ ] Wrong password - should show error
- [ ] Non-existent email - should show error
- [ ] Empty fields - should show error
- [ ] Network error - should show retry option

---

### Test 3: Video Feed Vertical Scrolling

**Objective**: Verify video feed displays and scrolls correctly

**Steps**:
1. After logging in, you're on the Video Feed screen
2. Observe the first video playing
3. Swipe UP to scroll to next video
4. Verify smooth pagination between videos
5. Continue scrolling through multiple videos

**Expected Results**:
- ✅ Videos display in full-screen vertical layout
- ✅ Each video shows title, username, and description
- ✅ Like and view count buttons visible
- ✅ Smooth scrolling with paging effect
- ✅ Video controls available (play/pause)
- ✅ Each video loads from external URL

**Video Player Features**:
- [ ] Play/pause functionality works
- [ ] Volume control available
- [ ] Full-screen toggle works
- [ ] Video loads without stuttering
- [ ] Audio plays clearly

---

### Test 4: Video Engagement (Likes & Views)

**Objective**: Verify engagement metrics display correctly

**Steps**:
1. On Video Feed screen
2. Locate the like button (❤️) on right side
3. Tap the like button
4. Verify like count increases
5. Tap view count (👁️) button
6. Verify navigation or engagement tracking

**Expected Results**:
- ✅ Like button is tappable
- ✅ Like count updates immediately
- ✅ Visual feedback when tapping
- ✅ View count displays correctly
- ✅ Engagement persists across app restart

---

### Test 5: Leaderboard Display

**Objective**: Verify leaderboard shows rankings correctly

**Steps**:
1. From Video Feed tab, tap the "Leaderboard" tab at bottom
2. Observe the leaderboard list
3. Verify entries are sorted by rank (1-5+)
4. Check badges display for top 3 (🥇 🥈 🥉)
5. Scroll through the leaderboard

**Expected Results**:
- ✅ Leaderboard header displays correctly
- ✅ Entries ranked from 1 to 5
- ✅ Gold, silver, bronze badges for top 3
- ✅ Purple badges for 4+
- ✅ Score displays with decimal (e.g., 9.8)
- ✅ Vote count shows for each entry
- ✅ Username and video title visible

**Data Verification**:
- [ ] Rank order correct (1 > 2 > 3 > 4 > 5)
- [ ] Scores in valid range (0.0 - 10.0)
- [ ] Vote counts are positive integers
- [ ] No duplicate rankings

---

### Test 6: Tab Navigation

**Objective**: Verify navigation between screens works smoothly

**Steps**:
1. From Video Feed tab, tap "Leaderboard" tab
2. Verify leaderboard screen loads
3. Tap "Feed" tab to return to videos
4. Repeat switching several times
5. Verify smooth transitions

**Expected Results**:
- ✅ Tab icons change color when active
- ✅ Smooth screen transitions
- ✅ No data loss when switching tabs
- ✅ Previous scroll position maintained
- ✅ Tab bar always visible

---

### Test 7: Error Handling & Fallbacks

**Objective**: Verify app handles errors gracefully

**Steps**:
1. Disconnect internet (toggle airplane mode)
2. Attempt to refresh videos
3. Verify app shows mock data or error message
4. Reconnect internet
5. Retry data loading

**Expected Results**:
- ✅ App doesn't crash on network error
- ✅ User-friendly error messages shown
- ✅ Retry option available
- ✅ Mock data displays as fallback
- ✅ App recovers when connection restored

---

### Test 8: Responsive Design

**Objective**: Verify UI works on different screen sizes

**Test Devices/Sizes**:
- [ ] iPhone 12 (390 x 844)
- [ ] iPhone 14 Pro Max (430 x 932)
- [ ] iPad (iPad Pro 11")
- [ ] Android phone (small screen)
- [ ] Android tablet

**Elements to Check**:
- [ ] Text is readable at all sizes
- [ ] Buttons are touch-friendly (min 44x44 pt)
- [ ] Videos fill screen properly
- [ ] Leaderboard items not too crowded
- [ ] Safe area respected (notch, home indicator)

---

### Test 9: Performance

**Objective**: Verify app performance is smooth

**Steps**:
1. Launch app and monitor loading time
2. Scroll through video feed quickly
3. Switch between tabs multiple times
4. Monitor memory usage (DevTools)
5. Check frame rate during video playback

**Expected Results**:
- ✅ App launches in < 3 seconds
- ✅ Video feed scrolls at 60 FPS
- ✅ No memory leaks visible
- ✅ No significant lag during navigation
- ✅ Videos load smoothly

---

### Test 10: Data Persistence

**Objective**: Verify data persists across sessions

**Steps**:
1. Login to the app
2. Like a video
3. Note the like count
4. Close the app completely
5. Reopen the app
6. Navigate to the same video
7. Verify like count is the same

**Expected Results**:
- ✅ Auth session persists
- ✅ User stays logged in
- ✅ Engagement data persists
- ✅ Preferences saved
- ✅ Cache works correctly

---

## 🔧 Browser DevTools Testing

### Enable React DevTools

```bash
npx expo start --web
```

Then open: http://localhost:8081

### Check Console for Errors
- F12 → Console tab
- Look for red error messages
- Check for warnings
- Verify network requests succeed

### Performance Testing
- F12 → Performance tab
- Record app interactions
- Check for memory leaks
- Verify FPS stays at 60

---

## 🚀 Testing External Video URLs

The app fetches videos from Google Cloud Storage. To test:

1. **Network Monitoring**
   - Open DevTools → Network tab
   - Load video feed
   - Verify `.mp4` files load successfully
   - Check download speed

2. **Video Playback**
   - Test play/pause
   - Test seek functionality
   - Verify audio works
   - Check for buffering

3. **Different Network Speeds**
   - Test on 3G
   - Test on 4G/LTE
   - Test on WiFi
   - Verify adaptive streaming

---

## ✅ Testing Checklist

### Authentication
- [ ] Registration form validation works
- [ ] Login with valid credentials succeeds
- [ ] Error messages display for invalid input
- [ ] Session persists after app restart
- [ ] Logout functionality works (when implemented)

### Video Feed
- [ ] Videos load from external URLs
- [ ] Vertical scrolling works smoothly
- [ ] Pagination between videos works
- [ ] Video player controls function
- [ ] Like button increments count
- [ ] View count displays correctly

### Leaderboard
- [ ] Entries display in rank order
- [ ] Badges show for top 3
- [ ] Scores display with decimals
- [ ] Vote counts visible
- [ ] Scrolling works smoothly

### Navigation
- [ ] Tab switching works
- [ ] Screen transitions smooth
- [ ] Previous state maintained
- [ ] Tab bar always visible
- [ ] Back navigation works (when applicable)

### UI/UX
- [ ] Text readable at all sizes
- [ ] Buttons touch-friendly
- [ ] Colors have sufficient contrast
- [ ] Responsive at all screen sizes
- [ ] Safe area respected

### Performance
- [ ] App launches quickly
- [ ] Scrolling at 60 FPS
- [ ] No memory leaks
- [ ] No lag during transitions
- [ ] Videos play smoothly

### Error Handling
- [ ] Network errors handled
- [ ] Invalid data handled
- [ ] Missing data falls back to mock
- [ ] Error messages helpful
- [ ] Recovery possible

---

## 🐛 Common Issues & Solutions

### Issue: App Won't Start
**Solution**: 
```bash
rm -rf node_modules
npm install
npx expo start --web
```

### Issue: Videos Not Loading
**Solution**: 
- Check internet connection
- Verify video URLs are accessible
- Check browser console for CORS errors
- Try different video URL

### Issue: App Crashes on Tab Switch
**Solution**:
- Clear app cache
- Restart dev server
- Check React Query configuration

### Issue: Styling Looks Broken
**Solution**:
- Clear Expo cache: `npx expo start --web --clear`
- Hard refresh browser: Ctrl+Shift+R
- Check tailwind.config.js

---

## 📊 Test Report Template

```
Test Run: ___________
Date: ___________
Tester: ___________
Build Version: ___________
Device: ___________

| Feature | Status | Notes |
|---------|--------|-------|
| Auth Registration | ✅/❌ | |
| Login | ✅/❌ | |
| Video Feed | ✅/❌ | |
| Leaderboard | ✅/❌ | |
| Navigation | ✅/❌ | |
| Performance | ✅/❌ | |

Bugs Found:
1. 
2. 
3.

Recommendations:
1. 
2. 
3.
```

---

## 🎯 Sign-off Criteria

App is ready for submission when:
- ✅ All test scenarios pass
- ✅ No critical bugs present
- ✅ Performance meets standards
- ✅ No console errors
- ✅ UI responsive on all devices
- ✅ Error handling working
- ✅ Documentation complete

---

For questions, refer to the main README.md
