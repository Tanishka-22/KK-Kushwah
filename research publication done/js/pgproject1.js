const person = [{
    titleofthesis: "Experimental Design of FM Transmitter",
    nameofstudent: "Arpita Vyas,Shikha Trivedi",
    duration: "2008",
},
{
    titleofthesis: "Bi Directional 3 Digit Visitor Coiunter",
    nameofstudent: "Amreen Khan",
    duration: "2013",
},
{
    titleofthesis: "Laser Procted Fence",
    nameofstudent: "Satendra Singh",
    duration: "2014",
},
{
    titleofthesis: "Magnetic Levitation",
    nameofstudent: "Monalisha Kashyap",
    duration: "2015",
},
{
    titleofthesis: "Digital Experiment Kit",
    nameofstudent: "Yash Choudhary",
    duration: "2015",
},

{
    titleofthesis: "Excitation of ZnS Nanoparticles under UV Excitation",
    nameofstudent: "Bhagvati Kumahar and Lata Lalwani",
    duration: "2017",
},
{
    titleofthesis: "Semiconductor Devices",
    nameofstudent: "Mueen",
    duration: "2021",
},
{
    titleofthesis: "Planck's Constant Kit",
    nameofstudent: "Bhawana Tiwari",
    duration: "2022",
},
{
    titleofthesis: "Logic Gate Kit",
    nameofstudent: "Khusboo Agrawal",
    duration: "2022",
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
<td>'+ item.titleofthesis + '</td>\
<td>'+ item.nameofstudent + '</td>\
<td>'+ item.duration + '</td>\
</tr>';
    $('#pgproject1tbody').append(data);
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