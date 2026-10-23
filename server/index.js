import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
const root = fileURLToPath(new URL('../', import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.svg':'image/svg+xml'};
export function createServer(){return http.createServer(async(req,res)=>{
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});res.end();return;}
 try{
 const url=new URL(req.url,'http://localhost');
 if(url.pathname==='/api/health'){res.writeHead(200,{'Content-Type':'application/json'});res.end(req.method==='HEAD'?undefined:JSON.stringify({status:'ok'}));return;}
 if(url.pathname==='/api/portfolio'){const content=await readFile(path.join(root,'data/portfolio.json'));res.writeHead(200,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age=60'});res.end(req.method==='HEAD'?undefined:content);return;}
 const pathname=decodeURIComponent(url.pathname);
 // Only expose public assets, never source, secrets, or Git metadata.
 if(!(/^\/(?:index\.html|design-system\.html)?$/.test(pathname)||/^\/(?:assets|styles|scripts|data)\/[\w./-]+$/.test(pathname))||pathname.split('/').some(p=>p.startsWith('.'))){res.writeHead(404);res.end();return;}
 const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
 if(!file.startsWith(root)||!(await stat(file)).isFile())throw new Error('Not found');
 res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});
 if(req.method==='HEAD')res.end();else createReadStream(file).pipe(res);
 }catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');}
});}
if(process.argv[1]===fileURLToPath(import.meta.url)){const port=Number(process.env.PORT||3000);createServer().listen(port,'127.0.0.1',()=>console.log(`Portfolio running at http://localhost:${port}`));}
