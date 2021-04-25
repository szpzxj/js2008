// //1 实例化 XHR
// let xhr = new XMLHttpRequest()
// // 2 监听状态
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         console.log(xhr.responseText)
//         //接收服务器响应的数据
//         let json_str = xhr.responseText
//         // 将JSON字符串转为 JS对象      
//         let obj = JSON.parse(json_str)
//         console.log(obj)
//         console.log(obj.name)
//         console.log(obj.age)
//     }
// }
// // 3 打开链接
// xhr.open("get", "http://localhost/4-7/hello.php")
// // 4 发送请求
// xhr.send()


