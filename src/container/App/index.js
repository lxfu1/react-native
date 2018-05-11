/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator'
import Home from '../home/index'
import Personal from '../personal/index'
import News from '../news/index'
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
    StatusBar
} from 'react-native';

class HomePage extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'popular',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab==='popular'}
                        title="主页"
                        selectedTitleStyle={{color:'#63B8FF'}}
                        renderIcon={()=><Image style={styles.icon} source={require('./images/ns.png')} />}
                        renderSelectedIcon={() =>
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('./images/sd.png')}/>}
                        onPress={()=>this.setState({selectedTab:'popular'})}
                    >
                        {/*选项卡对应的页面*/}
                       <Home navigation={this.props.navigation} />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab==='trending'}
                        title="我们"
                        selectedTitleStyle={{color:'#63B8FF'}}
                        renderIcon={()=><Image style={styles.icon} source={require('./images/ns.png')} />}
                        renderSelectedIcon={() =>
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('./images/sd.png')}/>}
                        onPress={()=>this.setState({selectedTab:'trending'})}
                    >
                        <News navigation={this.props.navigation} />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab==='my'}
                        title="个人主页"
                        selectedTitleStyle={{color:'#63B8FF'}}
                        renderIcon={()=><Image style={styles.icon} source={require('./images/ns.png')} />}
                        renderSelectedIcon={() =>
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('./images/sd.png')}/>}
                        onPress={()=>this.setState({selectedTab:'my'})}
                    >
                       <Personal navigation={this.props.navigation} />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        width: 24,
        height: 24,
    }
})

export default HomePage