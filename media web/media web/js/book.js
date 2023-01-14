const person = [{
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
},
{
    title: "Proceedings of International conference on Synthesis, Characterization and Applications of Emerging Materials with special reference to Sustainable Technologies ",
    link: "no link available",
    author: "Hameed Khan, K KKushwah, S K Mahobia,K Khare",
    bookname: "Proceedings of International conference on Synthesis, Characterization and Applications of Emerging Materials with special reference to Sustainable Technologies",
    publisher: "Research India Publication,ISBN number:978-93-91903-19-0",
    vol: "ISBN number:978-93-91903-19-0,Pages: 81, a to j(BOOK)"
},
{
    title: "Aftermath of Covid-19 disease on Global Status",
    link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=nS10A1EAAAAJ&sortby=title&citation_for_view=nS10A1EAAAAJ:70eg2SAEIzsC",
    author: "Hameed Khan, K KKushwah, S K Mahobia,K Khare",
    bookname: "Impact of Covid -19 on Society",
    publisher: "Earth Publication",
    vol: "978-81-951391-4-9 Chapter"
},
{
    title: "Blockchain and the Future of Digital Marketing",
    link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=nS10A1EAAAAJ&sortby=title&citation_for_view=nS10A1EAAAAJ:NaGl4SEjCO4C    ",
    author: "Hameed Khan and Kamal Kumar Kushwaha",
    bookname: "Blockchain Technology and Applications For Future Marketing",
    publisher: "IGI Global Publisher of timely knowledge",
    vol: "DOI: 10.4018/978-1-7998-8081-3.ch016,2021,Chapter"
},
{
    title: "Novel Tool to Determine Kinetic Parameters of Thermoluminscence (TL) Glow Curve CGCD: CaZrO3:Eu3+, Tb3",
    link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=nS10A1EAAAAJ&pagesize=80&sortby=title&citation_for_view=nS10A1EAAAAJ:4JMBOYKVnBM    ",
    author: "ShubaTripathi, VikramAwate, K.K.Kushwaha,R. Tiwari",
    bookname: "Algorithm for intelligent systems",
    publisher: "Springer Nature",
    vol: "2020 Chapter"
},
{
    title: "Basic principles and theory of the photovoltaic effect",
    link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=nS10A1EAAAAJ&pagesize=80&sortby=title&citation_for_view=nS10A1EAAAAJ:8k81kl-MbHgC    ",
    author: "M. Ramrakhiani, Swati Dubey, HemrajWaxar, Kamal Kumar Kushwaha, Pranav Singh",
    bookname: "Recent Advances in photovoltaics",
    publisher: "Material research Forum LLC, Millersville, USA (Web. Of Science)",
    vol: "2017 Book Chapter"
},
{
    title: "Electroluminescence in ChalcogenideNanocrystals and Nanocomposites",
    link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=nS10A1EAAAAJ&pagesize=80&sortby=title&citation_for_view=nS10A1EAAAAJ:zYLM7Y9cAGgC    ",
    author: "MeeraRamrakhiani, Nitendra Kumar Gautam, Kamal K Kushwah,SakshiSahare, Pranav Singh",
    bookname: "Luminescence",
    publisher: "Trans Tech Publisher, Switzerland",
    vol: "127-159,2014 Book Chapter"
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


