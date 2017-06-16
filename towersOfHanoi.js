//The Towers of Hanoi is a famous puzzle. The equipment includes three posts and a set of discs of various diameters with holes in their centers. The setup stacks all of the discs on the source post with smaller discs on top of larger discs. The goal is to move the stack to the destination post by moving one disc at a time to another post, never placing a larger disc on a smaller disc. This puzzle has a trivial recursive solution:
var hanoi = function (disc, src, aux, dst) {
  if (disc > 0) {
      hanoi(disc - 1, src, dst, aux);
      document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
      hanoi(disc - 1, aux, src, dst);
} };
    hanoi(3, 'Src', 'Aux', 'Dst');


/*It produces this solution for three discs:
    Move disc 1 from Src to Dst
    Move disc 2 from Src to Aux
    Move disc 1 from Dst to Aux
    Move disc 3 from Src to Dst
    Move disc 1 from Aux to Src
    Move disc 2 from Aux to Dst
    Move disc 1 from Src to Dst
The hanoi function moves a stack of discs from one post to another, using the auxil- iary post if necessary. It breaks the problem into three subproblems. First, it uncovers the bottom disc by moving the substack above it to the auxiliary post. It can then move the bottom disc to the destination post. Finally, it can move the substack from the auxiliary post to the destination post. The movement of the substack is handled by calling itself recursively to work out those subproblems.
The hanoi function is passed the number of the disc it is to move and the three posts it is to use. When it calls itself, it is to deal with the disc that is above the disc it is currently working on. Eventually, it will be called with a nonexistent disc number. In that case, it does nothing. That act of nothingness gives us confidence that the func- tion does not recurse forever.
more  detailed explanation here: http://blog.jmatthewgriffis.com/2014/08/explaining-douglas-crockfords-towers-of.html
