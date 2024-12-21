```javascript
function myFunction(a, b) {
  // Use short-circuiting logical OR to provide default values
  a = a || 0; 
  b = b || 0;
  return a + b; 
}

console.log(myFunction(5, 3)); // Output: 8
console.log(myFunction(null, 3)); // Output: 3
console.log(myFunction(5, null)); // Output: 5
console.log(myFunction(null, null)); // Output: 0
```