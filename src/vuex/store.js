import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 保存所有的数据
const state={
    date:new Date()+"",
    num:0,
    // 订单列表
    ordeList:[]
};
// 同步修改state中状态的方法
const mutations={
	// 第一个参数默认为state
    setDate(state){
        state.date=new Date()+"";
    },
    addNum(state){
        state.num++;
    },
    addPro(state,pro){
    	var flag=true;
    	for(var n=0;n<state.ordeList.length;n++){
    		if(pro.title === state.ordeList[n].title){
    			state.ordeList[n].num++;
    			// state.orderList.splice(n,1,pro);
    			flag=false;
    		}
    	}if (flag) {
    		pro.num++;
    		state.ordeList.push(pro);
    	}
    	
    }
};
//调用mutations中方法修改state的方法
const actions={
    set_Date(store){
        setInterval(function(){
            // actions中方法使用commit带哦用mutations中方法
            store.commit("setDate");
        },1000)
    },
    add_Num({commit}){
    	commit("add_Num");
    	// commit("addNum");
    },
    add_Pro({commit},pro){
    	commit("addPro",pro);
    }
};
const getters={
    total(state){
    	// return 
    	var total=0;
    	for(var n=0;n<state.ordeList.length;n++){
    		total+=state.ordeList[n].num*state.ordeList[n].price;
    	}
    	return total;
    },
    total1(state){
    	// return 
    	var total1=0;
    	for(var n=0;n<state.ordeList.length;n++){
    		total1=state.ordeList[n].num*state.ordeList[n].price;
    	}
    	return total1;
    },
    tol(state){
    	// return 
    	var tol=0;
    	for(var n=0;n<state.ordeList.length;n++){
    		tol+=state.ordeList[n].num;
    	}
    	return tol;
    },
    tol1(state){
    	// return 
    	var tol1=0;
    	for(var n=0;n<state.ordeList.length;n++){
    		tol1=state.ordeList[n].num;
    	}
    	return tol1;
    },
    tolNmae(state){
    	var tolNmae="";
    	for(var n=0;n<state.ordeList.length;n++){
    		tolNmae=state.ordeList[n].title;
    	}
    }
};

export default new Vuex.Store({
	state,mutations,actions,getters
});