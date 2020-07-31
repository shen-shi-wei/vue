(function () {
  var vm = window.vm = new Vue({
    el: '.aui-wrapper',
    data: function () {
      return {
    	stakeMsg:[],//工程流水号的桩信息
    	stakeInfo:{},//桩基的基本信息
        simpleData:[], // 桩基的采样数据
        detailData:{header:[],data:[]}, //详细数据
        totalData:{header:[],data:[]}, // 数据总表
        loadData:{header:[],data:[]},// 加载表
        unLoadData:{header:[],data:[]},// 卸载表
        logData:[]// 日志数据
      }
    },
    
    beforeCreate: function () {
      vm = this;
    },
    created: function () {
      },
    methods: {
    	// 获取工程下桩的信息,工程流水号为190001为例，以实际项目为准
    	getStakeMsg: function () {
        	return vm.$http.get('/static/stakeList?serialNo=190001').then(function (res) {
            if (res.data.code !== 0) {
              return self.$message.error(res.data.msg);
            }
            vm.stakeMsg = res.data.data;
            // console.info(JSON.stringify(res.data.data));
          }).catch(function () {});
        },
        // 获取桩的基本信息 桩ID为102184390397788160为例，以实际项目为准
        getBasicInfo: function () {
        	return vm.$http.get('/static/stakeMsg/' + '102184390397788160').then(function (res) {
            if (res.data.code !== 0) {
              return self.$message.error(res.data.msg);
            }
            vm.stakeInfo = res.data.data;
          }).catch(function () {});
        },
    	// 获取桩的采样数据,桩ID为102184390397788160为例，以实际项目为准
        getSimpleDataMsg: function () {
        	return vm.$http.get('/static/stakeDetailsData/' + '102184390397788160').then(function (res) {
            if (res.data.code !== 0) {
              return self.$message.error(res.data.msg);
            }
            vm.simpleData = res.data.data;
          }).catch(function () {});
        },
        // 详细数据=============开始======================
        getDetailsMsg: function(){
          Promise.all([
        		vm.getBasicInfo(),//桩的基本信息
            	vm.getSimpleDataMsg()//桩的采样信息
  	      ]).then(function(){
  	    	vm.detailData = detailsDataShow(vm.stakeInfo,vm.simpleData);
  	      });
      },
       // 详细数据=============结束======================
       // 数据总表=============开始======================
      getTotalData: function(){
    	  Promise.all([
      		vm.getBasicInfo(),//桩的基本信息
          	vm.getSimpleDataMsg()//桩的采样信息
	      ]).then(function(){
	    	vm.totalData = totalDataShow(vm.stakeInfo,vm.simpleData);
	    	console.info(JSON.stringify(vm.totalData.data));
	      });
      },
      // 数据总表=============结束======================
      // 加载表=============开始======================
      getLoadData: function(){
    	  Promise.all([
        		vm.getBasicInfo(),//桩的基本信息
            	vm.getSimpleDataMsg()//桩的采样信息
  	      ]).then(function(){
  	    	vm.loadData = loadDataShow(vm.stakeInfo,vm.simpleData);
  	      });
      },
      // 加载表=============结束======================
      // 卸载表=============开始======================
      getUnLoadData: function(){
    	  Promise.all([
      		vm.getBasicInfo(),//桩的基本信息
          	vm.getSimpleDataMsg()//桩的采样信息
	      ]).then(function(){
	    	vm.unLoadData = unLoadDataShow(vm.stakeInfo,vm.simpleData);
	      });
      },
      // 卸载表 =============结束======================
      // 日志 =============开始======================
      // 获取桩的日志数据,桩ID为102184390397788160为例，以实际项目为准
      getLogData: function(){
		  vm.$http.get('/static/stakeLogData/' + '102184390397788160').then(function (res) {
              if (res.data.code !== 0) {
                return self.$message.error(res.data.msg);
              }
              vm.logData = res.data.data;
            }).catch(function () {});
      },
      //日志=============结束======================
      // 曲线图=============开始======================
      getCurveData: function(){
    	  var div_qs =  document.getElementById("static_qs");
    	  var div_slgq =  document.getElementById("static_slgq");
    	  var div_slgt =  document.getElementById("static_slgt");
    	  var tableData = {header:[],data:[]};
    	  // 为QS 、S-lgQ数据准备
    	  Promise.all([
        		vm.getBasicInfo(),//桩的基本信息
            	vm.getSimpleDataMsg()//桩的采样信息
  	      ]).then(function(){
  	    	tableData = detailDataCal(vm.stakeInfo,vm.simpleData);
  	    	console.info(JSON.stringify(tableData));
  	   // Qs曲线
      	  qsCurve(vm.stakeInfo,tableData.data,div_qs);
      	  // slgq曲线
      	  slgqCurve(vm.stakeInfo,tableData.data,div_slgq);
      	  if(vm.stakeInfo.testType != 11){
      		// slgt曲线
          	  slgtCurve(vm.stakeInfo,tableData.data,div_slgt);
      	  }
  	      });
      }
      // 曲线图=============结束======================
    }
  });
})();