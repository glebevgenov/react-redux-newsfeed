const initialState = {
    nl: {},
    name: 'new',
    editingName: 'new',
};

export default (state = initialState, action) => {
    let news;
    let nl;
    switch (action.type) {
        case 'add_news_to_collection':
            news = {};
            news[action.news.id] = action.news;
            return {
                ...state,
                nl: {
                    ...state.nl,
                    ...news
                }
            };
        case 'remove_news_from_collection':
            nl = { ...state.nl };
            delete nl[action.newsId];
            return {
                ...state,
                nl
            };
        case 'remove_all_news_from_collection':
            nl = {};
            return {
                ...state,
                nl
            };
        case 'set_name':
            return {
                ...state,
                name: state.editingName,
                isEditingName: false
            };
        case 'toggle_is_editing_name':
            return {
                ...state,
                isEditingName: !state.isEditingName
            };
        case 'set_editing_name':
            return {
                ...state,
                editingName: action.editingName
            };
        default:
            return state;
    }
};
