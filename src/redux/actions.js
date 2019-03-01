export const addNewsToCollection = news => ({
    type: 'add_news_to_collection',
    news
});

export const removeNewsFromCollection = id => ({
    type: 'remove_news_from_collection',
    id
});

export const removeAllNewsFromCollection = () => ({
    type: 'remove_all_news_from_collection'
});

export const setName = () => ({
    type: 'set_name',
});

export const toggleIsEditingName = () => ({
    type: 'toggle_is_editing_name'
});

export const setEditingName = editingName => ({
    type: 'set_editing_name',
    editingName
});

export const receiveNews = news => ({
    type: 'receive_news',
    news
});
