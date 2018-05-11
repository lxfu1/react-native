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
    Dimensions,
    ScrollView
} from 'react-native';

class team extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.common}>
                    <View style={styles.ptBox}>
                        <Image source={{uri: 'https://www.d-bigdata.com/head/brett.png'}} style={styles.pmi} />
                        <View style={styles.ds}>
                            <Text style={styles.name}>廖海峰 （Brett Liao)</Text>
                            <Text style={styles.dp}>创始人,CEO</Text>
                        </View>
                    </View>
                    <Text style={styles.det}>毕业于北京信息工程学院，曾就职于华为、记奥普泰等著名企业，也曾作为创始人或联合创始人，先后在物联网－智能家居、智能酒店、移动互联网健康等领域进行创业，目前专注于大数据在金融行业的应用。11年的IT行业职业生涯，让他拥有丰富的产品设计、技术方案设计经验；既擅于管理成熟团队，也能从无到有创建和培养优秀团队。</Text>
                </View>
                <View style={styles.common}>
                    <View style={styles.ptBox}>
                        <Image source={{uri: 'https://www.d-bigdata.com/head/angella.png'}} style={styles.pmi} />
                        <View style={styles.ds}>
                            <Text style={styles.name}>董博 （Angella Dong）</Text>
                            <Text style={styles.dp}>联合创始人,COO</Text>
                        </View>
                    </View>
                    <Text style={styles.det}>毕业于北京航空航天大学，之后于美国佛罗里达州立大学取得FIU工程管理硕士学位。曾任美国著名软件公司Citrix项目经理，专注于云计算虚拟化、虚拟桌面和远程接入技术的研究和应用，该公司实施虚拟机产品的改进和部署，服务于Google、Amazon、Intel、Dell、Microsoft等企业。在国内曾先后出任赛迪网软件项目监理和联想项目经理等职位，具有资深的项目管理经验。</Text>
                </View>
                <View style={styles.common}>
                    <View style={styles.ptBox}>
                        <Image source={{uri: 'https://www.d-bigdata.com/head/moon.png'}} style={styles.pmi} />
                        <View style={styles.ds}>
                            <Text style={styles.name}>马杲灵（Moon Ma ）</Text>
                            <Text style={styles.dp}>联合创始人,CTO</Text>
                        </View>
                    </View>
                    <Text style={styles.det}>重庆大学计算机学院硕士，信息系统项目管理师，曾在记奥普泰通信技术有限公司担任软件架构师、高级项目经理，专注于通信大数据存储及处理、系统集成，服务于NEC、中国移动通信集团公司，具有丰富的分布式软件架构设计及项目管理经验。</Text>
                </View>
                <View style={styles.common}>
                    <View style={styles.ptBox}>
                        <Image source={{uri: 'https://www.d-bigdata.com/head/Wilson.png'}} style={styles.pmi} />
                        <View style={styles.ds}>
                            <Text style={styles.name}>曾途 （Wilson Zeng）</Text>
                            <Text style={styles.dp}>成都数联铭品创始人,CEO</Text>
                        </View>
                    </View>
                    <Text style={styles.det}>成都数联铭品创始人兼CEO。曾任芯通科技股份有限公司董事会秘书，总裁助理兼软件服务事业部总经理，成都思维世纪科技有限公司常务副总经理。</Text>
                </View>
                <View style={styles.common}>
                    <View style={styles.ptBox}>
                        <Image source={{uri: 'https://www.d-bigdata.com/head/tao.png'}} style={styles.pmi} />
                        <View style={styles.ds}>
                            <Text style={styles.name}>周涛 （Tao Zhou）</Text>
                            <Text style={styles.dp}>大数据科学家</Text>
                        </View>
                    </View>
                    <Text style={styles.det}>周涛，博士，教授，电子科技大学互联网科学中心主任。于2005年获中国科学技术大学学士学位，2010年获瑞士弗里堡大学物理系哲学博士学位，师从汪秉宏教授和张翼成教授，主要研究方向为复杂性科学、网络科学、信息物理、人类动力学和群集动力学。中国大数据领域领军人物，年仅27岁成为电子科大教授、译作《大数据时代》2014年畅销书榜首，销售70万册，获国家图书馆文津图书奖中组部万人计划和最年轻的中国青年科技奖顶尖复杂性科学和大数据挖掘科学家，发表论文220篇，其中SCI期刊170篇，专著5本，SCI引用超过4000次等。</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    common: {
       backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    ptBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    pmi: {
        width: 120,
        height: 120,
        marginBottom: 10,
        marginRight: 20,
        borderRadius: 60,
    },
    ds: {
        width: 230,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    name: {
        color: '#000',
        fontSize: 18,
        fontWeight: '700'
    },
    dp: {
        fontSize: 14,
    },
    det: {
        fontSize: 12
    }
})

export default team