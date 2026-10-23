import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from '../server/index.js';
test('serves portfolio and public frontend, protects private files',{timeout:15000},async()=>{
 const server=createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base=`http://127.0.0.1:${server.address().port}`;
 try {
  const response=await fetch(base+'/api/portfolio');assert.equal(response.status,200);const data=await response.json();assert.equal(data.projects.length,4);assert.equal(data.experience.length,4);
  for(const file of ['/','/styles/tokens.css','/scripts/app.js','/design-system.html','/assets/project-1.png'])assert.equal((await fetch(base+file)).status,200,file);
  for(const file of ['/.git/config','/server/index.js','/package.json','/data/../server/index.js','/missing'])assert.equal((await fetch(base+file)).status,404,file);
  assert.equal((await fetch(base+'/api/portfolio',{method:'POST'})).status,405);
  const head=await fetch(base+'/',{method:'HEAD'});assert.equal(head.status,200);assert.equal(await head.text(),'');
 }finally{server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
});
