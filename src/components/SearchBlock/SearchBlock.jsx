import { useState } from "react";
import "./SearchBlock.sass";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


let SearchBlock =(props)=>{
    
    let [inputValue,setInputValue] = useState();
    let {setObtained} =props;
    
    function onHandleInput(value){
        setInputValue(value.target.value);
    }

    async function fetchData(value){
        try{
            props.dispatch({type:"NEW-USER", value:value})
        if(value!=null)
      {
        setObtained(false)

        let resp= await fetch(`https://api.github.com/users/${value}/repos`).then(elem=>elem.json())
        props.dispatch({type:"NEW-REPOS", value:resp})
        setObtained(true)
       
    }
        
    }
       catch(e){
           console.log(e)
           if(e =="TypeError: Failed to fetch"){
           console.log("REPEAT")
           setTimeout(() => {
               fetchData(value);
           }, 5000);   
           }

       }
    }

    return(
        <div className="search-block">
             <input className="search-block_input" value={inputValue} onChange={(elem)=>{onHandleInput(elem)}}/>
             <Link to="/repositories/"><button className="search-block_button" onClick={()=>{fetchData(inputValue); }}>
                 Search
                 </button>
             </Link>
        </div>
    )
}
function mapStateToProps(store){
    return{
        user:store[0],
        repositories:store[1]
        
    }
}

export default connect(mapStateToProps)(SearchBlock)