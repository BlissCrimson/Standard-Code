// Two simple code snippets to open or close a dialog.
// Of course, parameters can also be passed to execute additional functions.

// TO OPEN A DIALOG
let dialogRef = document.getElementById("dialog"); // ID from the Dialog
// to open dialog
function openDialog() { // Function that is executed, for example, via onclick="openDialog".
    dialogRef.showModal(); //The dialog is called using .showModal();.
}

// TO CLOSE A DIALOG
function closeDialog() { // Function that is executed, for example, via onclick="closeDialog".
    dialogRef.close(); // The dialog is closed with ..cloe();.
}