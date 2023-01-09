import fetcher from "../../fetch/index.js";

const APIKEY = '3c4b740300bda7e441ed226d7135b99c';

export const setLoading = (status) => {
  return {
    type: "LOADING",
    loading: status
  }
};

export const getListData = (url, type, options) => {
  return (dispatch) => {
    dispatch(setLoading(true))
    fetcher(url, options)
      .then((data) => {
        let listData = [];

        if(type === 'track') {
          const { tracks } = data || {};
          const { track } = tracks || {};

          listData = track;
        } else if(type === 'artist') {
          const { artists } = data || {};
          const { artist } = artists || {};

          listData = artist
        }

        dispatch({
          type: "GET_LIST_DATA",
          listData
        })
      })
      .catch((e) => console.error(e))
      .finally(() => dispatch(setLoading(false)))
  };
};


export const getSearchData = (url, type, options) => {
  return (dispatch) => {
    dispatch(setLoading(true))
    fetcher(url, options)
      .then((data) => {
        let listData = [];

        if(type === 'track') {
          const { results } = data || {};
          const { trackmatches } = results || {};
          const { track } = trackmatches || {};

          listData = track;
        } else if(type === 'artist') {
          const { results } = data
          const { artistmatches } = results || {};
          const { artist } = artistmatches || {};

          listData = artist;
        }

        dispatch({
          type: "GET_LIST_DATA",
          listData
        })
      })
      .catch((e) => console.error(e))
      .finally(() => dispatch(setLoading(false)))
  };
};
