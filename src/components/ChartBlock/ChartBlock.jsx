import { LineChart, Line, Tooltip, XAxis, CartesianGrid } from "recharts";
import "./ChartBlock.sass";
import SearchBlock from "../SearchBlock/SearchBlock";
import React from "react";
import { connect } from 'react-redux';

let ChartBlock =(props)=>{

    let data = []
    
    let i =-1;
    let sumCommits=0;
    let bufer ="";
    props.commits.map(elem=>{
        let d =+elem.commit.committer.date.slice(5,7)+"."+elem.commit.committer.date.slice(8,10)
        if(bufer==d){
        
            data[i].commit+=1;
        }else{
        bufer=d;
        data.push({commit: 1})
        i++;
        }
        sumCommits++;

    })
    console.log(data)
    return(
        <>
        <div className="chart-block__search-block"><SearchBlock/></div>
        

        {/* Chart */}

        <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="commit" stroke="#ff7300" yAxisId={0} />
        {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
      </LineChart>
      Commit: {sumCommits}
        </>
    )
}

function mapStateToProps(store){
    return{repositories:store[1],
        commits:store[2]
    }
    
}

export default connect(mapStateToProps)(ChartBlock)