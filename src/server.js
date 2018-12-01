
const path = require('path')
var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


/* 

//var sm = require('sitemap');


var sitemap = sm.createSitemap ({
  hostname: 'https://www.steem.online.com',
  cacheTime: 600000,        // 600 sec - cache purge period 
    urls: [
     { url: '/',  changefreq: 'daily', priority: 0.3 },
     { url: '/market',  changefreq: 'weekly', priority: 0.5 },
     { url: '/news',  changefreq: 'weekly', priority: 0.5 },
     { url: '/apps',  changefreq: 'weekly', priority: 0.5 },
     { url: '/insights',  changefreq: 'weekly', priority: 0.5 },
     { url: '/discover',  changefreq: 'weekly', priority: 0.5 },
     { url: '/explore',  changefreq: 'weekly', priority: 0.5 },
     { url: '/terms-and-privacy',  changefreq: 'weekly', priority: 0.5 },
     { url: '/about',  changefreq: 'weekly', priority: 0.5 }
    ]
});



app.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send( xml );
  });
});


*/


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/content/index.html'))
})

app.get('/publish', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/client/publish.html'))
})

app.get('/user', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/content/user.html'))
})

app.get('/tags/:tag', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/content/tag.html'))
})

app.get('/market', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/static/market.html'))
})

app.get('/news', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/static/news.html'))
})

app.get('/insights', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/static/insights.html'))
})

app.get('/apps', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/static/apps.html'))
})

app.get('/discover', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/static/discover.html'))
})

app.get('/explore', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/static/explore.html'))
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/static/about.html'))
})

app.get('/terms-and-privacy', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/static/terms-and-privacy.html'))
})

app.get('/me', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/client/me.html'))
})

app.get('/@:username', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/content/user.html'))
})

app.get('/@:username/:permLink', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/content/article.html'))
})

app.get('/partials/navbar.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/partials/navbar.html'))
})

app.get('/partials/sidebar.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/partials/sidebar.html'))
})

app.get('/partials/footer.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/partials/footer.html'))
})

app.get('/:category/@:username/:permLink', function (req, res) {	
	var user = req.params.username;
	var permLink = req.params.permLink;
	res.redirect("/@" + user + "/" + permLink);
})

app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname + '/views/static/404.html'))
})

 
 var port = process.env.PORT || 80;
  app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});

