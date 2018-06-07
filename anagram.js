function couldBeAnagram(s1, s2) {
    let r = s2.split('')
   let q = s1.split('').map((elem) => {
     if (!r.includes(elem)){
       return false
     } else {
        return true
     }
     
   })
if (q.includes(false)){
 return false
} else {
 return true
}
   console.log()
  
}

console.log(couldBeAnagram('silent', 'li?ten'))
