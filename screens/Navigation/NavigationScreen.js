import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import {ProfileScreen} from "../Profile/ProfileScreen";
import {MapScreen} from "../Map/MapScreen";
import {QuestsScreen} from "../Quests/QuestsScreen";
import UserContext from "../../helpers/UserContext";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const NavigationScreen = (props) => {
    const userData = React.useContext(UserContext);

    const Screens = [
        {component: <MapScreen navigate={props.navigation} width={width}/>},
        {component: <ProfileScreen navigate={props.navigation} width={width}/>},
        {component: <QuestsScreen navigate={props.navigation} width={width}/>}
    ];

    return(
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            pagingEnabled
            snapToAlignment={'center'}
            data={Screens}
            initialScrollIndex={1}
            renderItem={({item}) => item.component}
            style={{flex: 1}}/>
    )
}

export default NavigationScreen;