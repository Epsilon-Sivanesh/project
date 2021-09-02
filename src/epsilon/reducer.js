import img1 from './Assets/Group 4.png'
import img2 from './Assets/Group 5.png'
import img3 from './Assets/Group 3.png'
import img4 from './Assets/Group 1.png'

const global = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    dataPerPage: 6,
    totalData: 18
};

function firstReducer(state = global, action) {
    if (action.type === 'data') {
        return { ...state, data: action.payload }
    }
    if (action.type === 'post') {
        return { ...state, currentpost: action.currentpost }
    }
    if (action.type === 'paginate') {
        return { ...state, paginate: action.paginate }
    }
    else
        return state;
}
export { firstReducer };
