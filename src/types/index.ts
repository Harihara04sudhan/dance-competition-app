// User type for authentication
export interface User {
  id: string;
  email: string;
  username: string;
  created_at: string;
}

// Video metadata type
export interface Video {
  id: string;
  user_id: string;
  title: string;
  description: string;
  video_url: string;
  thumbnail_url?: string;
  views: number;
  likes: number;
  created_at: string;
  username?: string;
}

// Leaderboard entry type
export interface LeaderboardEntry {
  id: string;
  user_id: string;
  username: string;
  video_id: string;
  video_title: string;
  video_url: string;
  score: number;
  votes: number;
  rank: number;
}

// Auth form data
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  username: string;
}
