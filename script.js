/*
function Comment(props) {
  return (
    <div className="container projects">
      <div className="row row-cols-2">
        <div className="col-lg-4 col-md-6 col-12">
          <img src={props.image} className="img-fluid"></img>
        </div>
        <div className="col-lg-8 col-md-6 col-12 project-text">
          <h3 className="project-title">{props.title}</h3>
          <p>{props.text}</p>
        </div>
        <a className="project-link" href={props.link}>see the code ↗</a>
      </div>
    </div>
  );
}

const project1 = {
  image:"images/placeholder-3.webp",
  title:"PROJECT 1",
  text:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Cras tincidunt nunc massa, sit amet semper purus mattis a.",
  link:"#"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Comment
    image={project1.image}
    title={project1.title}
    text={project1.text} 
    link={project1.link} />

);

const App = () => {
  return React.createElement(
    "div",
    {style:{color:"red"}, id: 'someId', className: "row row-cols-2"},

  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
*/

// CODE FROM https://css-tricks.com/snippets/css/typewriter-effect/
document.addEventListener('DOMContentLoaded',function(event){
        
    // type one character in the typewriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, location, fnCallback) {
      // check if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector(location).innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, location, fnCallback)
        }, 100);
      }
      return false;
    }

    typeWriter("hey, i'm vrinda", 0, "h1", function(){
    });

    setTimeout(() => { typeWriter("scroll down 4 more!", 0, "h4", function(){
    }) }, 4000);
    
  }); 
