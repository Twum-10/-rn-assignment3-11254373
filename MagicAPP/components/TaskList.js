import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const tasks = [
  { id: '1', title: 'Mobile App development' },
  { id: '2', title: 'Complete Math Homework' },
  { id: '3', title: 'Web Development' },
  { id: '4', title: 'Cook Dinner' },
  { id: '5', title: 'Read "To Kill a Mockingbird"' },
  { id: '6', title: 'Finish Work Report' },
  { id: '7', title: 'Plan Weekend Trip' },
  { id: '8', title: 'Relax and Meditate' },
  { id: '9', title: 'Evening Yoga' },
  { id: '10', title: 'Study for Exams' },
  { id: '11', title: 'Debug Code Issues' },
  { id: '12', title: 'Push ups' },
  { id: '13', title: 'Read Tech Articles' },
  { id: '14', title: 'Attend Work Meeting' },
  { id: '15', title: 'Book Flight Tickets' },
];

const TaskList = () => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <View style={styles.task}>
          <Text style = {styles.taskTitle}>{item.title}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 50,
    paddingLeft:20,
    borderWidth: 1,
    borderBottomColor: 'gray',
    borderRadius: 10,
    borderTopColor:'gray',
    marginTop:35,
    backgroundColor: "#D3D3D3",
    },
    taskTitle:{
        fontWeight: 'bold'
    },
});

export default TaskList;
