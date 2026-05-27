let fs = require('fs-extra');
async function main() {
    await fs.ensureDir('folder1');
    await fs.outputFile('folder1/fisrtfile.txt', 'he-he');
    await fs.ensureDir('folder2');
    await fs.move('folder1/fisrtfile.txt', 'folder2/firstfile.txt');
    await fs.ensureDir('folder3');
    await fs.copy('folder2/firstfile.txt', 'folder3/firstfile.txt');
    await fs.outputJson('folder1/jsnfile.json', '{"name": "myName"}');
    let data = await fs.readJson('folder1/jsnfile.json');
    console.log(data);
    await fs.remove ('folder1/jsnfile.json');
    await fs.remove ('folder2/firstfile.txt');
    await fs.remove ('folder3/firstfile.txt');
    await fs.remove ('folder1');
    await fs.remove ('folder2');
    await fs.remove ('folder3');

}
main();