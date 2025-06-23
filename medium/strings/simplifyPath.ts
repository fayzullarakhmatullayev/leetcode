function simplifyPath(path: string): string {
  const stack: string[] = [];
  const parts = path.split('/');
  for (const part of parts) {
    if (part === '..') {
      stack.pop();
    } else if (part !== '.' && part !== '') {
      stack.push(part);
    }
  }
  return '/' + stack.join('/');
}

console.log(simplifyPath('/home/'));
console.log(simplifyPath('/home//foo/'));
console.log(simplifyPath('/home/user/Documents/../Pictures'));
console.log(simplifyPath('/.../a/../b/c/../d/./'));
console.log(simplifyPath('/..'));
console.log(simplifyPath('/..hidden'));
