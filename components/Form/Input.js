import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Input = ({value, onChangeText, label, type, secureTextEntry}) => (
   <>
       <Text style={styles.label}>{label}</Text>
       <TextInput secureTextEntry={secureTextEntry || false} type={type || 'text'} style={styles.input} value={value} onChangeText={onChangeText}/>
   </>
)

export default Input;

const styles = {
    label: {
        color: '#acacac'
    },
    input: {
        width: '80%',
        marginHorizontal: 50,
        backgroundColor: '#dddddd',
        height: 50,
        borderRadius: 5,
        marginVertical: 10,
        borderWidth: 3,
        padding: 5,
        borderColor: '#000000'
    },
};