
var Utils = {};
Utils.install = function (Vue, options) {
    // sample
    Vue.sample = function (str) {
        alert(str);
    }
    // 단수갱신 mainData
    Vue.updateSMainData = function (key, value, mainData) {
        // 한건만 갱신
        var obj = {};
        obj[key] = value
        var newMainData = Object.assign(mainData, obj);
        mainData = newMainData;
    }
    // 복수갱신 mainData
    Vue.updatePMainData = function (obj, mainData) {
        // 있으면 갱신 없으면 추가
        var newMainData = Object.assign(mainData, obj);
        mainData = newMainData;
        console.log("updatePMainData / mainData : %o", mainData);
    }
    // debuging mainData
    Vue.debugMainData = function (mainData) {
        // console.log 
        let keys = Object.keys(mainData);
        for (let idx in keys) {
            console.log(idx + " : " + keys[idx] + " : %o", mainData[keys[idx]]);
        }
    }

}
export default Utils;

// 샘플 
// // 1. 전역 메소드 또는 속성 추가
// Vue.myGlobalMethod = function () {
//     // 필요한 로직 ...
// }
// // 2. 전역 에셋 추가
// Vue.directive('my-directive', {
//     bind(el, binding, vnode, oldVnode) {
//         // 필요한 로직 ...
//     }
// })
// // 3. 컴포넌트 옵션 주입
// Vue.mixin({
//     created: function () {
//         // 필요한 로직 ...
//     }
// })
// // 4. 인스턴스 메소드 추가
// Vue.prototype.$myMethod = function (options) {
//     // 필요한 로직 ...
// }
// https://laracasts.com/discuss/channels/vue/how-to-encapsulate-common-functionality-in-vuejs?page=1
// 예제 샘플
// /mixin.js
// var MyMixin = {
//     methods:{
//         getName(){
//             return this.name;
//         }
//     }
// };
// export default MyMixin;
// //plugin.js
// var MyPlugin = {};
// MyPlugin.install = function(Vue, options){
//     var service = {
//         getName(){
//             retrun this.name;
//         },
//         getNameVersion2(vm){
//             return vm.name;
//         }
//     }
//     Vue.prototype.$service = service;
// };
// export default MyPlugin;
// // base-component.js
// export default{
//     methods:{
//         getName(vm){
//             return vm.name;
//         }
//     }
// }
// //my-component.js
// import MyMixin from './mixin';
// export default{
//     template:require('./my-component-template.html'),
//     mixins:[MyMixin],
//     data(){
//         return{
//             name:'John Doe'
//         }
//     },
//     methods:{
//         displayNameFromMixin(){
//             console.log(this.getName()); //displays John Doe - using the mixin method.
//         },
//         displayNameFromPlugin(){
//             console.log(this.$service.getName()); //error "this" references the plugin instead of the component instance
//         },
//         displayNameFromPluginVersion2(){
//             console.log(this.$service.getNameVersion2(this)); //displays John Doe - instance passed as method parameter.
//         }
//     }
// }
// //another-component.js
// import BaseComponent from './base-component';
// BaseComponent.extend({
//     template:require('./another-component-template.html'),
//     data(){
//         return{
//             name:'Jack Daniels';
//         }
//     },
//     methods:{
//         getNameFromBaseComponent(){
//             console.log(this.getName(this)); //displays Jack Daniels - instance passed as method parameter
//         }
//     }
// });
// //main.js
// import Vue from 'vue';
// import MyPlugin from './plugin';
// import MyComponent from './my-component';
// import AnotherComponent from './another-component';
// Vue.use(MyPlugin);
// new Vue({
//     el:'body',
//     components:{
//         MyComponent,
//                AnotherComponent
//     }
// });  