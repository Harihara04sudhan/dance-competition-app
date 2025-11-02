# 🕺 Dance Competition App

A short-form dance competition mobile application built with React Native, demonstrating modern mobile development practices with real-time data fetching and smooth user experience.

## 🚀 Features

- **Authentication System**: Secure user registration and login with Supabase
- **Vertical Video Feed**: TikTok-style scrolling video feed with external video URLs
- **Leaderboard**: Competition rankings with scores and vote counts
- **Responsive UI**: Modern, mobile-friendly design with smooth animations
- **Real-time Data**: React Query for efficient data fetching and caching

## 🛠️ Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and build tools
- **TypeScript** - Type-safe JavaScript
- **Supabase** - Backend-as-a-Service (authentication & database)
- **React Query (@tanstack/react-query)** - Data fetching and state management
- **React Navigation** - Navigation library for React Native
- **Expo AV** - Video playback functionality

## 📱 Screenshots & Demo

The app features three main screens:
1. **Authentication**: Login and registration forms
2. **Video Feed**: Vertical scrolling dance videos with user interactions
3. **Leaderboard**: Ranked competition entries with scores

## 🔧 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (Mac) or Android Studio for testing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dance-competition-app.git
   cd dance-competition-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Supabase**
   - Create a free account at [supabase.com](https://supabase.com)
   - Create a new project
   - Get your project URL and anon key from Settings > API
   - Update the `.env` file:
     ```env
     EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     ```

4. **Set up Supabase Database Tables**
   
   Create these tables in your Supabase dashboard:
   
   **Users table** (extends auth.users):
   ```sql
   CREATE TABLE users (
     id UUID REFERENCES auth.users PRIMARY KEY,
     username TEXT UNIQUE NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```
   
   **Videos table**:
   ```sql
   CREATE TABLE videos (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES users(id),
     title TEXT NOT NULL,
     description TEXT,
     video_url TEXT NOT NULL,
     thumbnail_url TEXT,
     views INTEGER DEFAULT 0,
     likes INTEGER DEFAULT 0,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```
   
   **Leaderboard table**:
   ```sql
   CREATE TABLE leaderboard (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES users(id),
     video_id UUID REFERENCES videos(id),
     score DECIMAL(3,1) NOT NULL,
     votes INTEGER DEFAULT 0,
     rank INTEGER NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. **Start the development server**
   ```bash
   npx expo start
   ```

6. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on physical device

## 🏗️ Project Structure

```
src/
├── screens/           # Screen components
│   ├── LoginScreen.tsx
│   ├── RegisterScreen.tsx
│   ├── VideoFeedScreen.tsx
│   └── LeaderboardScreen.tsx
├── navigation/        # Navigation configuration
│   └── AppNavigator.tsx
├── components/        # Reusable components
├── services/          # External service integrations
│   └── QueryProvider.tsx
├── hooks/            # Custom React hooks
│   └── useAuth.ts
├── types/            # TypeScript type definitions
│   └── index.ts
└── config/           # Configuration files
    └── supabase.ts
```

## 🎯 Key Features Explained

### Authentication Flow
- Secure user registration with email verification
- Login with email/password
- Auth state management with React hooks
- Protected routes based on authentication status

### Video Feed
- Vertical scrolling like TikTok/Instagram Reels
- Videos loaded from external URLs (no local storage)
- Smooth pagination and infinite scroll
- Like and view count tracking
- User profile information display

### Leaderboard System
- Competition ranking by score
- Vote counting mechanism
- Visual rank indicators (gold, silver, bronze)
- Real-time updates with React Query

### Data Management
- React Query for efficient API calls
- Optimistic updates for better UX
- Automatic retry on failed requests
- Background data synchronization

## 🔄 State Management Architecture

The app uses a combination of:
- **React Query**: Server state management and caching
- **React Hooks**: Local component state
- **Supabase Auth**: Authentication state
- **React Navigation**: Navigation state

This architecture ensures:
- Predictable data flow
- Efficient re-renders
- Offline-first approach
- Real-time capabilities

## 🌐 External Video URLs

The app fetches videos from external URLs to demonstrate real-world video handling:
- Google Cloud Storage sample videos
- Optimized for mobile bandwidth
- Various video formats supported
- Fallback error handling

## 🤝 Team Collaboration Approach

### For Global/Remote Teams:

1. **Code Standards**
   - TypeScript for type safety
   - ESLint configuration for consistent code style
   - Prettier for automated formatting
   - Conventional commit messages

2. **Development Workflow**
   - Feature branch strategy
   - Pull request reviews
   - Automated testing (unit & integration)
   - Continuous Integration/Deployment

3. **Communication**
   - Clear API documentation
   - Component documentation with examples
   - Regular code reviews
   - Async-friendly development practices

4. **Tools & Infrastructure**
   - Expo for consistent development environment
   - Supabase for managed backend infrastructure
   - Git for version control
   - GitHub for collaboration and project management

## 🧪 Testing Strategy

- **Unit Tests**: Individual component testing
- **Integration Tests**: API integration testing
- **E2E Tests**: Complete user flow testing
- **Performance Tests**: Video playback and scroll performance

## 🚀 Deployment

The app is ready for deployment to:
- **Expo Application Services (EAS)** for managed workflow
- **App Store** (iOS) and **Google Play Store** (Android)
- **Expo Go** for testing and development

## 📈 Performance Optimizations

- Lazy loading for video content
- Image optimization and caching
- Efficient list rendering with FlatList
- Memoized components to prevent unnecessary re-renders
- Background data fetching with React Query

## 🔐 Security Considerations

- Environment variables for sensitive data
- Supabase Row Level Security (RLS) policies
- Input validation and sanitization
- Secure authentication flow
- Protected API endpoints

## 🐛 Known Issues & Future Improvements

- Video autoplay optimization for better battery life
- Offline video caching
- Push notifications for new competitions
- Social features (comments, follows)
- Advanced video filters and effects

## 📝 License

This project is created for educational and assessment purposes.

## 👨‍💻 Developer

Built as part of a React Native competency assessment, demonstrating skills in:
- Modern React Native development
- Backend integration
- State management
- Mobile UX/UI design
- TypeScript implementation
- Team collaboration practices

---

*For questions or support, please refer to the documentation or create an issue in the repository.*