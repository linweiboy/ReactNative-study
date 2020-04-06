/*
 * @Author: 谭林伟
 * @Date: 2020-04-04 09:39:06
 * @LastEditors: 谭林伟
 * @LastEditTime: 2020-04-05 16:59:39
 * @Desc: 
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from "./src";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
