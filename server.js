var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one': {
        title: "Article One | Shashank Prakash",
        heading: "Article One",
        date: "Aug 27, 2017",
        content: `
          <p>
          Hi there !! Article One has a proper HTML page assigned to it now.
          </p>
          <p>
          Content goes here. Content goes here. Content goes here. Content goes here. Content goes here. Content goes here. Content goes here. Content goes here. Content goes here. Content goes here.
          </p>
          <p>
          Content goes here. Content goes here. Content goes here. Content goes here. Content goes here. Content goes here. Content goes here. Content goes here. Content goes here. Content goes here.
          </p>
        `
    },
    'article-two': {
        title: "Article Two | Shashank Prakash",
        heading: "Article Two",
        date: "Aug 28, 2017",
        content: `
          <p>
          Hi there !! Article Two has a proper HTML page assigned to it now.
          </p>
        `
    },
    'article-three': {
        title: "Article Three | Shashank Prakash",
        heading: "Article Three",
        date: "Aug 28, 2017",
        content: `
          <p>
          Hi there !! Article Two has a proper HTML page assigned to it now.
          </p>
    `
    }
    
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    var htmlTemplate=`
        <HTML>
        
          <HEAD>
            <title>${title}</title>
            <meta name="viewport" content="width-device-width, initial-scale=1" />
           <link href="ui/style.css" rel="stylesheet"/>
          </HEAD>
          
          <BODY>
            <div class="container">
                <div>
                  <a href="/">Home</a>
                </div>
            
                <hr/>
            
                <h3>${heading}</h3>
            
                <div>
                  ${date}
                </div>
            
                <div>
                  ${content}
                </div>
            </div>
          </BODY>
        
        </HTML>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res) {
   articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
