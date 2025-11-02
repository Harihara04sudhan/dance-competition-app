import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../config/supabase';
import { LeaderboardEntry } from '../types';

// Mock leaderboard data
const mockLeaderboard: LeaderboardEntry[] = [
  {
    id: '1',
    user_id: '1',
    username: 'DanceKing',
    video_id: '1',
    video_title: 'Amazing Dance Moves',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    score: 9.8,
    votes: 234,
    rank: 1,
  },
  {
    id: '2',
    user_id: '2',
    username: 'StreetDancer',
    video_id: '2',
    video_title: 'Street Dance Battle',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    score: 9.5,
    votes: 189,
    rank: 2,
  },
  {
    id: '3',
    user_id: '3',
    username: 'HipHopStar',
    video_id: '3',
    video_title: 'Hip Hop Freestyle',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    score: 9.2,
    votes: 156,
    rank: 3,
  },
  {
    id: '4',
    user_id: '4',
    username: 'FlexMaster',
    video_id: '4',
    video_title: 'Incredible Flexibility',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    score: 8.9,
    votes: 134,
    rank: 4,
  },
  {
    id: '5',
    user_id: '5',
    username: 'RhythmQueen',
    video_id: '5',
    video_title: 'Perfect Rhythm',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    score: 8.7,
    votes: 128,
    rank: 5,
  },
];

export default function LeaderboardScreen() {
  const { data: leaderboard = mockLeaderboard, isLoading, error } = useQuery({
    queryKey: ['leaderboard'],
    queryFn: async (): Promise<LeaderboardEntry[]> => {
      try {
        const { data, error } = await supabase
          .from('leaderboard')
          .select('*')
          .order('rank', { ascending: true });
        
        if (error) {
          console.log('Supabase error, using mock data:', error.message);
          return mockLeaderboard;
        }
        
        return data || mockLeaderboard;
      } catch (err) {
        console.log('Error fetching leaderboard, using mock data:', err);
        return mockLeaderboard;
      }
    },
  });

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return { backgroundColor: '#ffd700', icon: '🥇' }; // Gold
      case 2:
        return { backgroundColor: '#c0c0c0', icon: '🥈' }; // Silver
      case 3:
        return { backgroundColor: '#cd7f32', icon: '🥉' }; // Bronze
      default:
        return { backgroundColor: '#8b5cf6', icon: '🏆' }; // Purple
    }
  };

  const renderLeaderboardItem = ({ item }: { item: LeaderboardEntry }) => {
    const rankStyle = getRankStyle(item.rank);
    
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.leftSection}>
          <View style={[styles.rankBadge, { backgroundColor: rankStyle.backgroundColor }]}>
            <Text style={styles.rankIcon}>{rankStyle.icon}</Text>
            <Text style={styles.rankText}>{item.rank}</Text>
          </View>
          
          <View style={styles.userInfo}>
            <Text style={styles.username}>@{item.username}</Text>
            <Text style={styles.videoTitle}>{item.video_title}</Text>
            <Text style={styles.votes}>{item.votes} votes</Text>
          </View>
        </View>
        
        <View style={styles.rightSection}>
          <Text style={styles.score}>{item.score}</Text>
          <Text style={styles.scoreLabel}>Score</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading leaderboard...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🏆 Leaderboard</Text>
        <Text style={styles.headerSubtitle}>Top dance performances this week</Text>
      </View>
      
      <FlatList
        data={leaderboard}
        renderItem={renderLeaderboardItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#8b5cf6',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  listContainer: {
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leftSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  rankIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
  rankText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 4,
  },
  videoTitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  votes: {
    fontSize: 12,
    color: '#9ca3af',
  },
  rightSection: {
    alignItems: 'center',
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8b5cf6',
    marginBottom: 2,
  },
  scoreLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#6b7280',
  },
});