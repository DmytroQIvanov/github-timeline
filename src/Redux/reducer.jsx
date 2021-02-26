export let reducer =(state,action)=>{

    switch (action.type) {
        case 'NEW-REPOS':
            
            state[1] = action.value;
            return [...state]
        case 'NEW-COMMITS':
            
            state[2] = action.value;
            return [...state]
        case 'NEW-USER':
            
            state[0].name = action.value;
            return [...state]
    
        default:

            return [...state]

    }
}