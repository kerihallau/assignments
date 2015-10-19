// JavaScript Document
//this is David's answer for assignment 3--mine didn't work
document.addEventListener("DOMContentLoaded", function(event) {
    // get all of our list items
    // 1. Select all the items to filter
    var dataList = document.querySelectorAll("#dataList li");
    //setup click event handlers on our checkboxes
    // 2. Select all the checkboxes to watch
    var checkBoxes = document.querySelectorAll(".filterData li input");
    // 3. Add an event listener for each checkbox
    for (var i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].addEventListener("click", filterItems, false);
    }
    // event handler
    // 4. Handle event
    function filterItems(e) {
        if (this.checked) {
            handleDisplay(true, this.value);
        } else if (!this.checked) {
            handleDisplay(false, this.value);
        }
    }
    function handleDisplay(show, value){
        for (var i = 0; i < dataList.length; i++) {
            var item = dataList[i];
            if (item.getAttribute("data-category") == value) {
                if(show){
                    item.style.display = "block";
                }else{
                    item.style.display = "none";
                }
            }
        }
    }
});