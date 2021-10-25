export const PoemReducer = (state, action) => {
    switch (action.type) {
        case "MARATHI_POEM":
            console.log('redux MARATHI_POEM '+action.payload);
            console.log('redux MARATHI_POEM state ' + JSON.stringify(state));
            return {
                ...state,
                [action.field]: action.payload,
            };
        case "MARATHI_ARTICLE":
            console.log('redux MARATHI_ARTICLE ' + action.payload);
            return {
                ...state,
                [action.field]: action.payload,
            };
        default:
            return state;
    }

};

