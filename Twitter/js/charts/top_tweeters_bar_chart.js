top_tweeters_bar_chart();
top_retweeters_bar_chart()

function top_tweeters_bar_chart() {

  let width = document.getElementById("top_tweeters_bar_chart").offsetWidth;
  let height = 300;

  var chart = c3.generate({
    padding: {
      top: 0,
      right: 60,
      bottom: 10,
      left: 110
    },
    bar: {
      width: 20
    },
    bindto: "#top_tweeters_bar_chart",
    data: {
      x: 'x',
      columns: [
        ["x", "@arisha_fatima10", "@iRajiniFan", "@RajiniFCGermany","@War_HGOTY","@Baasha90130214","@LokeshD47301142","@prjaishankar","@Nikki66351718","@HDUpdateOnly","@TechyDixit"],
        ["tweets", 8, 7, 4, 4, 4, 4, 2, 2, 2, 2]
      ],
      onclick: function () {
        console.log(arguments);
      },
      types: {
        tweets: 'bar',
      }
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          multiline: false
        },
      },
      rotated: true
    },
    size: {height:height, width:width},
  });

}
function top_retweeters_bar_chart() {

  let width = document.getElementById("top_retweeters_bar_chart").offsetWidth;
  let height = 300;

  var chart = c3.generate({
    padding: {
      top: 0,
      right: 60,
      bottom: 10,
      left: 110
    },
    bar: {
      width: 20
    },
    bindto: "#top_retweeters_bar_chart",
    data: {
      x: 'x',
      columns: [
        ["x", "@KabaliTamilnadu","@Gjr100Rajesh","@Arunkum99528557","@GODRAJNI1950","@Prabusarav","@ArunachalamDur3","@RajiniFansTeam1","@Prjaishankar","@RajiniBritto","@mathan051980"],
        ["retweets", 115, 82, 81, 69, 58, 57, 56, 52, 48, 48],
      ],
      onclick: function () {
        console.log(arguments);
      },
      types: {
        tweets: 'bar',
      }
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          multiline: false
        },
      },
      rotated: true
    },
    size: {height:height, width:width},
  });

}
