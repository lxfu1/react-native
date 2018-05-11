/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'
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

class Personal extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#85b2f6','#838ffa']} style={styles.pictureBox}>
                    <Text style={styles.title}>个人主页</Text>
                    <Image source={require('./images/p.jpg')} style={styles.picture} />
                    <Text style={styles.names}>芳华如梦</Text>
                    <View style={styles.personalDetail}>
                        <Text style={styles.common}>年龄: 28</Text>
                        <Text style={styles.common}>性别： 女</Text>
                    </View>
                </LinearGradient>
                <View style={styles.gridBox}>
                    <View style={styles.CGrid}>
                        <Image style={styles.PIcon} source={require('./images/pt.png')} />
                        <Text style={styles.label}>我的动态</Text>
                    </View>
                    <View style={styles.CGrid}>
                        <Image style={styles.PIcon} source={require('./images/pt.png')} />
                        <Text style={styles.label}>谁看过我</Text>
                    </View>
                    <View style={[styles.CGrid, {borderRightWidth: 0}]}>
                        <Image style={styles.PIcon} source={require('./images/pt.png')} />
                        <Text style={styles.label}>隐私</Text>
                    </View>
                </View>
                <View style={styles.gridBox}>
                    <View style={styles.CGrid}>
                        <Image style={styles.PIcon} source={require('./images/pt.png')} />
                        <Text style={styles.label}>喜欢</Text>
                    </View>
                    <View style={styles.CGrid}>
                        <Image style={styles.PIcon} source={require('./images/pt.png')} />
                        <Text style={styles.label}>我的消息</Text>
                    </View>
                    <View style={[styles.CGrid, {borderRightWidth: 0}]}>
                        <Image style={styles.PIcon} source={require('./images/pt.png')} />
                        <Text style={styles.label}>设置</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pictureBox: {
        flexDirection: 'column',
        height: 300,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title:{
        color: '#fff',
        fontSize: 16,
        lineHeight: 60,
        textAlign: 'center'
    },
    names: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center'
    },
    personalDetail: {
        width: 140,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    common: {
        fontSize: 14,
        color: '#fff'
    },
    picture: {
        width: 120,
        height: 120,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 60,
    },
    gridBox: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    CGrid: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
        backgroundColor: '#fff',
        flex: 1,
        height: 100,
        borderRightColor: '#ccc',
        borderRightWidth: 1
    },
    PIcon: {
        width: 40,
        height: 40,
        marginBottom: 5
    },
    label: {
        fontSize: 14
    }
})

export default Personal