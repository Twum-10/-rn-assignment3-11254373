import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const categories = [
  { id: '1', title: 'Exercise', icon: require('../assets/exercise.jpg') },
  { id: '2', title: 'Study', icon: require('../assets/study.jpg') },
  { id: '3', title: 'Cook', icon: require('../assets/cook.png') },
  { id: '4', title: 'Relax', icon: require('../assets/relax.png') },
  { id: '1', title: 'Travel', icon: require('../assets/travel.png') },
    { id: '2', title: 'Read', icon: require('../assets/read.png') },
    { id: '3', title: 'Work', icon: require('../assets/work.png') },
    { id: '4', title: 'Code', icon: require('../assets/code.png') },
];


const CategoryList = () => {
  return (
    
    <FlatList
      horizontal
      data={categories}
      
      renderItem={({ item }) => (
        <View style={styles.category}>
          <Image source={item.icon} style={styles.icon} />
          <Text>{item.title}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  category: {
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20
  },
 
  icon: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginBottom: 20,
    marginLeft:2
  },
});

export default CategoryList;
