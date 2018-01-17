const fs = require('fs');
const path = require('path');
export class directoryHelper {
public flatten(lists) {
    return lists.reduce(function(a, b) {
      return a.concat(b);
    }, []);
  }
  
  public getDirectories(srcpath) {
    return fs.readdirSync(srcpath)
      .map(file => path.join(srcpath, file))
      .filter(path => fs.statSync(path).isDirectory());
  }
  
  public getDirectoriesRecursive(srcpath) {
    return [srcpath, ...this.flatten(this.getDirectories(srcpath).map(this.getDirectoriesRecursive))];
  }
}
