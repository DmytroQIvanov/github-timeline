import React from "react";
import { connect } from 'react-redux';
import "./ReposBlock.sass";
import { Link } from "react-router-dom";


async function fetchCommits(props,name){
    
                let resp = await fetch(`https://api.github.com/repos/${props.user.name}/${name}/commits`).then(elem=>elem.json());
                props.dispatch({type:"NEW-COMMITS", value:resp})
                console.log(resp)
            }

    let ReposBlock=(props)=>{


    return (<div className="repos-container">
        {props.store.map(elem=>(
    <Link to="/chart/">
        <div className="repos-container_block" onClick={()=>{
            
            fetchCommits(props,elem.name);

        }}>
        <div>{elem.name}</div>
       <div> {elem.watchers}</div>
       <div> {elem.language}</div>
    </div>
    </Link>
        ))}
    </div>)
}

function mapStateToProps(store){
    return{
    user:store[0],
    store:store[1],
    commits:store[2]
}
}

export default connect(mapStateToProps)(ReposBlock)