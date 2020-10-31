import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Button = ({onPress, buttonText}) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>
            {buttonText}
        </Text>
    </TouchableOpacity>
)

const styles = {
    button: {
        width: '40%',
        height: 50,
        margin: 20,
        backgroundColor: 'rgba(238,15,79,0.96)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Button;