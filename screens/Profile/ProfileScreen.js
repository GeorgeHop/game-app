import React from 'react';
import {View, Text, Dimensions, Button, TouchableOpacity} from "react-native";
import UserContext from "../../helpers/UserContext";

const { width, height } = Dimensions.get('window');

export const ProfileScreen = (props) => {
    const userContext = React.useContext(UserContext);
    const [user, setUser] = React.useState(userContext);

    return(
        <View style={{
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: '#dc90fd',
            width: props.width ? props.width : ''
        }}>
            <Text>
                {user.id}
            </Text>
            <View style={styles.panel}>
                <View style={styles.userData}>
                    <TouchableOpacity onPress={() => props.navigate.navigate('UserDataScreen')} style={styles.userIcon}/>
                    <View style={styles.column}>
                        <Text>
                            {user.userName}
                        </Text>
                        <Text>
                            {user.email}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = {
    panel: {
        backgroundColor: '#eaeaea',
        height: height / 2,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    userData: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 20
    },
    userIcon: {
        backgroundColor: '#e50f0f',
        borderRadius: 50,
        height: 70,
        width: 70,
    },
    column: {
        flexDirection: 'column',
        marginLeft: 20
    }
};