const inter = [
    {
      name: "Ms.Anju Sharma",
      status: "Awarded",
    },
    {
      name: "Ms.Neeti Deswal",
      status: "Awarded",
    },
    {
      name: "Ms.Panveen Ansari",
      status: "Persuing",
    },
    {
      name: "Ms.Mahajbeen Sayed",
      status: "Persuing",
    },
    {
      name: "Ms.Abhineet Samadiya",
      status: "Persuing",
    },
  ];
  
  var data;
  
  inter.forEach(function (item, index) {
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
      item.name +
      "</td>\
  <td>" +
      item.status +
      '</td>\
  </td>\
  </tr>';
    $("#phdstudentstbody").append(data);
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
  