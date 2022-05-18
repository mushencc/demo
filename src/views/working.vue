<template>
  <div>
      <TopTitle title="施工单">
        <Button type="primary" @click="save">保存</Button>
      </TopTitle>
      <div class="content">
      <Form class="form_item" :label-width='100'>
        <FormItem label='查询时间：' style="width:600px">
          <DatePicker type="date" placeholder="年/月/日" style="width: 200px" v-model="searchData.start_time"></DatePicker>
          ~
          <DatePicker type="date" placeholder="年/月/日" style="width: 200px" v-model="searchData.end_time"></DatePicker>
        </FormItem>
        <FormItem :label-width='20'>
          <Button type="primary" @click="initData">搜索</Button>
        </FormItem>
      </Form>
      <Table :data='tableData' :columns='tableColumns' border max-height='700' v-show="tableData.length!=0" @on-selection-change='select'></Table>
      </div>
  </div>
</template>
<script>
import TopTitle from '../components/TopTitle/index';
export default {
    components:{
        TopTitle
    },
    data(){
      return {
          selectData:[],
        searchData:{
           start_time:'',
           end_time:''
        },
        pageSize:10,
        pageIndex:1,
        total:0,
        tableData:[],
        tableColumns:[
            {type:'selection',align:'center',minWidth:40},
          {title:'序号',align:'center',minWidth:100,type:'index'},
          {title:'账套标识',align:'center',minWidth:100,key:'film_type'},
          {title:'要货单位',align:'center',minWidth:100,key:'require'},
          {title:'日期',align:'center',minWidth:100,key:'time'},
           {title:'收货单位',align:'center',minWidth:100,key:'receive'},
              {title:'物料代码',align:'center',minWidth:100,key:'material_code'},
                {title:'数量',align:'center',minWidth:100,key:'material_num'},
                  {title:'接收标识',align:'center',minWidth:100,key:'sign'},
        ]
      }
    },
    mounted(){
        
    },
    methods:{
        select(e){
        this.selectData =e;
        },   
           save(){
               if(this.selectData.length==0){
                   return this.$Message.warning('请先选择数据！')
               }
        this.selectData.forEach((v,idx)=>{
          v.index = idx+1;
        })
           this.axios.post('/api/save',{data:this.selectData}).then(res=>{
            if(res.code==200){
              this.$Message.success(res.msg);
              this.searchData = {start_time:'',end_time:''};
              this.tableData = [];
              this.selectData =[];
            }
           })
      },
      initData(){
             this.axios.post('/api/build_list',{...this.searchData}).then(res=>{
                     this.tableData = res.data;
                     this.selectData=[];
             })
      }
    }
}
</script>
<style lang="scss" scoped>
.form_item{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.content_body_page{
  text-align: center;
}
.content{
  height: 90%;
  overflow: auto;
}
</style>