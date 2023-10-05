$(function () {
  $(".survey_button").each(function () {
    $(this).on("click", function () {
      answers.push($(this).attr("data-ans"));
    });
  });

  $("#p_modal_button1").on("click", function (e) {
    answers.forEach((e) => console.log(e));
  });

  $(".comment_publish").on("click", function () {
    if ($(".comment_text").val() !== "") {
      let comTpl = $("#comment0").clone();
      comTpl.find(".comment_photo").attr("src", "./assets/img/anon.jpg");
      comTpl.find(".name").html("Usuario anónimo");
      comTpl.find(".comment_body").html($(".comment_text").val());
      comTpl.find(".comment_like").html(0);
      comTpl.find(".comment_date").html(new Date().toLocaleTimeString());

      // console.log(comTpl.find("img").attr("src"));
      $(".comment_wrapper").prepend(comTpl);
      $(".comment_text").val("");
    }
  });
});
