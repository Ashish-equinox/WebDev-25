/* Arrow vs Normal

Arrow fns are more reliable as they get 'this' context from where the fn is defined.
Normal fns are not cuz they get 'this' context from the calling object.

It can happen that when I call a fn but without an object, my 'this' will point to window object incase of browser which is unreliable behavior.

// inner fns must be arrow fn so that it captures the 'this' value from the outer functions
// no need to worry about outer fn as when object is created with "new" keyword, 'this' will be bound to the new object

