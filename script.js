jQuery(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    $(this).empty();
    $(".contactForm").after(
      "<p class='thanks'>Thank you for your message. We will get back to you as soon as we can.</p>"
    );
    $(".eventForm").after("<p class='thanks'>Thank you for new event!!!</p>");

    $(".thanks").css({
      "text-align": "center",
      "font-size": "24px",
      margin: "50px",
    });
  });

  $(".popUpButton").click(function (e) {
    let clasS = "." + e.target.classList[1];
    $(clasS).toggleClass("show");
  });
});
