import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete} > 
            <View style={styles.output}on >
                 <Text  >{props.title}</Text> 
            </View>  
        </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    output:{ 
        borderWidth: 2,
        borderColor: 'darkgreen',
        marginTop:15,
        padding: 10,
        width: '80%'
      }
})

export default GoalItem