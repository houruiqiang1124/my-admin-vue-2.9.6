import axios from 'axios';
import {base_url, timeout} from '@/config/request';
import {
	MessageBox,
	Message
} from 'element-ui'
// import store from '@/store'


const BASE_URL = process.env.NODE_ENV === 'development' ? base_url.dev : base_url.pro;

// create an axios instance
const service = axios.create({
	timeout: timeout 
})

// 请求拦截器配置
service.interceptors.request.use(
	config => {
		return config
	},
	error => {
		console.log(error)
		return Promise.reject(error)
	}
)

// 响应拦截器配置
service.interceptors.response.use(response => { 
    // do something
    return response
}, error => {
    console.log(error)
    return Promise.reject(error)
})



/*网络请求部分*/

/*
 *  get请求
 *  url:请求地址
 *  params:参数
 * */
export function get(url, params = {}) {
	return new Promise((resolve, reject) => {
		service({
			url: url,
			method: 'get',
			params: params
		}).then(response => {
			resolve(response.data);
		}).catch(error => {
			reject(error);
		});
	});
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function post(url, params = {}) {
	return new Promise((resolve, reject) => {
		service({
			url: url,
			method: 'post',
			data: params,
			timeout: 5000
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		});
	});
}

export default {
	post,
	get
}
