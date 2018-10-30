let enumData={
	"CarCommunicationStatusEnum": "ABCDEF",
	"CarCommunicationTypeEnum": "AB",
	"CarSourceTypeEnum": {
		"OWN": "自己经营的",
		"COPORATE": "与人合作的"
	},
	"CustomerLevelEnum": {
		"A": "最高级别",
		"B": "中等级别",
		"C": "最低级别"
	},
	"OrderAllocateStatusEnum": "WAITALREADY",
	"OrderByDirection": {
		"ASC": "升序排列",
		"DESC": "降序排列"
	},
	"OrderStatusEnum": "NEWFINISHREFUND",
	"OrderTypeEnum": "ABC",
	"QueryFilterCombinator": {
		"AND": "并且的意思",
		"OR": "或者的意思",
		"NOT": "取反"
	},
	"QueryFilterOperator": {
		"ISNULL": "isnull",
		"ISNOTNULL": "isnotnull",
		"GREATTHAN": ">",
		"LESSTHAN": "<",
		"NOTLESSTHAN": ">=",
		"NOTGREATTHAN": "<=",
		"EQUEAL": "=",
		"IN": "in",
		"NOTIN": "notin",
		"NOT": "not",
		"LIKE": "like"
	},
	"ShopTypeEnum": {
		"OWN": "加盟",
		"COPORATE": "与人合作的"
	}
}

  function createProxy(obj){
    let proxy=new Proxy(obj,{
      get:function(target,property){
        if (property in target) {
          return typeof target[property]==='object'?createProxy(target[property]):target[property];
        } else {
          throw new ReferenceError("Property " + property + " does not exist.");
        }
      }
    });
    return proxy;
  }
   
 export default createProxy(enumData)