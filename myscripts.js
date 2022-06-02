function AddButton() {
    let input_text = document.getElementById("input_text").value;
    document.getElementById("output_text").value = input_text;
    let elem = document.querySelector('#notes');
    let clone = elem.cloneNode(true);

    i = document.getElementById("counter").value;
    clone.id = 'elem' + i;
    clone.children[0].id = "output_text"+i;
    clone.children[2].id = "delete_button"+i;
    clone.children[3].id = "edit_button"+i;
    clone.children[4].id = "save_button"+i;
    elem.after(clone);
    i++;
    document.getElementById("counter").value = i;
}

function DeleteButton(elem_id) {
    console.log(document.getElementById(elem_id).parentNode.id);
    document.getElementById(elem_id).parentNode.remove();
}

function EditButton(elem_id) {
    let output = document.getElementById(elem_id).parentNode.children[0];
    let parent_node = document.getElementById(elem_id).parentNode;
    output.removeAttribute('readonly');
    parent_node.children[3].style.display = "none";
}

function SaveButton(elem_id) {
    let output = document.getElementById(elem_id).parentNode.children[0];
    let parent_node = document.getElementById(elem_id).parentNode;
    output.readOnly = true;
    parent_node.children[3].style.display = "block";
    parent_node.children[4].style.display = "none";
}


