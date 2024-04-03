/**
 * 新增a.js 提交记录b
 */
function deepClone(obj={},map=new Map()){
    if(typeof obj !='object'){
        return obj;
    }

    if(map.get(obj)){
        return map.get(obj)
    }
    let result = {};
    if(Array.isArray(obj)||obj instanceof Array||Object.prototype.toString(obj)==='[object Array]'){
        result=[]
    }

    map.set(obj,result);//防止重复
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            result[key] = deepClone(obj[key],map)
        }
    }
    return result;
}