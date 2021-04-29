
// свместо фильтрации в компоненте попробовать филтровать тaски в редьюсере
// создать функцию сортировки тасков в зависимости от выполнения

export const initialState = {
    tasks: [],
    searchReq: '',
    filter: 'all',
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_TASKS': 
            return {
                ...state,
                tasks: action.payload
            }
        
        case 'SEARCH_TASKS': 
            return {
                ...state,
                searchReq: action.payload
            }

        case 'FILTER_TASKS': 
            return {
                ...state,
                filter: action.payload
            }

        default:
            return state
    }
}

