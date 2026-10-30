const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'assets/works-data.js'),'utf8'), context);
const d = context.window.DNM_WORKS;
const assert = (condition, message) => { if(!condition) throw Error(message); };
assert(d.works.length === 80,'Expected 80 selected works');
assert(new Set(d.works.map(w=>w.id)).size===80,'Duplicate work ID');
const ids = new Set(d.works.map(w=>w.id));
assert(ids.has(d.heroId),'Missing hero');
for(const id of d.featuredIds) assert(ids.has(id),'Missing featured work');
for(const w of d.works) {
  assert(/^\d{19}$/.test(w.id),'Invalid ID');
  assert(w.url===`https://www.douyin.com/video/${w.id}`,'URL/ID mismatch');
  assert(w.playValue>0 && w.likeValue>=0,'Invalid metrics');
  assert(['field','cars','digital','business'].includes(w.category),'Invalid category');
  assert(fs.existsSync(path.join(root,`assets/qr/works/${w.id}.png`)),'Missing QR image');
  if(w.image) for(const suffix of ['.jpg','-720.jpg']) assert(fs.existsSync(path.join(root,`assets/gallery/${w.image}${suffix}`)),'Missing scene derivative');
}
const local=[];
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const match of html.matchAll(/(?:src|href)="(assets\/[^"?]+)(?:\?[^"\s]*)?"/g))local.push(match[1]);
for(const p of [...new Set(local)]) assert(fs.existsSync(path.join(root,p)),`Missing HTML asset ${p}`);
const summary={works:d.works.length,uniqueIds:ids.size,featured:d.featuredIds.length,sceneImages:d.works.filter(w=>w.image).length,qrFiles:d.works.length,localReferences:[...new Set(local)].length,categories:Object.fromEntries(['field','cars','digital','business'].map(k=>[k,d.works.filter(w=>w.category===k).length])),status:'passed'};
console.log(JSON.stringify(summary,null,2));
fs.writeFileSync(path.join(root,'qa/data-check.json'),JSON.stringify(summary,null,2)+'\n');
