import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TrashIcon } from '../components/Icons';
import useFavoriteStore from '../store/useFavoriteStore';
import styles from '../styles/FavoritesStyle';

export default function FavoritesScreen() {
  const navigation = useNavigation();
  const { favorites, removeFavorite } = useFavoriteStore();

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.idMeal}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.empty}>Belum ada favorit</Text>
            <Text style={styles.emptySub}>Tambahkan makanan favoritmu!</Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { id: item.idMeal })}
            activeOpacity={0.7}
          >
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title} numberOfLines={2}>{item.strMeal}</Text>
              <Text style={styles.category}>{item.strCategory}</Text>
            </View>
            <TouchableOpacity
              onPress={() => removeFavorite(item.idMeal)}
              style={styles.removeBtn}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <TrashIcon size={22} color="red" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}