Let's create a small Library app.

All the books are going to be stored in a simple array:
    Add a function to the script that can take user's input and store the new book object into the array.

Write a function that loops through the array and display each book on the page. You can display them in some sort of table, or each on theii own card. It might  help for now to manually add a few books to your array so you can see the display.

Add a "NEW BOOK" button that brings up a form allowing users to input the detail for the new book: author, title, number of pages, whether it's been read and anything else you might want.

Add a button on each book's display to remove the book from the library:
    You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

Add a button on each book's display to change its read status.
    To facilitate this you will want to create the function that toggles a book's read status on your Book prototype instance.

It's not required to add any type of storage rigth now. 