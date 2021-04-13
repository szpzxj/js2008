function ajax(options) {
    //设置需要传参的默认值
    var defaults = {
        type: 'get',//请求类型
        url: '',//请求地址
        data: {
            'Content-Type':
                'application/x-www-form-urlencoded'
        },//数据类型
        success: function () { },//成功调用
        error: function () { },//失败调用
    }
    //用assign方法覆盖  改变原对象
    Object.assign(defaults, options)
    //创建ajax对象
    const xhr = new XMLHttpRequest()
    //接收数据参数
    var params = ''
    //遍历数组
    for (var attr in defaults.data) {
        params += attr + '=' + defaults.data[attr] + '&'
    }
    //截取掉最后一个&
    params = params.substr(0, params.length - 1)
    //判断请求方式
    //1.get：请求参数拼接在url后
    //2.post:请求参数在seng内
    if (defaults.type == 'get') {
        //name=zhangsan&age=20
        xhr.open(defaults.type, defaults.url + '?' + params)
        //发送请求
        xhr.send()
    } else {
        //判断数据类型
        const contentType = defaults.heade['Content-Type']
        //请求方法，请求地址
        xhr.open(defaults.type, defaults.url)
        //设置数据格式
        xhr.setRequestHeader('Content-Type', contentType)
        //判断数据类型
        if (contentType == 'application/json') {
            xhr.send(JSON.stringify(defaults.data))
        } else {
            //发送请求
            xhr.send(params)
        }
    }
    //数据接收完成后触发
    xhr.onload = function () {
        //获取响应头数据类型
        var contentType = xhr.getResponseHeader(
            'Content-Type')
        //响应的数据
        var responseText = xhr.responseText
        //服务器响应给客户端数据类型是否是json类型
        if (contentType.includes('application/json')) {
            //类型中包含application/json 字符串，即使json数据
            //将json字符串变为json对象
            responseText = JSON.parse(responseText)
        }
        //状态码判断
        //请求成功
        if (xhr.status == 200) {
            //调用成功的函数
            defaults.success(responseText, xhr)
        } else {
            //请求失败
            //调用失败函数
            defaults.error(responseText, xhr)
        }
        //当网络中断时
        xhr.onerror = function () {
            //调用失败回调函数并且将xhr对象传递给回调函数
            defaults.error(xhr)
        }
    }
}