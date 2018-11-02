/**
 * Created by Administrator on 2018/6/5.
 */


export const ERR_OK = 0;

export const baseURL = 'http://115.159.154.194/mlshop/';

export const tokenName='x-auth-token';

export const carSourceType={
  'shop':"OWN",//4S
  'factory':"COPORATE"//厂家
}

export const carSourceStatus={
  'start':true,//启用
  'forbid':false//禁用
}

export const storeStatusType={
  "start":1,
  "forbid":2
};

export const storeType={
  "direct":1,
  "franchise":2
};

export const customerGrade={
  'gOne':1,
  'gTwo':2,
  'gThree':3
}
export const customerStatus={
  'normal':1,
  'blacklist':0,
}
export const hasAuth={
  'has':1,
  'no':0,
}
export const  receptionStatus={
  'statusOne':1,
  'statusTwo':2,
  'statusThree':3,
  'statusFour':4,
  'statusFive':5
}

export const callType={
  'typeOne':1,
  'typeTwo':2
}
export const employeeStatus={
  'normal':false,
  'turnover':true
}
export const buycar= {
  'start':1
}
export const adminlevel= {
  'super':'A',
  'normol':'B',
  'money':'C'
}
