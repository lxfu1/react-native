/**
 * NetUitl 网络请求的实现
 * @author liufu
 * @date 2018-05-10
 */
const HTP = "http://192.168.2.58:8090";
const NetUitl =  {

    //post请求
    /**
     *url :请求地址
     *data:参数
     *callback:回调函数
     */
    postFrom: function(url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:'data='+data+''//这里我参数只有一个data,大家可以还有更多的参数
        };

        fetch(HTP + url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    },
    /**
     *url :请求地址
     *data:参数(Json对象)
     *callback:回调函数
     */
    postJson: function(url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                //json形式
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(HTP + url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    },
    //get请求
    /**
     *url :请求地址
     *callback:回调函数
     */
    get: function(url, callback) {
        fetch(HTP + url)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    }

}

export default NetUitl