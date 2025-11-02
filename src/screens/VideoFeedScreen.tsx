import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../config/supabase';
import { Video as VideoType } from '../types';

const { height: screenHeight } = Dimensions.get('window');

// Mock video data with external URLs for demonstration
const mockVideos: VideoType[] = [
  {
    id: '1',
    user_id: '1',
    title: 'Amazing Dance Moves',
    description: 'Check out this incredible dance routine!',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    views: 1250,
    likes: 89,
    created_at: '2024-01-01',
    username: 'DanceKing',
  },
  {
    id: '2',
    user_id: '2',
    title: 'Street Dance Battle',
    description: 'Epic street dance performance',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    views: 2340,
    likes: 156,
    created_at: '2024-01-02',
    username: 'StreetDancer',
  },
  {
    id: '3',
    user_id: '3',
    title: 'Hip Hop Freestyle',
    description: 'Freestyle hip hop routine',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    views: 890,
    likes: 67,
    created_at: '2024-01-03',
    username: 'HipHopStar',
  },
];

export default function VideoFeedScreen() {
  // Fetch videos from Supabase (with fallback to mock data)
  const { data: videos = mockVideos, isLoading, error } = useQuery({
    queryKey: ['videos'],
    queryFn: async (): Promise<VideoType[]> => {
      try {
        const { data, error } = await supabase
          .from('videos')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          console.log('Supabase error, using mock data:', error.message);
          return mockVideos;
        }
        
        return data || mockVideos;
      } catch (err) {
        console.log('Error fetching videos, using mock data:', err);
        return mockVideos;
      }
    },
  });

  const renderVideoItem = ({ item }: { item: VideoType }) => (
    <View style={styles.videoContainer}>
      <Video
        source={{ uri: item.video_url }}
        style={styles.video}
        shouldPlay={false}
        isLooping
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls
      />
      
      <View style={styles.overlay}>
        <View style={styles.videoInfo}>
          <Text style={styles.username}>@{item.username}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        
        <View style={styles.stats}>
          <TouchableOpacity style={styles.statItem}>
            <Text style={styles.statIcon}>❤️</Text>
            <Text style={styles.statText}>{item.likes}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.statItem}>
            <Text style={styles.statIcon}>👁️</Text>
            <Text style={styles.statText}>{item.views}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading videos...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderVideoItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={screenHeight}
        snapToAlignment="start"
        decelerationRate="fast"
        style={styles.flatList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  flatList: {
    flex: 1,
  },
  videoContainer: {
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  videoInfo: {
    flex: 1,
    paddingRight: 20,
  },
  username: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  stats: {
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    marginVertical: 8,
  },
  statIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  statText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: 'white',
    fontSize: 18,
  },
});