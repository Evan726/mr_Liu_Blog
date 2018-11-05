<template>
    <div class="conrainer_main">
        <div class="card_panel panel">
            <div class="card_panel_title">
                drawer抽屉
            </div>
            <div class="card_panel_container">
                <el-button type="success">左抽屉</el-button>
                <el-button type="primary">右抽屉</el-button>
                <el-button type="warning">上抽屉</el-button>
                <el-button type="danger">下抽屉</el-button>
            </div>
        </div>
        <div class="card_panel panel">
            <div class="card_panel_title">
                drawer 属性
            </div>
            <div class="card_panel_container">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="parameter" label="参数" width="180">
                    </el-table-column>
                    <el-table-column prop="Des" label="说明">
                    </el-table-column>
                    <el-table-column prop="type" label="类型"  width="280">
                    </el-table-column>
                    <el-table-column prop="type" label="可选值"  width="280">
                    </el-table-column>
                    <el-table-column prop="default" label="默认值"  width="180">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="card_panel panel">
            <div class="card_panel_title">
                drawer 时间
            </div>
            <div class="card_panel_container">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="parameter" label="参数" width="180">
                    </el-table-column>
                    <el-table-column prop="Des" label="说明">
                    </el-table-column>
                    <el-table-column prop="type" label="类型"  width="280">
                    </el-table-column>
                    <el-table-column prop="default" label="默认值"  width="180">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    	/**
 * visible      : 是否显示drawer          boolean                          默认值：false
 * placement    : Darwer出现位置          top/right/left/bottom            默认值:right
 * width        : Darwer宽度（placement为left或right 有效）             Number                           默认值:400
 * height       : Darwer宽度 （placement为top或botoom 有效）               Number                           默认值:300
 * className    : Darwer  的自定义类名
 * close-on-click-modal   是否可以通过点击 modal 关闭 Darwer                                          默认值 true
 */
        return {
            tableData: [{
                parameter: 'visible',
                name: '是否显示drawer,top/right/left/bottom ',
                type: 'Boolean',
                default: 'false'
            },{
                parameter: 'placement',
                name: 'Darwer出现位置 ',
                type: 'Boolean',
                default: 'false'
            }]
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
