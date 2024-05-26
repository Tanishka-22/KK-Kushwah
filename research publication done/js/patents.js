const patents = [
  {
    title:
      "Bird Drinking Trough",
    link: "...../patent1.pdf",
    authorapplicant:
      "Dr. Yogesh Kumar, Dr. Saurabh Kumar Singh, Dr. Kamal Kumar Kushwah, Madhuri Gokhle, Dr. Sujeet Kumar Mahobia, Dr. Sapna",
    applicationnumber: "161557",
    status: "Issued on 26/03/2024",
  },
  {
    title:
      "Bird Drinking Trough",
    link: "......../2certi-1.pdf",
    authorapplicant:
      "Dr. Yogesh Kumar, Dr. Saurabh Kumar Singh, Dr. Kamal Kumar Kushwah, Madhuri Gokhle, Dr. Sujeet Kumar Mahobia, Dr. Sapna",
    applicationnumber: "161557",
    status: "Issued on 26/03/2024",
  },
  {
    title:
      "Intelligent Adaptive System and Method Thereof For Household Energy Control and Distribution",
    link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=nS10A1EAAAAJ&cstart=20&pagesize=80&citation_for_view=nS10A1EAAAAJ:RGFaLdJalmkC    ",
    authorapplicant:
      "Dr. N. Singh,Dr. K. K. Kushwah,Dr. A. Mishra,Dr. P. Suhane",
    applicationnumber: "201941015762",
    status: "Filed on 20/04/2019",
  },
];
var data;

patents.forEach(function (item, index) {
  var ind = index + 1;
  console.log(item.age, "item");
  data =
    '<tr>\
<td>\
    <div class="d-flex align-items-center">\
        <p class="font-weight-bold mb-0">' +
    ind +
    "</p>\
    </div>\
</td>\
<td>" +
    item.title +
    "</td>\
<td>" +
    item.authorapplicant +
    "</td>\
<td>" +
    item.applicationnumber +
    "</td>\
<td>" +
    item.status +
    '</td>\
<td>\
  <a class="btn btn-primary" target="_blank" href="' +
    item.link +
    '">Link</a>\
</td>\
</tr>';
  $("#patenttbody").append(data);
});

$(document).ready(function () {
  $("#example").DataTable({
    aaSorting: [],
    responsive: true,
    columnDefs: [
      {
        responsivePriority: 1,
        targets: 0,
      },
      {
        responsivePriority: 2,
        targets: -1,
      },
    ],
  });
  $(".dataTables_filter input").attr("placeholder", "Search here...").css({
    width: "300px",
    display: "inline-block",
  });
  $('[data-toggle="tooltip"]').tooltip();
});
