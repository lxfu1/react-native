/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Technology from './subPage/technology'
import NesList from './subPage/list'
import Team from './subPage/team'
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
        const { navigate } = this.props.navigation;
        return (
            <ScrollableTabView>
                <Team tabLabel='专家团队' />
                <NesList tabLabel='公司动态' />
                <Technology tabLabel='技术产品' />
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default news