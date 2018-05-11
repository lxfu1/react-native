/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import Swiper from 'react-native-swiper'
import NetUitl from '../../utils/NetUitl'
console.log(NetUitl)
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

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            refresh: false,
            page: 1,
            dataList: [],
            more: true,
        }
    }

    componentDidMount() {
        this.getList(this.state.page);
    }

    getList = (page) =>{
        if(this.state.more){
            NetUitl.get('/news?page='+page, (res) => {
                if(res.length > 0){
                    console.log(res)
                    let list = this.state.dataList;
                    list.unshift(...res);
                    this.setState({
                        dataList: list,
                        refresh: false
                    })
                }else{
                    this.setState({
                        refresh: false,
                        more: false
                    })
                    alert('没有更多数据了！');
                }
            })
        }
    }

    refresh = ()=> {
        if(this.state.more){
            this.setState({
                refresh: true,
                page: this.state.page + 1*1
            },()=>{
                this.getList(this.state.page)
            })
            console.log(this.state.page)

        }
    }

    _keyExtractor = (item, index) => item.id + '';

    emptyEle = () =>{
        return <Text style={styles.empty}>暂无数据</Text>
    }

    _footer = () => (
        <Text style={[styles.footer, {display: this.state.dataList.length > 0 ? 'flex':'none'}]}>到底啦，没有啦！</Text>
    )

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.headerBox}>
                    <Swiper
                        style={styles.swiper}
                        height={150}
                        horizontal={true}
                        paginationStyle={{bottom: 10}}
                        autoplay = {true}
                        showsButtons={true}>
                        <Image resizeMode="cover" style={styles.headerIcon} source={require('./images/cx.jpg')} />
                        <Image resizeMode="cover" style={styles.headerIcon} source={require('./images/cx1.jpg')} />
                        <Image resizeMode="cover" style={styles.headerIcon} source={require('./images/cx2.jpg')} />
                    </Swiper>
                </View>
                <View style={styles.BContainer}>
                    <View style={styles.common}>
                        <Image style={styles.bIcon} source={require('./images/ic.jpg')} />
                        <Text style={styles.bText}>报销</Text>
                    </View>
                    <View style={styles.common}>
                        <Image style={styles.bIcon} source={require('./images/ic.jpg')} />
                        <Text style={styles.bText}>审批</Text>
                    </View>
                    <View style={styles.common}>
                        <Image style={styles.bIcon} source={require('./images/ic.jpg')} />
                        <Text style={styles.bText}>出勤人数</Text>
                    </View>
                    <View style={styles.common}>
                        <Image style={styles.bIcon} source={require('./images/ic.jpg')} />
                        <Text style={styles.bText}>日报</Text>
                    </View>
                </View>
                <View style={styles.moreBox}>
                    <Text style={styles.moreTitle}>最新动态</Text>
                    <Text style={styles.more}>更多>></Text>
                </View>
                <FlatList
                    data={this.state.dataList}
                    onRefresh = {this.refresh}
                    refreshing={this.state.refresh}
                    keyExtractor = {this._keyExtractor}
                    ListEmptyComponent = {this.emptyEle}
                    ListFooterComponent = {this._footer}
                    renderItem={({item}) => <View style={styles.items}>
                              <Image style={styles.icon} source={require('./images/bbd.jpg')} />
                              <View style={styles.describe}>
                                  <TouchableNativeFeedback onPress={()=>{navigate('Detail',{title: item.title})}}>
                                    <Text style={styles.item}>{item.title}</Text>
                                  </TouchableNativeFeedback>
                                  <Text style={styles.address}>{item.content}</Text>
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
    headerBox: {
        height: 150,
    },
    swiper:{

    },
    empty :{
        textAlign: 'center',
        color: '#ccc',
        marginTop: 20
    },
    headerIcon: {
        width: Dimensions.get('window').width,
        height: 150
    },
    BContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        flexWrap: 'wrap'
    },
    common: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    bIcon: {
        width: 40,
        height: 40,
    },
    bText: {
        textAlign: 'center',
        fontSize: 14,
    },
    moreBox: {
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    moreTitle: {
        borderLeftColor: '#4169E1',
        borderLeftWidth: 3,
        fontSize: 14,
        paddingLeft: 10,
    },
    more: {
        fontSize: 14,
        color: '#7A67EE',
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
        width: 280
    },
    item: {
        fontSize: 16,
        marginBottom: 10,
    },
    address: {
        fontSize: 14,
    },
    footer: {
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 20,
    }
})

export default Home