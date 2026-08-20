const path = require('path');
const ts_node = require(path.resolve('../RyuNET-core/node_modules/ts-node'));
ts_node.register({
  project: path.resolve('./tsconfig.json'),
  typeCheck: false,
  files: false,
  transpileOnly: false,
});
global.R = { GameCode(){}, Route(){}, Unhandled(){}, Contributor(){}, Config(){}, WebUIEvent(){}, DataFile(){}, ExtraModuleHandler(){} };
global.K = { ATTR(){}, ITEM(){}, ARRAY(){} };
global.U = { toXML(){}, parseXML(){}, GetConfig(){}, NFC2Card(){}, Card2NFC(){}, EncodeString(){}, DecodeString(){} };
global.$ = (d)=>d; global.$.ATTR=()=>{}; global.$.BIGINT=()=>{}; global.$.BIGINTS=()=>{}; global.$.BOOL=()=>{}; global.$.BUFFER=()=>{}; global.$.CONTENT=()=>{}; global.$.ELEMENT=()=>{}; global.$.ELEMENTS=()=>{}; global.$.NUMBER=()=>{}; global.$.NUMBERS=()=>{}; global.$.STR=()=>{};
global._ = require('lodash');
global.IO = { Resolve(){}, WriteFile(){}, ReadFile(){}, ReadDir(){}, Exists(){} };
global.DB = { FindOne(){}, Find(){}, Insert(){}, Remove(){}, Update(){}, Upsert(){}, Count(){} };
global.EVENTS = { EmitScore(){} };
global.CORE_VERSION = 'v1.0';
global.CORE_VERSION_MAJOR = 1;
global.CORE_VERSION_MINOR = 0;
try {
  require(path.resolve('./sdvx@asphyxia/index.ts'));
  console.log('LOADED OK');
} catch (e) {
  console.log('THREW:', e.message.slice(0, 2000));
}
