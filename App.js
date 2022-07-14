import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView,Button } from 'react-native';
import Grounds from './sources/groundsData.json';
import GroundInfo from './components/GroundInfo';



export default function App() {

  const[isModalVisible, setIsModalVisible] = useState(false);
  const [allgrounds, setAllGrounds]  = useState([])


useEffect( ()=> {

//Loading into allgrounds the data come from groundsData.json

setAllGrounds(Grounds.allGrounds);

},[])
console.log(allgrounds[0]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Liste des terrains</Text>

        {isModalVisible && 
          <GroundInfo
          isVisible = {isModalVisible}
          handleClose = {() => setIsModalVisible(false)}
          
          />
          
        }
        <Text>Test{allgrounds.groundName}</Text>

        {allgrounds.map( 
            ground => <View style={styles.box}>
                  <Button title = {ground.groundName} onPress={() =>{setIsModalVisible(true)}}></Button>
            </View>
        )}
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box:{
    justifyContent: 'center',
    padding : 10,
    margin : 10,
    
  }
});
