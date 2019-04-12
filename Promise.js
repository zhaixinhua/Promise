const PENDING = '0'
const FULFILLED = '1'
const REJECTED = '2'
class Promise {
    constructor(func) {
        this.STATUS = PENDING
        
        this.resolveEventQuery = []
        this.rejectEventQuery = []
        this.arguments = []
        let resolve = (arg) => {
            console.log(arg);
            if (this.STATUS === PENDING) {
                this.STATUS = FULFILLED
                this.arguments.push(arg);
                this.resolveEventQuery.forEach((event,index)=>{
                    event(this.arguments[index])
                })
            }
            return this
        }
        let reject = (arg) => {
            if (this.STATUS === PENDING) {
                this.STATUS = REJECTED
                this.arguments.push(arg);
                this.rejectEventQuery.forEach((event,index)=>{
                    event(this.arguments[index])
                })
            }
            return this
        }
        func(resolve, reject)
    }
    then(fun1, fun2) {
        this.STATUS === FULFILLED ? this.resolveEventQuery.push(fun1) : this.rejectEventQuery.push(fun2)
        return this
    }
    catch (fun) {
        if( this.STATUS === REJECTED ){
            fun(this.ARG)
        }
        return this
    } 
    finally(fun) {
        fun(this.ARG)
    }

}
module.exports = Promise