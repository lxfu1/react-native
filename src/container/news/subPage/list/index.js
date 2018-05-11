/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import Swiper from 'react-native-swiper'
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

class newList extends Component {
    constructor(props){
        super(props);
        this.state = {
            refresh: false,
            data: [
                {
                    id: 1,
                    uri: 'https://www.d-bigdata.com/press/3.jpg',
                    key: '龙长春书记一行参观考察黔南州数联铭品BBD',
                    address: '2016年8月26日，黔南州全州大数据战略行动推进大会在惠水县百鸟河数字小镇隆重召开',
                    time: '2016-08-26'
                },
                {
                    id: 2,
                    uri: 'https://www.d-bigdata.com/press/1.jpg',
                    key: '孟建柱贵州调研 SLT参与汇报',
                    address: '中共中央政治局委员、中央政法委书记孟建柱9月19日至21日在贵州调研时强调，运用',
                    time: '2016-09-26'
                },
                {
                    id: 3,
                    uri: 'https://www.d-bigdata.com/press/2.jpg',
                    key: '数联铭品上榜毕马威“中国金融科技50强”',
                    address: '9月19日，全球四大会计师事务所之一的毕马威，首次发布了“中国领先金融科技50榜单及报告”',
                    time: '2016-09-23'
                },
                {
                    id: 4,
                    uri: 'https://www.d-bigdata.com/press/3.jpg',
                    key: '龙长春书记一行参观考察黔南州数联铭品BBD',
                    address: '2016年8月26日，黔南州全州大数据战略行动推进大会在惠水县百鸟河数字小镇隆重召开',
                    time: '2016-08-26'
                },
                {
                    id: 5,
                    uri: 'https://www.d-bigdata.com/press/3.jpg',
                    key: '龙长春书记一行参观考察黔南州数联铭品BBD',
                    address: '2016年8月26日，黔南州全州大数据战略行动推进大会在惠水县百鸟河数字小镇隆重召开',
                    time: '2016-08-26'
                },
                {
                    id: 6,
                    uri: 'https://www.d-bigdata.com/press/3.jpg',
                    key: '龙长春书记一行参观考察黔南州数联铭品BBD',
                    address: '2016年8月26日，黔南州全州大数据战略行动推进大会在惠水县百鸟河数字小镇隆重召开',
                    time: '2016-08-26'
                },
                {
                    id: 7,
                    uri: 'https://www.d-bigdata.com/press/3.jpg',
                    key: '龙长春书记一行参观考察黔南州数联铭品BBD',
                    address: '2016年8月26日，黔南州全州大数据战略行动推进大会在惠水县百鸟河数字小镇隆重召开',
                    time: '2016-08-26'
                }
            ]
        }
    }

    refresh = ()=> {
        this.setState({
            refresh: true,
        })
        setTimeout(()=>{
            this.setState({
                refresh: false
            })
        },2000)
    }

    _keyExtractor = (item, index) => index + '';

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    onRefresh = {this.refresh}
                    refreshing={this.state.refresh}
                    keyExtractor = {this._keyExtractor}
                    renderItem={({item}) => <View style={styles.items}>
                              <Image style={styles.icon} source={{uri: item.uri}} />
                              <View style={styles.describe}>
                                  <TouchableNativeFeedback onPress={()=>{}}>
                                    <Text style={styles.item}>{item.key.length > 15 ? item.key.substring(0,15) + '...' : item.key}</Text>
                                  </TouchableNativeFeedback>
                                  <Text style={styles.address}>{item.address.length > 30 ? item.address.substring(0,30) + '...' : item.address}</Text>
                              </View>
                            </View>
                        }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        backgroundColor: '#fff'
    },
    icon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    describe: {
        width: 290
    },
    item: {
        fontSize: 16,
        marginBottom: 10,
    },
    address: {
        fontSize: 12,
    }
})

export default newList