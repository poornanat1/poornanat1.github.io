import {cp,mkdir,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist');
for(const file of ['index.html','design-system.html','assets','styles','scripts/app.js','data']) await cp(file,`dist/${file}`,{recursive:true});
console.log('Static frontend built in dist/. Deploy the Node server separately for /api endpoints.');
