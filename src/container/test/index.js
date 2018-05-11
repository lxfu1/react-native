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
    ListView,
    Modal,
    Picker,
    Slider,
    StatusBar,
    Switch,
    TextInput
} from 'react-native';

var ProgressBar = require('ProgressBarAndroid');
class Home extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            language: 'java',
            show: false,
            value: false,
            text: '',
            showHideTransition: 'fade',
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 2', 'row 2', 'row 2', 'row 5', 'row 2', 'row 2', 'row 2', 'row 20', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2']),
        };
    }
    setModalOpacity = (type) => {
        this.setState({
            show: type
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                    showHideTransition={this.state.showHideTransition}
                    animated={true}
                />
                <Button title="open modal" onPress = {()=>{this.setModalOpacity(true)}} />
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <ProgressBar styleAttr="Inverse" progress={0.5} color="yellow" />
                <Slider
                    step={0.25}
                    minimumTrackTintColor="red"
                    maximumTrackTintColor = "yellow"
                    onValueChange={(value) => this.setState({value: value})} />
                <Switch style={{marginLeft:20}} value={this.state.value} onTintColor='red' tintColor='blue'
                        thumbTintColor='black' onValueChange = {(value)=>{this.setState({value: value})}}/>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Modal
                    animationType={"fade"}
                    visible={this.state.show}
                    transparent={false}
                    onRequestClose = {()=>{this.setModalOpacity(false)}}
                >
                    <View style={styles.modalBox}>
                        <View style={styles.innerModal}>
                            <Text style={styles.title}>我是模态框</Text>
                            <Button title="Close Modal" onPress={()=>{this.setModalOpacity(false)}} />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        textAlign: 'center',
        height: 100,
        lineHeight: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#ff0000'
    },
    title: {
        fontSize: 16,
        color: 'blue',
        textAlign:'center',
        lineHeight: 60
    },
    modalBox: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerModal: {
        width: 300,
        height: 100,
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
    },
    items: {
        display: 'flex',
        height: 80,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    icon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    describe: {
        width: 280
    },
    item: {
        fontSize: 16,
        marginBottom: 10,
    },
    address: {
        fontSize: 14,
    }
})

export default Home