"use strict";
$(document).ready(() => {
  let table = null;

  $(document)
    .on("mouseenter", ".available", (event) => { //when mouse enters a table with a class of available, the table is fading in  
      $(event.target).fadeTo(500, 0.5); 
    })
    .on("mouseleave", ".available", (event) => { //when mouse leaves the tabe with a class of available, fade out
      $(event.target).fadeTo(500, 1);
    })
    .on("mouseenter", ".reserved", (event) => { //when your mouse enters a table with a class of reserved, it changes the cursor to not allowed
      $(event.target).css("cursor", "not-allowed");
    })
    .on("click", ".available", (event) => { //when you click on an available table
      $(".reserve-form").fadeIn(2000); //form fades in
      $(".reserve-form").css("display", "flex"); //form is styled as display flex
      table = $(event.target); //setting the variable table to be equal to the specifc table you are clicking on aka event.target
      if (event.target.tagName === "P") { 
        $(".form-table-num").text(`Table Number: ${table.text()}`); //Google later
      } else {
        $(".form-table-num").text(`Table Number: ${table.children().text()}`); //Google later
      }
    })
    .on("click", ".form-x, .form-save", (event) => {
      $(".reserve-form").fadeOut(2000);
      //we need to assign data to tables that are reserved
      if ($(event.target).hasClass("form-save")) {
        table.removeClass("available").addClass("reserved");
      }
    });
});
