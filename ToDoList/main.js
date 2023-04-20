// Declare constants for button, input, and container
const button = document.getElementById('addToDo');
const inputTitle = document.getElementById('inputTitle');
const input = document.getElementById('inputField');
const container = document.getElementById('toDoContainer');

button.addEventListener('click', function() {
  if (input.value == null || input.value == "") {
    alert("There is no task to add");
  } else {
    // Define an array of colors and choose a random one
    const colors = ['#fbf8cc', '#fde4cf', '#ffcfd2', '#f1c0e8', '#cfbaf0', '#98f5e1', '#b9fbc0', '#c7f9cc', '#ffadad'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Create the post-it element and set its background color
    const postIt = document.createElement('div');
    postIt.classList.add('postIt_style');
    postIt.style.backgroundColor = randomColor;
    
    //create the title element and set its text
    const title = document.createElement('h1');
    title.classList.add('title_style');
    title.innerText = inputTitle.value;
    postIt.appendChild(title);
    
    // Create check element
    let checkB = document.createElement('input');
    checkB.type = 'checkbox';
    checkB.classList.add('checkB_style');
    postIt.appendChild(checkB);
    
    // Create the para element and set its text
    const para = document.createElement('p');
    para.classList.add('para_style');
    para.innerText = input.value;
    postIt.appendChild(para);

    // Create date element
    const date = document.createElement('div');
    date.classList.add('date_style');
    date.innerText = new Date().toLocaleDateString();
    postIt.appendChild(date);

    // Create edit element
    // var editInput = document.createElement('input');
    // editInput.classList.add('editInput_style');
    // editInput.type = 'text';

    // var editButton = document.createElement('div');
    // editButton.classList.add('editButton_style');
    // editButton.className = 'edit';
    
    // postIt.appendChild(editInput);
    // postIt.appendChild(editButton);

    // Create the bin element
    const bin = document.createElement('button');
    bin.classList.add('bin_style');
    postIt.appendChild(bin);

    // Add the post-it element to the container
    // postIt.innerHTML += para.outerHTML + bin.outerHTML;
    container.appendChild(postIt);

    // Create an array with the postIts and add in it each new postIt
    var postItTab = [];
    postItTab.push(postIt);

    // Clear the input field
    inputTitle.value = "";
    input.value = "";
    
    // Toggle the completed style for para when it is clicked
    checkB.addEventListener('click', function() {
      para.classList.toggle('completed');
    });

    // // Edit the postIt
    // editButton.addEventListener('click', function() {
    //     for (var i = 0; i < postItTab.length; i++) {
    //         if (postItTab[i].contains(editButton)) {
    //             postIt.classList.add("editMode_style");
    //             var containsClass = postIt.classList.contains("editMode_style");
    //             //If class of the parent is .editmode
    //             if (containsClass) {
    //                 //switch to .editmode
    //                 //label becomes the inputs value.
    //                 para.innerText = editInput.value;
    //             } else {
    //                 editInput.value = para.innerText;
    //             }

    //             //toggle .editmode on the parent.
    //             postIt.classList.toggle("editMode_style");

    //         }
    //     }
    // })

    // Remove the concerned postIt when bin is clicked
    bin.addEventListener('click', function() {
        for (var i = 0; i < postItTab.length; i++) {
          if (postItTab[i].contains(bin)) {
            postItTab.splice(i, 1);
            postIt.parentNode.removeChild(postIt);
            break;
          }
        }
      })
  }
});
