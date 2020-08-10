function calculatePrice() {
    //Get selected data
    var elt = document.getElementById("serviceItem");
    var service = elt.options[elt.selectedIndex].value;

    elt = document.getElementById("toiletItem");
    var toilet = elt.options[elt.selectedIndex].value;

    elt = document.getElementById("areaItem");
    var area = elt.value

    //convert data to integers
    service = parseInt(service);
    toilet = parseInt(toilet);
    area = parseInt(area);

    //Calculate total value
    var total = (service * area) + toilet;

    //print value to PicExtPrice
    document.getElementById("PicExtPrice").value = total.toString() + " SEK";
}