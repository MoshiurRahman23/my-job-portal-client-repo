export const myApplicationPromise = (email,accessToken) =>{
    return fetch(`http://localhost:5000/application?email=${email}`,{
        credentials:'include',
        headers:{
             authorization: `Bearer ${accessToken}`
        }
    }).then(res =>res.json())
}

// export const myApplicationPromise = async (email, accessToken) => {
//   try {
//     const res = await fetch(`http://localhost:5000/application?email=${email}`, {
//       credentials: "include", // send cookies if needed
//       headers: {
//         Authorization: `Bearer ${accessToken}`, // Firebase token
//       },
//     });

//     if (!res.ok) {
//       const text = await res.text(); // get raw response for debugging
//       console.error("Failed to fetch applications:", text);
//       throw new Error("Failed to fetch applications from server");
//     }

//     return res.json();
//   } catch (error) {
//     console.error("myApplicationPromise error:", error);
//     throw error; // let the component handle it
//   }
// };