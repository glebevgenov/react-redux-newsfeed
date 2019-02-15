export default (state = null, action) => {
    switch(action.type) {
        case 'receive_news':
            return action.news;
        default:
            return state;
    }
};
