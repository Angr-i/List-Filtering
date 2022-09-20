function filter_list(l) {
  let g=[];
  for(x=0,h=0;x<l.length;x++){
    
    
    if(typeof l[x]!="string"){
      g.push(l[x])
    }
  }
console.log(g)
}
