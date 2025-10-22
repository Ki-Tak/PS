function toMin(t){ 
    const [h,m]=t.split(":"); 
    return parseInt(h)*60+parseInt(m); 
}

function solution(plans){
  const answer = [];
  const stack = []; 

  plans = plans
    .map(([name, start, play]) => [name, toMin(start), parseInt(play)])
    .sort((a,b)=> a[1]-b[1]);

  for(let i=0;i<plans.length-1;i++){
    const [name, start, play] = plans[i];
    const nextStart = plans[i+1][1];
    let gap = nextStart - start; 

    if (play <= gap){
 
      answer.push(name);
      gap -= play;

      while(gap > 0 && stack.length){
        const [sn, sr] = stack.pop();
        if (sr <= gap){
          answer.push(sn);
          gap -= sr;
        }else{
          stack.push([sn, sr - gap]);
          gap = 0;
        }
      }
    }else{
      stack.push([name, play - gap]);
    }
  }

  answer.push(plans[plans.length-1][0]);


  while(stack.length){
    answer.push(stack.pop()[0]);
  }

  return answer;
}
