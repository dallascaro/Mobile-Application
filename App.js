import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, SectionList, ScrollView, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
  {
    title: "Apple",
    Image: "",
    data: ["iPhone13", "iPhone12", "iPhone11"]
  },
  {
    title: "Samsung",
    Image: "",
    data: ["Galaxy S21", "GalaxyS20", "GalaxyS10"]
  },
  {
    title: "Google",
    Image: "",
    data: ["Pixel 5a", "Pixel 4", "Pixel 4 XL"]
  },
  {
    title: "Huawei",
    Image: "",
    data: ["Huawei P50", "Huawei 40Pro", "Huawei 40"]
  },
  {
    title: "Nokia",
    Image: "",
    data: ["Nokia G50", "Nokia XR20", "Nokia G10"]
  }
];

function HomeScreen({navigation})
{
  return (

  <View style={styles.container}>
  
    <View style = {styles.header}>
      <Image style={styles.tinyLogo ,styles.row, styles.text, styles.gImage} source={require('./assets/applogos/googlePlay.png')}/>
    </View>

    <View style = {styles.apps}>

      <View style={styles.row}>
        <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/applogos/spotify.png')}/>
        <Text>    </Text>
        <Image style={styles.tinyLogo, styles.row, styles.text} source={require('./assets/applogos/soundCloud.png')}/>
          <Text>    </Text>
          <Image style={styles.tinyLogo, styles.row, styles.text} source={require('./assets/applogos/dropBox.png')}/>
      </View>

      <View style={styles.row}>
          <Text style={styles.names}>Spotify</Text>
          <Text>         </Text>
          <Text style={styles.names}>Sound Cloud</Text>
          <Text> </Text>
          <Text style={styles.names}>Drop Box</Text>
      </View>

  
      <View style={styles.row}>
        <Image style={styles.tinyLogo, styles.row, styles.text} source={require('./assets/applogos/snapChat.png')}/>
        <Text>    </Text>
          <Image style={styles.tinyLogo, styles.row, styles.text} source={require('./assets/applogos/Waze.png')}/>
          <Text>    </Text>
          <Image style={styles.tinyLogo, styles.row, styles.text} source={require('./assets/applogos/whatsApp.png')}/>
     </View>

     <View style={styles.row}>
          <Text style={styles.names}>SnapChat</Text>
          <Text>    </Text>
          <Text style={styles.names}>Waze</Text>
          <Text>          </Text>
          <Text style={styles.names}>WhatsApp</Text>
    </View>


    <View style = {styles.row}>
      <Image style={styles.tinyLogo, styles.row, styles.text} source={require('./assets/applogos/sleepCycle.png')}/>
      <Text>    </Text>
        <Image style={styles.tinyLogo, styles.row,  styles.text} source={require('./assets/applogos/myFitness.png')}/>
        <Text>    </Text>
        <Image style={styles.tinyLogo, styles.row, styles.text} source={require('./assets/applogos/flipBoard.png')}/>
    </View>

    <View style={styles.row}>
          <Text style={styles.names}>Sleep Cycle</Text>
          <Text>  </Text>
          <Text style={styles.names}>My Fitness</Text>
          <Text>  </Text>
          <Text style={styles.names}>Flip Board</Text>
    </View>

    <View style = {styles.row, styles.button}>
      <Button
          title="Go to SearchScreen"
          onPress={() => navigation.navigate('Search')}
        />
    </View>

    </View>
        
    <StatusBar style="auto" />
    
  </View>

  );
}

function SearchScreen({navigation})
{

  const{text, onChangeText} = React.useState("Placeholder");

  return (
    <View style={styles.container}>
      <View style = {styles.header}>
      <Image style={styles.tinyLogo ,styles.row, styles.text, styles.gImage} source={require('./assets/Spotify/spotify-searchPic.png')}/>
        
      <SafeAreaView>
        <TextInput
            onChangeText = {onChangeText}
            value = {text}
            placeholder = "Enter text"/>
       </SafeAreaView>

      <SafeAreaView>
        <Button
              title="Enter Product"
            />
       </SafeAreaView>

  <SafeAreaView>
    <ScrollView>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (

        <Text style={styles.text}>{title}</Text>
      )}
    />
    </ScrollView>
    </SafeAreaView>

    
    <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <StatusBar style="auto" />
      </View>
     
      
    </View>
  );
}

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.listTitle}>{title}</Text>
  </View>
);


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SafeAreaView:{
    flexDirection: "row"
  },
  box: {
  width:  50,
  height: 80,
  },
  row: {
    flexDirection: "row",
    paddingBottom: 20
  },
  apps:{
    paddingTop: 250,
    paddingRight: 100,
  },
  tinyLogo: {
    width: '20%',
    height: '10%',
  },
  header: {
    flex: 1,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    paddingBottom: 800,
   
  },
  item: {
    backgroundColor: "gray",
    color: 'black',
    padding: 10,
    marginVertical: 3
  },
  listTitle:{
    fontSize: 12
  },
  SearchBar: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  button: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  text: {
    padding: 50,
    paddingRight: 50,
    backgroundColor: 'black',
    fontSize: 20,
    color: 'white',
  }, 
  names:{
    paddingRight: 40,
  },
  gImage: {
    width: 500,
    height: 250
  }
});