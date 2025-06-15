// For getting ALL marathons
export const getAllMarathons = () => {
  return fetch(`${import.meta.env.VITE_API_URL}/marathon`).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch marathons");
    }
    return res.json();
  });
};

// For getting a SINGLE marathon by ID
export const getMarathonById = (id) => {
  return fetch(`${import.meta.env.VITE_API_URL}/marathon/${id}`).then((res) => {
    if (!res.ok) {
      throw new Error("Marathon not found");
    }
    return res.json();
  });
};

//* User Section
// For getting a All User
// export const getAllUser = () => {
//   return fetch(`${import.meta.env.VITE_API_URL}/users`).then((res) => {
//     if (!res.ok) {
//       throw new Error("Failed to fetch User");
//     }
//     return res.json();
//   });
// };


export const getAllUser = async (accessToken,email) => {
  const res = await fetch( `${import.meta.env.VITE_API_URL}/users?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`, //  Send token
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch User");
  }

  return await res.json();
};