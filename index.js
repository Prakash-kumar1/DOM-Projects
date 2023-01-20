// @@@###$$$%%%&&&***===>>>  18 January Backend sessions  @@@###$$$%%%&&&***===>>>

const http = require('http') ;
const { url } = require('inspector');

const server = http.createServer((req, res) => {
    console.log("on refreshing it shows")

    res.setHeader('Content-Type', 'text/html') ;
    res.write('hi Everyone, I am starting Backend') ;

    let url = req.url ;
    console.log(req.url) ;

    if(url === '/'){
        res.write('home')
    } else if (url === '/about'){
        res.write("===>>>> We are Awesome")
    } else {
        res.write(" ===>>>> Page not found")
    }

    res.write('<html>')
    res.write('<head>')
    res.write('<title> Aircampus </title>')
    res.write('<body><h1>Backend developer</h1></body>')
    res.write('</title>')
    res.write('</head>')

// creating a basic form just for practice
res.write(`<body>
            <h1>Sign up form</h1>
            <form action="/message" method="POST">
            <input type="text" name="mango">
            <button type="submit"> Send </button>
            </form>
            </body>`)
    res.write('<html>')
    
    res.end() ;
}) ;

server.listen(3000) ;