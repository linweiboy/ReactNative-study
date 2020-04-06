/*
 * @Author: 谭林伟
 * @Date: 2020-04-05 14:18:30
 * @LastEditors: 谭林伟
 * @LastEditTime: 2020-04-05 17:30:16
 * @Desc: 
 */
import * as React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen111</Text>
        </View>
    );
}


const App = createStackNavigator({
    Home: {screen:HomeScreen},
}, {
    headerMode: 'none',
});



export default createAppContainer(App);



