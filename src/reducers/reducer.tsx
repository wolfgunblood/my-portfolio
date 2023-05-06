import sampleStore from "../utils/samples/sampleStore";

const reducer = (state = sampleStore, action: any) => {

    switch (action.type) {
        case 'darkmode/TOGGLE':
            // eslint-disable-next-line no-case-declarations
            const darkmode = {
                ...state,
                darkmode: !state.darkmode,
            };
            return darkmode;
        default:
            return state;
    }
}

export default reducer;
