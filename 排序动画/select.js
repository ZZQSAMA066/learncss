function selectsort(){
    var numArr=[];
    var num=document.getElementById("form-control").value;
    var numArray=document.getElementById("num-input");
    numArr.length=0;
    numArray.value='';
    for(var i=0;i<num;i++){/*随机形成数组*/
        numArr.push(randomGet(1,50));
        numArray.value=numArr;
    }
    var oUl=document.getElementsByClassName("sort_li")[0];
    this.Arr=[];
    init1(numArr,oUl);/*初始化*/
    sort1(numArr);
    animation1(oUl);
}
function init1(numArr,oUl){
    let html='';
    numArr.map((item)=>{
        html+='<li class="" style="height:'+item*10+'px"><p>'+item+'</p></li>';
    });
    oUl.innerHTML=html;
}

function selectSortDom(arr,num,index,flag,oUl){
    let html='',i,className="";
    for(i=0;i<arr.length;i++){
        if(flag===true){
            className="";
        }else{
            if(i==num){
                className="bubbling1";
            }else if(i==index){
                className="bubbling2";
            }else if(i<=num){
                className="completed";
            }else{
                className="";
            }
        }
        html+='<li class="'+className+'" style="height:'+arr[i]*10+'px"><p>'+arr[i]+'</p></li>';
    }
    oUl.innerHTML=html;
    document.getElementById("num-out").value=arr;
}

function animation1(oUl){
    let Arr=this.Arr;
    clearInterval(this.timer);
    this.timer=setInterval(function(){
        if(Arr.length>0){
            this.selectSortDom(Arr[0][0],Arr[0][1],Arr[0][2],Arr[0][3],oUl);
            Arr.shift();
        }else{
            clearInterval(this.timer);
        }
    },300);
}

function randomGet1(a,b){
    var result=Math.random()*(b-a)+a;
    return result>>0;
}

//选择排序算法的局部实现
function sort1(numArr){
    let resArr=numArr.slice(),len=resArr.length,temp;
    for(let i=0;i<len-1;i++){
        let minn=i;
        for(let j=i+1;j<len;j++){
            if(resArr[j]<resArr[minn]){
                minn=j;
            }
        }
        for(let j=i+1;j<=minn;j++) this.pushArr(resArr.slice(),i,j,false);
        if(minn!==i){
            this.pushArr(resArr.slice(),i,minn,false);
            temp=resArr[i];
            resArr[i]=resArr[minn];
            resArr[minn]=temp;
        }
    }
    this.pushArr(resArr.slice(),-1,-1,true);
}
function pushArr(){
    this.Arr.push(Array.prototype.slice.call(arguments));
}