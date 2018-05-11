/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

//import ImageUrl from './new.jpg';
const ImageUrl = 'https://www.d-bigdata.com/press/3.jpg';

class Message extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerTitleStyle: {color: '#fff'},
        headerLeft: <TouchableOpacity onPress={()=>navigation.pop()}>
            <Image resizeMode="cover" style={styles.icon} source={require('./back.png')} />
        </TouchableOpacity>,
        headerStyle: {backgroundColor: '#47ddfe'}
    });
    constructor(props){
        super(props);
    }
    onLoadImg = () =>{
        Image.getSize(ImageUrl,(width, height)=>{
            console.log(width)
        })
    }
    render() {
        const { params } = this.props.navigation.state;
        return (
            <ScrollView  contentContainerStyle={styles.container}>
                <Text style={styles.title}>公司介绍</Text>
                <Text style={styles.welcome}>
                    {params.title}，由国内大数据领军人物周涛教授在2015年11月牵头创立，是目前国内领先的大数据技术及解决方案服务商。公司汇聚了数据挖掘、商业智能、数据分析等领域的精英，技术团队由大数据、金融、IT等各行业知名教授、专家领衔组建。公司依托自身雄厚的技术实力和不断创新进取的精神，推出首个商业大数据行业标准“COSR”，并联合财新发布了新经济指数（NEI），成为大数据行业引领者。
                </Text>
                <Image onLoad={this.onLoadImg} resizeMode="cover" source={{uri: ImageUrl}} style={styles.innerImg} />
                <Text style={styles.welcome}>
                    龙长春书记与其他代表认真听取了黔南BBD董事长曾途对于黔南州数联铭品科技有限公司的工作汇报，在对公司目前的数据采集、挖掘以及数据清洗、数据存储等各方面的业务进行提问和了解之后，龙长春书记提出了宝贵的建议并表示了对黔南数联铭品BBD的殷切期望和肯定：“政府和企业要密切合作，不断地引进高端人才，着力进行科技创新，建立黔南州自属的大数据中心，更好地造福黔南州人民，服务于黔南州的社会和经济发展。”
                </Text>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'column'
    },
    icon: {
        width: 20,
        height: 20
    },
    title: {
        color: '#782c00',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 10
    },
    innerImg: {
        width: 360,
        height: 200,
    },
    welcome: {
        fontSize: 14,
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'justify'
    },
});

export default Message