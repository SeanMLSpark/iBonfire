import axios from 'axios';

export const ADD_MARKER = 'ADD_MARKER';

export function addMarker(data) {
  console.log(data, 'what is dispatch')
  // return function (dispatch) {
  //   axios()
  // }
  return ({
      type: ADD_MARKER, 
      payload: data 
    })
}