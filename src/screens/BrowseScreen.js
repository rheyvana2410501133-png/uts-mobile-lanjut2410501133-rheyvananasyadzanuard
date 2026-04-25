import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles/BrowseStyle';

export default function BrowseScreen({ route, navigation }) {
  const { category } = route.params;
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setMeals(res.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>{category}</Text>

      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { id: item.idMeal })}
          >
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <Text style={styles.title}>{item.strMeal}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}