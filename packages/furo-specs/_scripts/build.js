#!/usr/bin/env node


const fs = require('fs');
const os = require('os');
const path = require('path');
const execSync = require('child_process').execSync;

let config;
// config öffnen
if (fs.existsSync('./furo.spec.conf.json')) {
  config = JSON.parse(fs.readFileSync('./furo.spec.conf.json'));
} else {
  console.log("furo.spec.conf.json not found, you can copy an example from " + path.normalize(__dirname + "/../"));
  process.exit(1);
}

const templateDirBundled = config.custom_template_dir || __dirname + "/templates/bundled/";
const templateDirSingle = config.custom_template_dir || __dirname + "/templates/single/";


function sh(command, arguments) {
  execSync(command + " " + arguments.join(" "), {stdio: 'inherit'});
}


// check if the folder is a sub directory of the project
let buildpath = path.normalize(process.cwd() + "/" + config.build_output_dir);
let cwd = process.cwd();
if (buildpath.search(cwd) === -1) {
  // buildpath outside cwd
  console.log("buildpath outside current working directory, this is to dangerous, because we delete some files. Please update the config");
  process.exit(1);
}
// clean the build folder
sh("rm -rf", [buildpath + "/*"]);
sh("mkdir -p", [buildpath]);

// preprocess
sh(__dirname + "/prepare.sh", [config.spec_dir]);
sh(__dirname + "/prepareBundled.sh", [config.spec_dir]);


console.log("Preprocessing");
// Mix conf.import,...  with services_bundled
let bundled_services = JSON.parse(fs.readFileSync('./__tmp/services_bundled.json'));
let bundled_messages = JSON.parse(fs.readFileSync('./__tmp/types_bundled.json'));

// join the bundled files
let bundle = {config: config.bundled, services: bundled_services.services, messages: bundled_messages.types}


// remove package names on messages for bundled messages and types
for (let srv in bundle.services) {
  for (let m in bundle.services[srv].services) {
    let method = bundle.services[srv].services[m];
    if (method.data.request) {
      method.data.request = method.data.request.replace(/^(?!google|protobuf)[^\.]*\.(.*)/gm, "$1");
    }
    if (method.data.response) {
      method.data.response = method.data.response.replace(/^(?!google|protobuf)[^\.]*\.(.*)/gm, "$1");
    }
  }
}

for (let t in bundle.messages) {
  for (let f in bundle.messages[t].fields) {
    let field = bundle.messages[t].fields[f];
    field.type = field.type.replace(/^(?!google|protobuf)[^\.]*\.(.*)/gmi, "$1");
    if(field.__proto && field.__proto.type){
      field.__proto.type= field.__proto.type.replace(/^(?!google|protobuf)[^\.]*\.(.*)/gmi, "$1");
    }
    if(field.__proto && field.__proto.map_to){
      field.__proto.map_to= field.__proto.map_to.replace(/^(?!google|protobuf)[^\.]*\.(.*)/gmi, "$1");
    }
  }
}

fs.writeFileSync("./__tmp/bundled.json", JSON.stringify(bundle));
// EOF remove package names on messages for bundled messages and types

// Create proto files
let bundledbuildpath = buildpath + "/bundled/";
fs.mkdirSync(bundledbuildpath);

sh("simple-generator", ["-d", "./__tmp/bundled.json", "-t", templateDirBundled + "bundled.services.proto.tmpl", ">", bundledbuildpath + config.bundled.service_name + ".proto"])

let singlebuildpath = buildpath + "/packages/";
fs.mkdirSync(singlebuildpath);



// erstellen des protoc commands


// single build


// bundled build


// environment build


// gateway build

