import React from 'react';
import {View, Text} from "react-native";

export const MapScreen = (props) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: props.width ? props.width : ''}}>
            <Text>
                Map Screen
            </Text>
        </View>
    )
}