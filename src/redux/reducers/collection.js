import produce from "immer";

export default (state = null, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'add_news_to_collection':
                draft.newsList[action.id] = action.news;
                break;
            case 'remove_news_from_collection':
                delete draft.newsList[action.id];
                break;
            case 'remove_all_news_from_collection':
                draft.newsList = {};
                break;
            case 'set_name':
                draft.name = draft.editingName;
                draft.isEditingName = false;
                break;
            case 'toggle_is_editing_name':
                draft.isEditingName = !draft.isEditingName;
                draft.editingName = draft.name;
                break;
            case 'set_editing_name':
                draft.editingName = action.editingName;
                break;
            default: 
                return state;
        }
    });
};
