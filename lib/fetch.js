export const fetcher = (...args) => {
    return fetch(...args, {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),
     
    }).then(async (res) => {
      let payload;
      try {
        if (res.status === 204) return null; // 204 does not have body
        payload = await res.json();
        return payload;
      } catch (e) {
        /* noop */
      }
      if (res.ok) {
        return payload;
      } else {
        return Promise.reject((payload.error + res.status)  || new Error('Something went wrong'));
      }
    });
  };
  
// export const fetcher = async url => {
//   const res = await fetch(url)

//   // If the status code is not in the range 200-299,
//   // we still try to parse and throw it.
//   if (!res.ok) {
//     const error = new Error('An error occurred while fetching the data.')
//     // Attach extra info to the error object.
//     error.info = await res.json()
//     error.status = res.status
//     throw error
//   }
//   let payload = await res.json()
//   return payload; 
// }
