import * as types from './../constants/actions.types';
import env from './../env';
import axios from 'axios';

export function getItemsFromApi(options){
  console.log("GET ITEMS ACTION");
  const reqPromise = axios.get(env.MOCKAPI + '/posts');
  
  return {
    type: types.GET_ITEMS,
    payload: reqPromise
  }

}