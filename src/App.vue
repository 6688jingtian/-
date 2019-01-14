<template>
  <div id="app">
  	<div class="ico">
  		<img src="./assets/logo.png">
  	</div>
  	<br />
    <router-view></router-view>
    <banana></banana>
		  <a href="../pages/natural-word.html">点我</a>
    	<router-link :to="{path:'/apple'}" tag='button' class='trs'>to apple</router-link>
	    <router-link :to="{path:'/banana'}" tag='button'>to banana</router-link>
	    <router-link to=/apple/ok tag='button'>to ok</router-link>
	<br><br />
	<div class="footer"><p>yuguichuan@baidu.com</p></div>
	<div style="height: 50px;"></div>
	<Input  size="small"></Input>
	<br><br/>
	<child></child>
    <Button type="info" ><router-link :to="{path:'/apple'}" style="color:white">to apple</router-link></Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <br></br>
    <div class="block">
			<el-input
				placeholder="输入关键字进行过滤"
				v-model="filterText">
			</el-input>
			<el-tree
				class="filter-tree"
				:data="data2"
				:props="defaultProps"
				default-expand-all
				:filter-node-method="filterNode"
				ref="tree"
				@node-click="treeClick">
			</el-tree>
			<!-- <customer></customer> -->
    	<!-- <el-input
		  placeholder="输入关键字进行过滤"
		  v-model="filterText">
		  </el-input>
		<el-tree
      :data="data2"
      node-key="id"
			:props="defaultProps"
      default-expand-all
			:filter-node-method="filterNode"
      :expand-on-click-node="false"
			ref='tree'
			> -->
<!--      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span @click="a(node)">
          <RouterLink :to="{path:data.path}">{{node.label}}</RouterLink>
        </span>
      </span> -->
    </el-tree>
    <el-carousel height="200px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="./assets/"+{{item}}+".jpg">
      </el-carousel-item>
    </el-carousel>
  </div>
	<ul @click="send()">
		<li v-for="msg in msgTest">{{msg}}</li>
	</ul>
	
	<el-table
    :data="tableData"
    border
    style="width: 1031px;margin:0 auto;"
		id="out-table">
    <el-table-column
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!--<lunbo></lunbo>-->
	 <el-tabs v-model="activeName1" >
    <el-tab-pane label="用户管理" name="first">
			<el-tabs v-model="activeName2" >
				<el-tab-pane label="用户" name="fir">嘤嘤嘤</el-tab-pane>
				<el-tab-pane label="配置" name="sec">
						<el-table
							:data="tableData"
							border
							style="width: 100%">
							<el-table-column
								type="selection"
								width="55">
							</el-table-column>
							<el-table-column
								prop="date"
								label="日期"
								width="150">
							</el-table-column>
							<el-table-column
								prop="name"
								label="姓名"
								width="120">
							</el-table-column>
							<el-table-column
								prop="province"
								label="省份"
								width="120">
							</el-table-column>
							<el-table-column
								prop="city"
								label="市区"
								width="120">
							</el-table-column>
							<el-table-column
								prop="address"
								label="地址"
								width="300">
							</el-table-column>
							<el-table-column
								prop="zip"
								label="邮编"
								width="120">
							</el-table-column>
							<el-table-column
								label="操作"
								width="100">
								<template slot-scope="scope">
									<el-button @click="handleClick(scope)" type="text" size="small">查看</el-button>
									<el-button type="text" size="small">编辑</el-button>
								</template>
							</el-table-column>
						</el-table>
					  
				</el-tab-pane>
			</el-tabs>
		</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
			<div class="content" style="margin: 2% auto;width: 660px;">
				<div class="processBar">
					<div id="line0" class="bar Color">
						<!-- <div id="point0" class="c-step c-select"></div> -->
					</div>
					<!-- <div class="text" style="margin: 10px -98px;width: 200px;"><span class='poetry'>基本信息</span></div> -->
				</div>
				
				<div class="processBar">
					<div id="line1" class="bar">
						<!-- <div id="point2" class="c-step"></div> -->
					</div>
					<!-- <div class="text" style="margin: 10px -98px;width: 200px;"><span class='poetry'>工作经历</span></div> -->
				</div>
				<div class="processBar">
					<div id="line2" class="bar">
						<!-- <div id="point3" class="c-step"></div> -->
					</div>
					<!-- <div class="text" style="margin: 10px -98px;width: 200px;"><span class='poetry'>社交</span></div> -->
				</div>
				<div style="clear: both;"></div>
			</div>
			<!--  标题进度条 end-->
			<div style="clear: both;"></div>
			<div id="MainContent" style="margin: 2% 30%;">
				<div class="content" id="basicInfo">
					<span class='poetry'>
						这是基本信息板块
					</span>
				</div>
				<!-- <div class="content" id="education">
					<span class='poetry'>
						教育信息
					</span>
				</div> -->
				<div class="content" id="work">
					<span class='poetry'>
						这是工作经历板块<br/>
					</span>
					<span class='poetry'>工作地点</span>
					<input type='text' id='name'/> <br/>
					<span class='poetry'>工作内容</span>
					<input type='text' id='age'/>
				</div>
				<div class="content" id="social">
					<span class='poetry'>
						这是社交板块
					</span>
				</div>
			</div>
			<div style="clear: both;"></div>
			<div style="text-align: center;">
					<button id="previous_step">上一步</button>
					<button id="next_step">下一步</button>
					<button id="btnSure" style="display: none;">确定</button>
			</div>
		</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
			 <Button type="success" @click="chartChange()">Success</Button>
			 <div class="charts">
            <x-chart id="highcharts" class="high" :option="option" ref="ying"></x-chart>
            <x-chart id="high" class="high" :option="option1" ref="wish"></x-chart>
        </div>
		</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
	
	<!-- <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling" /> -->
			<div style="width: 1300px;margin: 0 auto;">
				<customer :cover="aaa"></customer>
				<customer :cover="bbb"></customer>
				<customer :cover="ccc"></customer>
			</div>
  </div>
