
export const addDataCart = (data) => {
  return {
    type: "dataCart/addCart",
    payload: data
  };
};

export const CleanDataCart = (state , action) => { 
  return{
    type:"dataCart/ClearnCart",
  }
};


export const RemoveDataCart = (data) => { 
  return{
    type:"dataCart/RemovenCart",
    payload: data
  }
};