// For getting ALL marathons
// export const getAllMarathons = () => {
//   return fetch(`${import.meta.env.VITE_API_URL}/marathon`).then((res) => {
//     if (!res.ok) {
//       throw new Error("Failed to fetch marathons");
//     }
//     return res.json();
//   });
// };

export const getAllMarathons = (accessToken) => {
  return fetch(`${import.meta.env.VITE_API_URL}/marathon`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch marathons");
    }
    return res.json();
  });
};

export const getNewMarathon = (accessToken) => {
 /*  console.log("new marathon ", accessToken); */

  return fetch(`${import.meta.env.VITE_API_URL}/new-marathon`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch new marathons");
    }
    return res.json();
  });
};

// For getting a SINGLE marathon by ID
export const getMarathonById = (id, accessToken) => {

  /* console.log("Token in API call:", accessToken); */

  return fetch(`${import.meta.env.VITE_API_URL}/marathon/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`, // Use capital 'A'
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Marathon not found or Unauthorized");
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

export const getAllUser = async (accessToken, email) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/users?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`, //  Send token
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch User");
  }

  return await res.json();
};
