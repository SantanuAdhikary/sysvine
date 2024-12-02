import Hello from "./Hello";
import Hi from "./Hi";





const San = (props)=>{

    let {myName, age, skills} = props
let a = 3;

    console.log(props)


    return(

        <div>
            <h1> i am san component</h1>

            <h2> {myName} </h2>

            <h3> {age}</h3>

            {
                skills.map((ele,index)=>(
                    <li key={index}> {ele} </li>
                ))
            }

          


            {
                a>5 ? <h1> a is greater than 5</h1> : <h1> a is less than 5</h1>
            }

            {
                a>5 ? <Hello/> : <Hi/>
            }

            {
                a>5 && <Hello/> 
            }
        </div>
    )
}


export default San;



