$(document).ready(function () {
  var weapons = [
    {
      name: "44_pistol",
      damage: 48,
      fire_rate: 6,
      range: 119,
      accuracy: 66,
      weigth: 4.2,
      value: 99,
    },
    {
      name: "10mm_pistol",
      damage: 18,
      fire_rate: 46,
      range: 119,
      accuracy: 61,
      weigth: 4.2,
      value: 53,
    },
    {
      name: "assault_rifle",
      damage: 30,
      fire_rate: 40,
      range: 119,
      accuracy: 72,
      weigth: 13.1,
      value: 144,
    },
  ];

  $(".item-list a").on("click", function (e) {
    $(".item-list a").removeClass("active");
    $(e.currentTarget).addClass("active");
  });

  $(".item-list a").on("mouseenter", function (e) {
    var current_item = $(e.currentTarget).attr("class");
    weapons.forEach((weapon) => {
      if (weapon.name == current_item) {
        var container = $(".item-stats");
        container.find(".damage").html(weapon.damage);
        container.find(".fire_rate").html(weapon.fire_rate);
        container.find(".range").html(weapon.range);
        container.find(".accuracy").html(weapon.accuracy);
        container.find(".weight").html(weapon.weigth);
        container.find(".value").html(weapon.value);
      }
    });
  });
});
