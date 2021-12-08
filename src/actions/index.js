export const GET_DATA = 'GET_DATA';
export const getdata = (payload) => ({ type: GET_DATA, payload });

export const SET_DATA = 'SET_DATA';
export const setdata = (payload) => ({ type: SET_DATA, payload });

export const TOKEN = 'TOKEN';
export const setToken = (payload) => ({ type: TOKEN, payload });

export const GET_PRODUCT = 'GET_PRODUCT';
export const getproduct = (payload) => ({type:GET_PRODUCT,payload});

export const GET_TRANSACTION = 'GET_TRANSACTION';
export const gettransaction = (payload) => ({type:GET_TRANSACTION,payload});

export const GET_LOCATION = 'GET_LOCATION';
export const getlocation = (payload) => ({type:GET_LOCATION,payload});

export const GET_FAMILIS= 'GET_FAMILIS';
export const getfamilis = (payload) => ({type:GET_FAMILIS,payload});


export const SET_NAV= 'SET_NAV';
export const setnav = (payload) => ({type:SET_NAV,payload});

export const SET_PAGINATION= 'SET_PAGINATION';
export const setpagination = (payload) => ({type:SET_PAGINATION,payload});

export const LOCATION_PAGINATION= 'LOCATION_PAGINATION';
export const paginationOnLocation = (payload) => ({type:LOCATION_PAGINATION,payload});



