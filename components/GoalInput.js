import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enterGoal, setEnteredGoal] = useState(' ');

    const goalInputHandler = (enterdText) => {
        setEnteredGoal(enterdText)
      }

    const addGoalHandler = () => {
        props.onAddGoal(enterGoal);
        setEnteredGoal ('')
    }

    return (
      <Modal visible={props.visible}animationType="slide" >
         <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enterGoal} />
          <View style={styles.buttonContainer}>
             <View style={styles.button}>
              <Button title="CANCEL" color="red" onPress={props.onCancel} /> 
            </View>
            <View style={styles.button} >
              <Button title="ADD" onPress={addGoalHandler}  />    
            </View>
          </View>

      </View>
      </Modal>
    )
}

const styles = StyleSheet.create({ 
    inputContainer: {
        alignItems: 'center',
        flex: 1,

        justifyContent: 'center',
      },
      input: {
        borderColor: 'blue',
        borderWidth: 1,
        height: 35,
        marginBottom: 10,
        padding: 10,
        width: '80%'
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%'
      },
      button: {
        width: '40%'
      }
})

export default GoalInput