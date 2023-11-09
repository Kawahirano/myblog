var posts=["posts/19338.html","posts/60300.html","posts/41118.html","posts/2013454d.html","posts/14785.html","posts/3022c1d6.html","posts/47331.html","posts/33008.html","posts/59448.html","posts/39321.html","posts/65353.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };