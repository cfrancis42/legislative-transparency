const shareButton=document.getElementById('shareButton');
const copyButton=document.getElementById('copyButton');
const status=document.getElementById('shareStatus');
async function copyLink(){try{await navigator.clipboard.writeText(location.href.split('#')[0]);status.textContent='Website link copied!';}catch(e){status.textContent='Copy the website address from your browser’s address bar.';}}
copyButton.addEventListener('click',copyLink);
shareButton.addEventListener('click',async()=>{if(navigator.share){try{await navigator.share({title:document.title,text:'Read the Federal Legislative Transparency & Accountability Act citizen proposal.',url:location.href.split('#')[0]});}catch(e){if(e.name!=='AbortError')await copyLink();}}else{await copyLink();}});
