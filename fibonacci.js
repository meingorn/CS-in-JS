// With loops
function looping(n) {
   var a = 0, b = 1, f = 1;
   for(var i = 2; i <= n; i++) {
       f = a + b;
       a = b;
       b = f;
   }
   return f;
};

        // With Recursion
function recursive(n) {
   if(n <= 2) {
       return 1;
   } else {
       return this.recursive(n - 1) + this.recursive(n - 2);
   }
};
