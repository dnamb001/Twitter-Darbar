tweet_dist_chart();

function tweet_dist_chart() {

  let width = document.getElementById("tweet_dist_chart").offsetWidth;
  let height = 300;

  var chart = c3.generate({
    padding: {
      top: 0,
      right: 60,
      bottom: 10,
      left: 130
    },
    bar: {
      width: 20
    },
    bindto: "#tweet_dist_chart",
    data: {
      x: 'x',
      columns: [
        ["x", "1 tweet","2 tweets","3+ tweets"],
        ["Users who tweeted this many times", 44, 10, 6]
      ],
      onclick: function () {
      },
      types: {
        "Users who tweeted this many times": 'bar',
      }
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          multiline: false
        },
      },
      rotated: false
    },
    size: {height:height, width:width},
  });

}
