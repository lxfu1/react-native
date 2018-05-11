import React,{Component} from 'react'
import {
    TouchableHighlight,
    StyleSheet,
    Text
} from 'react-native'

class MyButton extends Component {

    constructor(props){
        super(props)
    }

    _onPressButton() {
        console.log(this.props)
        this.props.press();
    }

    render() {
        return (
            <TouchableHighlight onPress={this.props.press}>
                <Text style={styles.btn}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        color: 'blue'
    }
})

export default MyButton;