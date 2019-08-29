const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      if(Array.isArray(collection)){
        collection.forEach(num => fn(num))
      }else{
        Object.values(collection).forEach(num => fn(num))
      }
      return collection
    },

    map: function(collection,fn) {
      let ans = []
      if(Array.isArray(collection)){
        collection.forEach(num => ans.push(fn(num)))
      }else{
        Object.values(collection).forEach(num => ans.push(fn(num)))
      }
      return ans
    },

    reduce: function(collection, callback, acc) {
      let ans = (!!acc) ? acc : collection[0]
      let i = (!!acc) ? 0 : 1
      for(; i<collection.length; i++){
        ans = callback(ans,collection[i],collection)
      }
      return ans
    },

    find: function(collection,predicate){
      let i=0
      while (i<collection.length){
        if (predicate(collection[i])){
          return collection[i]
        }else{
          i++
        }
      }
      return undefined
    },

    filter: function(collection, predicate){
      let ans =[]
      collection.forEach(e=>{
        if (predicate(e)){
          ans.push(e)
        }
      })
      return ans
    },

    size: function(collection){
      return Object.values(collection).length
    },

    first: function(array,n){
      let limit = (!!n) ? n : 0
      let ans = []
      if(limit===0){
        return array[0]
      }else{
        for(let i=0; i<limit; i++){
          ans.push(array[i])
        }
        return ans
      }
    },

    last: function(array,n){
      let limit = (!!n) ? n : 0
      let ans = []
      if(limit===0){
        return array[array.length-1]
      }else{
        for(let i=-limit; i<0; i++){
          ans.push(array[array.length+i])
        }
        return ans
      }
    },

    compact: function(array){
      let ans=[]
      array.forEach(e=>{
        if (!!e){
          ans.push(e)
        }
      })
      return ans
    },

    sortBy: function(array, callback){
      const transformed = array.map(e=>callback(e))
      let sorted = [...transformed] //create copy to prevent mutation with sort
      sorted.sort((a, b)=> {
        return a > b ? 1 : b > a ? -1 : 0; //necessary for sorting numbers
      })
      let sortedIndex = sorted.map(e=> transformed.indexOf(e))
      return sortedIndex.map(e=> array[e])
    },

    flatten: function(array,bool){
      if (bool){
          return Array.prototype.concat(...array)
      }else{
        while (array.find(el => Array.isArray(el))){
          array = Array.prototype.concat(...array)
        }
        return array
      }
    },

    uniq: function(array,isSorted,callback){
      let ans=[]
      let results=[] //array for execution results
      array.forEach(e=>{
        let mod = !!callback ? callback(e) : e
        if (!ans.includes(mod) && !results.includes(mod)){
          ans.push(e)
          results.push(mod)
        }
      })
      return ans
    },

    keys: function(object){
      let ans = []
      for (let key in object){
        ans.push(key)
      }
      return ans
    },

    values: function(object){
      let ans = []
      for (let key in object){
        ans.push(object[key])
      }
      return ans
    },

    functions: function(object){
      let ans=[]
      for (let key in object){
        if(typeof(object[key])==="function"){
          ans.push(key)
        }
      }
      return ans
    },

    giveMeMore: function(){
      return true
    }

  }
})()

fi.libraryMethod()
