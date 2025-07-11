//component = html + css + js
//jsx: coding with HTML

import './style.css';
const MyComponent = () => {
    const theanh = "Control";
    const num = 21;
    //const bool = true;//boolean, undifined, and null datatype do not print out
    //const unde = undifined;
    //const null = null; 
    const arr = [1, 2, 3];

    const obj = {
        name: "Nguyen The Anh",
        age: 21
    }
  return (
    //fragment
    //JSON.stringify: convert the arr or obj to be a json datatype
    <>
        <div> {theanh} - Control & The Anh update</div>
        
        <div className="child" 
            style= {
                {borderRadius: "10px"}
            }
        >{num} - this is a child</div>

        <div>{arr.join(", ")}</div>
        
        <div>{JSON.stringify(obj)}</div>

        <div>{console.log("Coding on the html with curly bracket")}</div>
    </>
  );
}

export default MyComponent; //Export 1 arrow function
