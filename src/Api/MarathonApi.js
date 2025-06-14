// export const marathonPromise = () => {
//     return fetch("http://localhost:5000/marathon").then(res => res.json)
// }

// For getting ALL marathons
export const getAllMarathons = () => {
  return fetch("http://localhost:5000/marathon").then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch marathons");
    }
    return res.json();
  });
};

// For getting a SINGLE marathon by ID
export const getMarathonById = (id) => {
  return fetch(`http://localhost:5000/marathon/${id}`).then((res) => {
    if (!res.ok) {
      throw new Error("Marathon not found");
    }
    return res.json();
  });
};

//* User Section
// For getting a All User
export const getAllUser = () => {
 return  fetch("http://localhost:5000/users").then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch User");
    }
    return res.json();
  });
};
