import { View, Text, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.frameContainer}>
        <View style={styles.imgStyles}>
           <Image source = {require("../assets/Frame 1.png")}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    frameContainer:{
        display: 'flex',
        alignContent: 'center',
        width: '100%',
        borderColor:'black',
    },
    
    imgStyles:{
        
        borderRadius: 50,
        marginBottom: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});