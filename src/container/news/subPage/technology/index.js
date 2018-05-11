/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    TouchableNativeFeedback,
    Image,
    Dimensions
} from 'react-native';

class news extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.common}>
                    <Image source={{uri: 'https://www.d-bigdata.com/caseshare/zhny.png'}} style={styles.ime}/>
                    <Text style={styles.label}>招投宝</Text>
                </View>
                <View style={styles.common}>
                    <Image source={{uri: 'https://www.d-bigdata.com/caseshare/zhny.png'}} style={styles.ime}/>
                    <Text style={styles.label}>全球高端人才...</Text>
                </View>
                <View style={styles.common}>
                    <Image source={{uri: 'https://www.d-bigdata.com/caseshare/zhny.png'}} style={styles.ime}/>
                    <Text style={styles.label}>智慧能源</Text>
                </View>
                <View style={styles.common}>
                    <Image source={{uri: 'https://www.d-bigdata.com/caseshare/zhny.png'}} style={styles.ime}/>
                    <Text style={styles.label}>电子会员卡</Text>
                </View>
                <View style={styles.common}>
                    <Image source={{uri: 'https://www.d-bigdata.com/caseshare/zhny.png'}} style={styles.ime}/>
                    <Text style={styles.label}>企点</Text>
                </View>
                <View style={styles.common}>
                    <Image source={{uri: 'https://www.d-bigdata.com/caseshare/zhny.png'}} style={styles.ime}/>
                    <Text style={styles.label}>娱乐大数据</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff'
    },
    common: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        backgroundColor: '#f6973a',
        width: 110,
        height: 100,
        marginBottom: 10,
        borderRadius: 10
    },
    ime: {
        width: 60,
        height: 60,
        marginBottom: 5,
        borderRadius: 30,
    },
    label: {
        fontSize: 12,
        color: '#fff'
    }
})

export default news