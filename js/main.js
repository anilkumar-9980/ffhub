
document.getElementById('calc')?.addEventListener('click',()=>{
 const v=+document.getElementById('cur').value, m=document.getElementById('mode').value;
 let r=m==='faster'?Math.min(100,v+5):Math.max(0,v-5);
 document.getElementById('result').textContent=`Try ${r}. Test it in training before using it in ranked.`;
});
document.getElementById('plan')?.addEventListener('click',()=>{
 const c=+document.getElementById('cp').value,t=+document.getElementById('tp').value,a=+document.getElementById('ap').value;
 const need=Math.max(0,t-c); const matches=a>0?Math.ceil(need/a):0;
 document.getElementById('plan-result').textContent=need?`You need ${need} points — about ${matches} matches at ${a} points per match.`:'Target already reached.';
});
