export const lessons_section_data = [
  {
    id: 1,
    title: 'HTML',
    desc: 'The language for building web pages',
    button: 'Learn HTML',
    url: '/lesson_html',
    background: '#FFD3EA',
    code: `<!DOCTYPE html>
    <html>
    <title>HTML Tutorial</title>
    <body>
    
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    
    </body>
    </html>`
  },
  {
    id: 2,
    title: 'CSS',
    desc: 'The language for styling web pages',
    button: 'Learn CSS',
    url: '/lesson_css',
    background: '#FCFCAB',
    code: `body {
      background-color: lightblue;
    }
    
    h1 {
      color: white;
      text-align: center;
    }
    
    p {
      font-family: verdana;
    }`
  },
  {
    id: 3,
    title: 'JavaScript',
    desc: 'The language for programming web pages',
    button: 'Learn JavaScript',
    url: '/lesson_js',
    background: '#25B9E1',
    code: `<button onclick="myFunction()">Click Me!</button>

    <script>
    function myFunction() {
      let x = document.getElementById("demo");
      x.style.fontSize = "25px";
      x.style.color = "red";
    }
    </script>`
  },
]