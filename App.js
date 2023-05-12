 import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import  Constants  from 'expo-constants';

const App = () => {

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi , setBmi ] = useState('')
  const [description, setDescription ] = useState('')


  const calculateBmi = () => {

    // calculation of bmi index 

    const bmi = weight / ((height / 100 ) * (height /100))
    setBmi(bmi.toFixed(1))

    if  ( bmi < 18.5 ) {
       setDescription('Underweight, Eat more but Healthy...!')
          } 
          else if (bmi >= 18.5 && bmi<=24.9){
             setDescription('Normal,You are alright!')
               } 
               else if (bmi >= 25 && bmi <= 29.9){
                   setDescription('Overweight!,Start Working out...!')
                     } 
                     else if  ( bmi >= 30 ){
                           setDescription('Obese!,Hit the Gym...!')

            }                           
  }

  // made a function to reset the input and result value 
  const resetHandler = () => {
    setHeight('')
    setWeight('')
    setBmi('')
    setDescription('')
  }
  
  return (
    <View style= {styles.container}>
      <View style = {styles.title}>

        {/* Text Heading  */}

        <Text style = {styles.titleText}> BMI Calculator</Text>

      </View>

      {/* Text Input for weight  */}

      <TextInput
       style = {styles.input}
         value= {weight}
          onChangeText={(text) => setWeight(text)}
         placeholder="Weight in Kg"
       keyboardType='numeric'
        />

        {/* Text Input for Height */}

         <TextInput
       style = {styles.input}
         value= {height}
           onChangeText={(text) => setHeight(text)}
         placeholder="Height in cm"
       keyboardType='numeric'
        />

        {/* used TouchableOpacity as in place of button   */}
        
        <TouchableOpacity
          style= {styles.button}
            onPress={calculateBmi} 
          
         >
          <Text style = {styles.buttonText}>Calculate</Text>

        </TouchableOpacity>

        {/* result is shown here  */}

        <View style = {styles.resultView}>
          <Text style = {styles.result}>{bmi}</Text>
          <Text style = {styles.result}>{description}</Text>
         
          <TouchableOpacity
          style= {styles.button}
            onPress={resetHandler} 
          
         >
          <Text style = {styles.buttonText}>Reset</Text>

        </TouchableOpacity>

        </View>

    </View>
  )
}

export default App 

// Styling starts

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e0ecde'
  },
  title: {
    backgroundColor:'#2c6975',
    height:80,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10
  },
  titleText:{
    fontSize: 30,
    color:'#fff',
    fontWeight:'bold',

  },
  input: {
    height:55,
    margin: 15,
    borderWidth:1/2,
    padding: 10,
    borderRadius:5,
    backgroundColor:'#cde0c9',
    fontSize:18
  },
  button:{
    height:55,
    margin:15,
    borderWidth:1/2,
    borderRadius:5,
    backgroundColor:'#68b2a0',
    justifyContent:'center',
    alignContent:'center'
  },
  buttonText:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold'
    
    
  },
  resultView:{
    margin:15,
  },
  result:{
    fontSize:30,
    color:'#2c6975',
    fontWeight:'bold'
  }
});
