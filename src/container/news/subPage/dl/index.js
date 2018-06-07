/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform
} from 'react-native';
import Echarts from 'native-echarts';

const {width} = Dimensions.get('window');

class DL extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        const option = {
            title: {
                text: '大佬骚气值'
            },
            tooltip: {},

            xAxis: {
                data: ["冯润洁","姚泽山","谭清匀","姚伟","康涛","段伟建"]
            },
            yAxis: {},
            series: [{
                name: '大佬',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        return (
            <View style={styles.container}>
                <Echarts option={option} height={300} width={width}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default DL