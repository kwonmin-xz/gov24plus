const s=async o=>{for(const e of o)await new Promise((c,t)=>{const r=document.querySelector(`script[src="${e}"]`);r&&document.body.removeChild(r),c(`${e} removed`)})};export{s as r};
