/**
 * Created by Administrator on 2018/8/22.
 */
import {removeToken} from 'common/js/auth';
import store from '../store'


function capture(error){

  let statusCode=error.networkError.statusCode;
  switch (statusCode){
    case 401:
      store.commit('SET_TOKEN', '');
      store.commit('SET_ROLES', []);
      removeToken();
      location.reload();
      break;
  }
}

export default capture;
