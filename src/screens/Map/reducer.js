import Actions from '../../redux/actionTypes';


const INITIAL_STATE = {
     location: {
      coords: {
        latitude: 1.2170,
        longitude: -77.2818,
      },
    },
    showCluster: false,
    dataCluster: [],
  };
  export default(state= INITIAL_STATE, action) =>{
      switch (action.type){
        case Actions.SHOW_CLUSTER:
      return { ...state, showCluster: action.payload.value, dataCluster: action.payload.data };
        case Actions.SET_LOCATION:
      return { ...state, location: action.payload };
      default:
        return state;
      }
  }