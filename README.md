# SLL
Single Linked List Implementation
I tried to implement theoretical proficiency into practical programming, to solidify my understanding. I hope it helps u too, I will try to explain the whole to the best of my comprehension.

First I used E6, the latest version of ECMAScript (js), this is the true name of Javascript. Im not going to explain all of history but to hog the wave of popularity "java" was added it's nothing to do with Java.

Now code:

I used the E6 version of importing NPM PromtSync
And used "prompt" to store it, I could just use anything instead of "prompt" its not important

Later I made the class LISTNODE, I will mention I didn't follow CamelCase as I was quite comfortable with the CAPITAL naming of the class. I will change it, now, I made Class LISTNODE and use data as a parameter to pass and the "next" was assigned to null (as theory)
I made the method getFirst to get the head 
, append method to add "node" if head == null

last_node is a variable that is constantly changing 
at first it's this.head. If the head has a .next element in the chain, last_node gets assigned to that child
I repeat this process until we find the element that doesn't have the .next node. That means that is the last element
Do remember that what we were doing is adding a new node to the chain. To do so we need to assign .next property of the last element in the chain to the new element we are adding.

Thinking as recursion. 
I will add more later my head hurts