</template>
  <script>

import Vue from 'vue';
import XChart from '@/components/charts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Banana from '@/components/banana';
import FileSaver from 'file-saver';
import XLSX from 'xlsx';
import Highcharts from 'highcharts';
import Chat from 'vue-beautiful-chat';
import customer from '@/components/customer/';
Vue.use(Chat)
// import customer from '@/components/customer/';
Vue.use(ElementUI);
let id=0;
var myvue={};
var index=0;
$(document).ready(function(){
	$('.processBar').click(function(){
		var ind=$(this).index();
		index=ind;
		console.log(index);
		$('#previous_step').show();
		$('#next_step').show();
		//console.log($('#MainContent .content'));
		//console.log($('#MainContent>.content').eq(ind)[0].id);
		$(".bar").removeClass("Color");
		$(".bar").removeClass('b-select');
		$(".bar").eq(ind).addClass('Color');
		$('#MainContent>.content').eq(ind).removeClass("main-hide").siblings().addClass("main-hide");
		if($('#MainContent>.content').eq(ind)[0].id=='basicInfo'){
			$('#previous_step').hide();
		}else{
			$('#previous_step').show();
		}
		if($('#MainContent>.content').eq(ind)[0].id=='social'){
			$('#next_step').hide();
			$('#btnSure').show();
		}else{
			$('#next_step').show();
			$('#btnSure').hide();
		}
		//ControlContent(index);
		//$(this).addClass("Color").siblings().removeClass("Color");		
	});
	$("#education").addClass('main-hide');
	$("#work").addClass('main-hide');
	$("#social").addClass('main-hide');
	$('#previous_step').hide();
	/*上一步*/
	$('#previous_step').bind('click', function () {
		  $(".bar").removeClass("Color");
			if(index>0){
				index--;
			}
			
// 			if(index==1){
// 				index=0;
// 				$('#line0').addClass('Color');
// 			}
			console.log(index);
			ControlContent(index);
		
	});
	/*下一步*/
	$('#next_step').bind('click', function () {
		$(".bar").removeClass("Color");
		if(index<2){
			index++;
		}
// 		if(index==1){
// 			index=2;
// 		}
		console.log(index);
		ControlContent(index);
	});
});

function ControlContent(index) {
    var stepContents = ["basicInfo","work","social"];
    var key;//数组中元素的索引值
    for (key in stepContents) {
        var stepContent = stepContents[key];//获得元素的值
        if (key == index) {
        	if(stepContent=='basicInfo'){
        		$('#previous_step').hide();
        	}else{
        		$('#previous_step').show();
        	}
        	if(stepContent=='social'){
        		$('#next_step').hide();
						$('#btnSure').show();
        	}else{
        		$('#next_step').show();
						$('#btnSure').hide();
        	}
            $('#'+stepContent).removeClass('main-hide');
            //$('#point'+key).addClass('c-select');
    		    $('#line'+key).addClass('b-select');
        }else {
            $('#'+stepContent).addClass('main-hide');
            if(key>index){
            	//$('#point'+key).removeClass('c-select');
        		  $('#line'+key).removeClass('b-select');
            }else if(key<index)
						{
            	//$('#point'+key).addClass('c-select');
        		  $('#line'+key).addClass('b-select');
            }
        }
    }
}

