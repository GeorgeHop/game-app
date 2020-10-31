import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from "../../components/Form/Button";

const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
            <Text>
                App description
            </Text>
            <View style={styles.row}>
                <Button
                    onPress={() => navigation.navigate('LoginScreen')}
                    buttonText={'Login'}
                />
                <Button
                    onPress={() => navigation.navigate('RegistrationScreen')}
                    buttonText={'Registration'}
                />
            </View>
        </View>
    )
}

const styles = {
    row: {
        flexDirection: 'row',
    },
};

export default HomeScreen;