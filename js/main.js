function keepFading($obj) {
    $obj.fadeToggle(2000, function () {
        keepFading($obj)
    });
}
keepFading($(".background-image"));
