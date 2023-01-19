const person = [{
    Fundingagency: "National Project Implementation Unit (NPIU), Government of India",
    Cost: "17.93 LAKHS",
    Title: "Luminescent Solar Concentrators"
},
{
    Fundingagency: "National Project Implementation Unit (NPIU), Government of India",
    Cost: "17.48 LAKHS",
    Title: "Proximity Effects in Ferrities"
},
{
    Fundingagency: "National Project Implementation Unit (NPIU), Government of India",
    Cost: "12.42 LAKHS",
    Title: "Super Capacitor and Hydrogen Gas Sensors"
},
];
var data;

person.forEach(function (item, index) {
    var ind = index + 1;
    console.log(item.age, 'item')
    data = '<tr>\
<td>\
    <div class="d-flex align-items-center">\
        <p class="font-weight-bold mb-0">'+ ind + '</p>\
    </div>\
</td>\
<td>'+ item.Title+ '</td>\
<td>'+ item.Fundingagency + '</td>\
<td>'+ item.Cost + '</td>\
</tr>';
    $('#extprojectstbody').append(data);
});

$(document).ready(function () {
    $("#example").DataTable({
        aaSorting: [],
        responsive: true,
        columnDefs: [
            {
                responsivePriority: 1,
                targets: 0
            },
            {
                responsivePriority: 2,
                targets: -1
            }
        ]
    });
    $(".dataTables_filter input")
        .attr("placeholder", "Search here...")
        .css({
            width: "300px",
            display: "inline-block"
        });
    $('[data-toggle="tooltip"]').tooltip();
});