const research = [{
    title: "Advanced Research Methodologies: Artificial Intelligence as an Operation Tool",
    link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=nS10A1EAAAAJ&sortby=title&citation_for_view=nS10A1EAAAAJ:HoB7MX3m0LUC",
    author: "Kishore Kumar Sadasivuni,Kamal Kumar Kushwah,Hameed Khan,SadiyaWasim",
    bookname: "Advanced Research Methodologies: Artificial Intelligence as an Operation Tool",
    publisher: "ELIVA PRESS, Moldova, Europe",
    vol: "ISBN 978-1-63648-612-3 Pages:222(BOOK)"
},
{
    title: "Luminescence: Theory and Applications of Rare Earth Activated Phosphors",
    link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=nS10A1EAAAAJ&cstart=20&pagesize=80&sortby=title&citation_for_view=nS10A1EAAAAJ:35N4QoGY0k4C",
    author: "Kamal K Kushwah,S K Mahoba, SandeepChhawara, RatneshTiwari, NehaDubey, VikasDubey",
    bookname: "Luminescence Studies of Y2Sr3B4O12 Phosphor Doped with Eropium Ion",
    publisher: "Walter de Gruyter GmbH & Co KG, 202 ",
    vol: "BOOK CHAPTER ISBN :-3110676516, 9783110676518 Pages 256"
}];
var data;

research.forEach(function (item, index) {
    var ind = index + 1;
    data = '<tr>\
<td>\
    <div class="d-flex align-items-center">\
        <p class="font-weight-bold mb-0">'+ ind + '</p>\
    </div>\
</td>\
<td>'+ item.title + '</td>\
<td>'+ item.author + '</td>\
<td>'+ item.bookname + '</td>\
<td>'+ item.publisher + '</td>\
<td>'+ item.vol + '</td>\
<td>\
  <a class="btn btn-primary" target="_blank" href="'+ item.title + '">Link</a>\
</td>\
</tr>';
    $('#booktbody').append(data);
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


