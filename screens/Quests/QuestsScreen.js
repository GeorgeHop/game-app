import React from 'react';
import {View, Text, FlatList, Dimensions, TouchableOpacity} from "react-native";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const QuestsScreen = (props) => {
    const Item = ({name, description, cost}) => (
        <View style={styles.questContainer}>
            <View  style={styles.questCard}>
                <Text>
                    {name}
                </Text>
            </View>
        </View>
    )

    const Quests = [
        {
            name: 'Test Quest Name',
            description: 'Test quest description',
            cost: '9.20 $',
        },
        {
            name: 'Test Quest Name 1',
            description: 'Test quest description',
            cost: '5.20 $',
        },
        {
            name: 'Test Quest Name 2',
            description: 'Test quest description',
            cost: '13.20 $',
        },
        {
            name: 'Test Quest Name 3',
            description: 'Test quest description',
            cost: '19.20 $',
        },{
            name: 'Test Quest Name 4',
            description: 'Test quest description',
            cost: '25.20 $',
        },
    ];

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
                contentContainerStyles={{width: props.width}}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={true}
                horizontal={true}
                data={Quests}
                pagingEnabled
                renderItem={({item}) => <Item cost={item.cost} description={item.description} name={item.name}/>}
                style={{flexDirection: 'row'}}
            />
        </View>
    )
}

const styles = {
    questContainer: {
        width: width,
        padding: 20
    },
    questCard: {
        backgroundColor: '#ba1f1f',
        borderRadius: 5,
        height: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }
}