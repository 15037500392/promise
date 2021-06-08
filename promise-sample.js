/*
1.Promise 就是一个类，在执行这个类的时候，需要传递一个执行器进去，执行器就会立即执行
2.Promise 中有三种状态 分别为成功 (fulfilled),失败(rejected),等待(pending)
     pending =>  fulfilled
     pending =>  rejected
     一旦状态确定就不可更改
3.resolve 和 reject 函数是用来更改状态的
      resolve => fulfilled
      reject => rejected
4.then方法内部做的事情就是判断状态，如果状态是成功，调用成功的回调函数，如果状态是失败，调用失败的回调函数
  then成功回调有一个参数 表示成功之后的值，then失败回调有一个参数，表示失败之后的值。
* */
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class PromiseSample {
    constructor(executor) {
        executor(this.resolve, this.reject)
    }
    status = PENDING
    value = undefined
    reason = undefined
    resolve = value => {
        if( this.status === PENDING ) {
            this.status = FULFILLED
            this.value = value
        }
    }

    reject = reason => {
        if( this.status === PENDING ) {
            this.status = REJECTED
            this.reason = reason
        }
    }

    then( successCallBack, failCallBack){
        if(this.status === FULFILLED){
            successCallBack(this.value)
        }else{
            failCallBack(this.reason)
        }
    }
}

module.exports = PromiseSample
