import { createStore } from "redux";
import { reducer } from "./reducer";


let store =[{name:"null"},[],[]];  //[0]=user .. [1]=repositories  ..   [2]=commits

export let repos = createStore(reducer,store)

