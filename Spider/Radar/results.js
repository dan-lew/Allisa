anychart.onDocumentReady(function () {

  const data1 = [
    { x: "Question 1", value: 2 },
    { x: "Question 2", value: 5 },
    { x: "Question 3", value: 8 },
    { x: "Question 4", value: 4 },
    { x: "Question 5", value: 7 },
    { x: "Question 6", value: 10 },
    { x: "Question 7", value: 6 },
    { x: "Question 8", value: 1 },
    { x: "Question 9", value: 3 },
    { x: "Question 10", value: 9 },
  ];

  const data2 = [
    { x: "Question 1", value: 8 },
    { x: "Question 2", value: 3 },
    { x: "Question 3", value: 6 },
    { x: "Question 4", value: 10 },
    { x: "Question 5", value: 7 },
    { x: "Question 6", value: 1 },
    { x: "Question 7", value: 4 },
    { x: "Question 8", value: 9 },
    { x: "Question 9", value: 2 },
    { x: "Question 10", value: 5 },
  ];
  // create radar chart
  const chart = anychart.radar();

  // set chart yScale settings
  chart.yScale().minimum(0).maximum(10).ticks({ interval: 2 });

  // create first series
  chart.line(data1);
  chart.line(data2);

  // set container id for the chart
  chart.container("container");

  chart.yGrid().palette(["gray 0.1", "gray 0.2"]);

  chart.area(data1).name('Customer 1').markers(true).fill("#E55934", 0.3).stroke("#E55934")
  chart.area(data2).name('Customer 2').markers(true).fill("#9BC53D", 0.3).stroke("#9BC53D")

  chart.title("Q & A Results").legend(true);

  // initiate chart drawing
  chart.draw();
});
