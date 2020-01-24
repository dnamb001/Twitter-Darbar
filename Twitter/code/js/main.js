top_tweets_1 = ["1072844960037244928","1072824663494008833","1072837579094011904","1072918466481524736","1072913794203037696"];

top_tweets_2 = ["1072837189485109248","1072872805337849856","1072836821166538752","1072830862788567040","1072832158815932416"];

twttr.ready(function (twttr) {

  top_tweets_1.forEach(function(top_tweet) {
    get_tweets(top_tweet, "top_tweets_1");
  });
  top_tweets_2.forEach(function(top_tweet) {
    get_tweets(top_tweet, "top_tweets_2");
  });

  get_tweets("1072825691694161920","ts_tweet_1");
  get_tweets("1072825610039373824","ts_tweet_2");

  get_tweets("1072827502958125056","ts_tweet_3");
  get_tweets("1072827699503218688","ts_tweet_4");

  get_tweets("1072830392649035776","ts_tweet_5");
  get_tweets("1072830215108378626","ts_tweet_6");

  get_tweets("1072824663494008833","vt_tweet_1");

});

function get_tweets(tweet_id, div) {
  twttr.widgets.createTweet(
    tweet_id,
    document.getElementById(div),
    {
      align: 'left',
      cards: 'hidden'
    })
    .then(function (el) {
      console.log("Tweet displayed.")
    });
  }
