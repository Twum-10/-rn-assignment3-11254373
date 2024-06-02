import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import CategoryList from '../components/CategoryList';
import TaskList from '../components/TaskList';
import Frame1 from "../components/Frame1";

const MainScreen = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Morning Jog' },
    { id: '2', title: 'Math Homework' },
    
  ]);

  const addTask = () => {
    setTasks([...tasks, { id: (tasks.length + 1).toString(), title: task }]);
    setTask('');
  };

  return (
    <ScrollView style={styles.container}>
      <Frame1/> 
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <Text style={styles.header}>Categories</Text>
      <CategoryList />
      <Text style={styles.header}>Ongoing Task</Text>
      <TaskList tasks={tasks} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default MainScreen;
