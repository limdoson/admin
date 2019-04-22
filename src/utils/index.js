import Vue from 'vue';

class Utils extends Vue {
    constructor () {
        super();
    }
    /*
     * 封装element-ui中的$confirm方法作为提示用
     * -msg : 提示内容
     */
    msg (msg = null) {
        if (!msg) {
           throw new Error('utils类中msg方法缺省必要参数msg')
        }
        this.$confirm(msg,'提示',{
            showClose : false, //是否显示右上角关闭按钮
            showCancelButton :false,//是否显示取消按钮
            closeOnClickModal :false,//是否允许点击mask关闭对话框
        })
    }
}

export default new Utils;