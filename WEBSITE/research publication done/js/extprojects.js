const person = [{
    Nameoftheprincipalinvestigator: "Dr. M.Vijayakumar",
    Nameofthecoprincipalinvestigator: "Dr. Kamal Kumar Kushwaha",
    Cost: "17.93 LAKHS",
    Subjectandprojectid: "Luminescent Solar Concentrators"
},
{
    Nameoftheprincipalinvestigator: "Dr. K.Ugendar",
    Nameofthecoprincipalinvestigator: "Dr. Bhavana Singh",
    Cost: "17.48 LAKHS",
    Subjectandprojectid: "Proximity Effects in Ferrities"
},
{
    Nameoftheprincipalinvestigator: "Dr.Jaidev",
    Nameofthecoprincipalinvestigator: "Dr. Durgesh Nandini Nagwanshi",
    Cost: "12.42 LAKHS",
    Subjectandprojectid: "Super Capacitor and Hydrogen Gas Sensors"
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
<td>'+ item.Nameoftheprincipalinvestigator + '</td>\
<td>'+ item.Nameofthecoprincipalinvestigator + '</td>\
<td>'+ item.Cost + '</td>\
<td>'+ item.Subjectandprojectid + '</td>\
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