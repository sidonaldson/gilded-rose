# Gilded Rose - Simon Donaldson

## NOTES
I've not completed a Kata before and I enjoyed the challenge. It's clear the IRL solution would be to handle all these complexities in data and on a server, but that's beside the point :). I saw the task as an opportunity to show how I would refactor legacy code to make it more scaleable, DRY, and use as much ES6 goodness as I could squeeze in.

The single broken test was a good starting place - I fixed that and then moved on to create more tests.

The aim was to add common tests for all items and then add bespoke tests for each item type. The common tests are found in `helpers.ts`. They test the keys of the object and some of the basic "default" rules. TypeScript is a strong language so it wasn't necessary to test the keys as those errors would be reported during development/build but I felt it was a good standard.

I then added in the bespoke tests until I had good coverage of the existing code - that would give me some reassurance my refactoring would not break the site or upset the troll. I followed a loose BDD/TDD strategy for the tests, keeping them readable and aligned with the rules set out in the readme. Once every line was covered and green I focussed on the refactoring.

Initially, I wanted to look at composition but very quickly switched to standard inheritance as most of the rules were just basic computations of properties/values. I'm not sure there would be much reuse after all. It also made sense considering I couldn't touch the existing Item class.

The next steps were as follows:
- Added a `NewItem` class then inherited Item and replaced all instances to use the new class.
- Added a new method called `update`, moved the logic there and switch the `if` loop to iterate through the array and to call the method to update each one.
- Converted the logic to use a switch statement and split it up - testing the `name` to match each item. 
- Created a new class for each type which inherits from NewItem
- updated each class' update method to include it's own logic - running the unit tests against each one
- separated each new class into its own file and created an index file to import them all or as required
- added in the Conjured type and it's own tests
- simplified the logic by moving the values to properties of NewItem and added new helper methods to do common tasks such as increment the sellIn and constrain quality
- added additional properties to include Max and Min quality and how much to iterate each time - reducing the need for a bespoke `update()` in another class.

I decided to leave it at that point. Although I made substantial changes I didn't edit the existing `Item` or `items` array so my updates shouldn't affect other code and I'm reasonably confident I won't have introduced any new bugs.

The NewItem class is more scaleable and makes it easy to add in new items or features and overall the code is as DRY as I could make it without changing everything from the ground up. It has another benefit as it's easier to add similar types of items than before - if you wanted to add another type of cheese you can just go ahead as it isn't dependent on the string `Aged Brie`.

In total, I worked on this for approximately 4 hours, definitely not more than that. I spent more time writing the unit tests to verify the existing code than writing new code but felt this was an important step I couldn't overlook. Once I had decided to use class inheritance to modify `Item` the rest was more straight forward. 

If I had more time I would work on making the tests even more DRY, adding in many more test cases and possibly using a loop to test X amount of variations. As well as naming things better, creating separate Definition files and stronger typing...

Thanks!
