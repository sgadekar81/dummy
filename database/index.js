
let fs = require('fs');
let currentDir = './database/'

let insert = (collectionName, data) => {
    let id = new Date().getTime();
    data.id = id;
    let json = fs.readFileSync(currentDir + collectionName + '.json', 'utf8');
    json = JSON.parse(json);
    json.push(data);
    fs.writeFileSync(currentDir + collectionName + '.json', JSON.stringify(json));
    return data;
}

let get = (collectionName, id) => {
    let json = fs.readFileSync(currentDir + collectionName + '.json', 'utf8');
    json = JSON.parse(json);
    let data = json.filter(ele => ele.id === id)
    return data;
}


module.exports = {
    insert,
    get
}