export default {
  name: 'App',
  components:{Banana, XChart, customer},
  watch: {
	  filterText(val) {
	    this.$refs.tree.filter(val);
	  }
	},
	methods: {
		 sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    },
		getAjax: function() {
			this.$http.post('http://ai.yiche.com/web/ability/nlu/standardTokenizer', {
				"text": "动效如果有跟评审结论有出入的地方或者不清楚的地方，随时沟通哈~"
			}).then(function(res) {
				console.log(res.data);
			}).catch(function(err) {
				if (err.response) {
					console.log(err.response)
				}
			})
		},
		treeClick(tPath){
			if(tPath.path){
				this.$router.push(tPath.path);
			}
		},
		chartChange(){
			console.log(this.$refs.wish);
			console.log(this.$refs.wish.chartObj);
			console.log(this.$refs.ying.chartObj);
		  this.$refs.wish.chartObj.series[0].update({
				data: [29.9, 71.5, 306.4, 429.2, 144.0, 176.0, 135.6, 248.5, 216.4, 194.1, 95.6, 54.4]
			});
			this.$refs.ying.chartObj.series[0].update({
				data: [29.9, 71.5, 306.4, 429.2, 144.0, 176.0, 135.6, 248.5, 216.4, 194.1, 95.6, 54.4]
			});
		},
		
		exportExcel (objExcel) {//导出Excel
         this.$nextTick(function () {
              let wb = XLSX.utils.table_to_book(document.querySelector('#out-table'));
              let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
              try {
                FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '学生信息.xlsx')
              } catch (e) {
                if (typeof console !== 'undefined') console.log(e, wbout)
              }
              return wbout;
          });
     },
		a(res){
			console.log(res);
		},
		handleClick(row) {
			  this.$router.push({path: row.row.tabPath});
        console.log(row);
      },
		 append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
	  filterNode(value, data) {
	    if (!value) return true;
	    return data.label.indexOf(value) !== -1;
	  },
		Test(){
			// let vm = this;
			var changeMsg = this.msgTest[0];
			this.msgTest.shift(this.msgTest[0]);
			this.msgTest.push(changeMsg);
		},
		initWebSocket(){//初始化websocket
			const wsuri = "ws://192.168.55.97:8888/bot-ui/chatBot ";
			this.websock = new WebSocket(wsuri);//这里面的this都指向vue
			this.websock.onopen = this.websocketopen;
			// this.websock.send = this.websocketonsend;
			this.websock.onmessage = this.websocketonmessage;
			this.websock.onclose = this.websocketclose;
			this.websock.onerror = this.websocketerror;
		},
		websocketopen(){//打开
			console.log("WebSocket连接成功");
		},
		websocketonsend(e){
			this.websock.send(e);
		},
		websocketonmessage(e){ //数据接收
			this.productinfos = JSON.parse(e.data);
			console.log(this.productinfos);
		},
		websocketclose(){  //关闭
			console.log("WebSocket关闭");
		},
		websocketerror(){  //失败
			console.log("WebSocket连接失败");
		},
		send(){
			let obj = {
				    logId:"123",
				    caller:{
				        appId:"10037",
				        token:"cookie"
				    },
				    user:{
				        uuid:"9986645666393488",
				        content:"智能选车",
				        channel:"3"
				    },
				    parameters:{
				        cityId:"201",
				        sence:"0",
				        version:"8.3.1",
				        device:"iphone 6s",
				        system:"ios",
				        isRooted:"no",
				        senceDataType:"0",
				        abstractParam:"",
				        inputMode:"1001",
				        tagClassification:"100"
				    },
					};
				  let objjust = JSON.stringify(obj);
					console.log(objjust);
					console.log(obj);
			    this.websocketonsend(objjust);
		}
	},
	mounted () {
		//console.log(this);
		this.getAjax();
		this.tableData[0].city='嘤嘤嘤';
		//this.exportExcel();
		console.log(this.$refs.tree);
		//console.log(this.$refs.tree);
		//setInterval(this.Test,2000);
	},
	
  data() {
      return {
				aaa:
					[
							{ type: 'text', author: `me`, data: { text: `Say yes!` } },
							{ type: 'text', author: `user1`, data: { text: `No.` } }
					]
				,
				bbb:[
					{ type: 'text', author: `user1`, data: { text: `一统江湖` } },
					{ type: 'text', author: `me`, data: { text: `文成武德!` } }
				],
				ccc:[
					{ type: 'text', author: `user1`, data: { text: `东山再起` } },
					{ type: 'text', author: `me`, data: { text: `自强不息` } }
				],
				participants: [
        {
          id: 'user1',
          name: 'Matteo',
          imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
        },
        {
          id: 'user2',
          name: 'Support',
          imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user1`, data: { text: `No.` } }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: true, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false ,
      messageStyling: true ,
				option:{},
				data:[{
          name: '安装，实施人员',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
          name: '工人',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
          name: '销售',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
          name: '项目开发',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
          name: '其他',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],
        other:{
	        chart:{height:500, width:1140},
	        credits: {
	        	enabled: false
	        },
          title: {
            //大标题
            text: ''
          },
          subtitle: {
            //小标题
            text: ''
          },
          xAxis: {
            title: {
              text: ''
            }
          },
          yAxis: {
            title: {
              text: ''
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
          plotOptions: {
            series: {
              label: {
                connectorAllowed: false
              },
              pointStart: 2010
            }
          },
          series:'',
          responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
                }
              }
            }]
          },
					exporting: {
					  enabled: true
				  }
        },
        option1:{
					credits: {
						enabled: false
					},
          chart: {
            type: 'column',
            height:500, 
						width:940,
						plotBackgroundColor:''
          },
          title: {
            text: '月平均降雨量'
          },
          subtitle: {
            text: '数据来源: 百度前端技术部'
          },
          xAxis: {
            categories: [
              '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
            ],
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: '降雨量 (mm)'
            }
          },
          tooltip: {
            // head + 每个 point + footer 拼接成完整的 table
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
          },
          plotOptions: {
            column: {
              borderWidth: 0,
              pointWidth:25, //柱子宽度
            }
          },
          series: [{
            name: '东京',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,500, 194.1, 95.6, 54.4],
            color: 'skyblue',//柱子颜色
						Width: '20px'
          }],
          exporting:{
						 enabled:true //用来设置是否显示‘打印’,'导出'等
					}
        },
        
				activeName: 'second',
				activeName1: 'second',
				activeName2: 'sec',
				tableData: [{
          date: '2016-05-03',
          name: '王小',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
					tabPath: '/'
        }, {
          date: '2016-05-02',
          name: '王虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
					tabPath: '/apple'
        }, {
          date: '2016-05-04',
          name: '虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
					tabPath: '/ok'
        }, {
          date: '2016-05-01',
          name: '虎啊',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
					tabPath: '/banana'
        }],
				websock: null,
				msgTest: ['周杰伦','李宇春','刘能','赵四','赵玉田'],
        filterText: '',
        data2: [{
          id: 1,
          label: '一级 1',
					path: '/banana',
          children: [{
            id: 4,
            label: '二级 1-1',
						path: '/apple',
            children: [{
              id: 9,
              label: '三级 1-1-1',
							path: '/ok',
            }, {
              id: 10,
              label: '三级 1-1-2',
							path: '/apple'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
					path: '/lunbo',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
		created(){
				//页面刚进入时开启长连接
				this.initWebSocket();
				myvue = this;
				myvue.other.title.text = '2010 ~ 2017 年太阳能行业就业人员发展情况';
        myvue.other.subtitle.text = '数据来源：百度大搜索';
        myvue.other.series = myvue.data;     //数据
        myvue.other.yAxis.title.text = '就业人数';   //数据
        myvue.option = myvue.other;
				
		 },
　　　destroyed() {
　　　//页面销毁时关闭长连接
　　　　this.websocketclose();
　　　}
}
</script>
<style scoped>
	#app{
		min-width: 1300px;
	}
customer{
	float: left !important;
}
/deep/ .sc-launcher {
	display: none;
}
/deep/ .sc-user-input {
	display: none;
}
.Color{
	background: rgb(96, 72, 124) !important;
}
.processBar{
      float: left;
      width: 200px;
      margin-top: 15px;
    }
    .processBar .bar{
      background: rgb(230, 224, 236);
      height: 30px;
      position: relative;
      width: 200px;
      margin-left: 10px;
			cursor: pointer;
    }
    .processBar .b-select{
      background: rgb(96, 72, 124);
    }
    .processBar .bar .c-step{
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgb(230, 224, 236);
      left: -12px;
      top: 50%;
      margin-top: -4px;
    }
    .processBar .bar .c-select{
      width: 10px;
      height: 10px;
      margin: -5px -1px;
      background:rgb(96, 72, 124);

    }
    .main-hide {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    .poetry{
    	color: rgb(96, 72, 124); 
    	font-family: KaiTi_GB2312, KaiTi, STKaiti; 
    	font-size: 16px; 
    	background-color: transparent; 
    	font-weight: bold; 
    	font-style: normal; 
    	text-decoration: none;
    }
    /* button{
    	width: 80px;
	    line-height: 30px;	    
	    font-size: 11px;
	    color: rgb(116, 42, 149);
	    text-align: center;
	    border-radius: 6px;
	    border: 1px solid #e2e2e2;	    
	    cursor: pointer;
	    background-color: #fff;
	    outline:none;
    }
    button:hover{
      border: 1px solid rgb(179, 161, 200);
    } */

.el-tabs .el-tabs--top{
	margin: 0 auto;
	width: 1086px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.trs:hover
{
	background: blueviolet;
}
.ico
{
	background: blueviolet;
	height: 50px;
}
img
{
	height: 50px;
	float: left;
}
.footer
{
	background: grey;
	height: 20px;
	text-align: center;
}


.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
