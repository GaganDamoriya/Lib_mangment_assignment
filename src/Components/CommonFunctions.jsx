export const storeDatalocally = ({ data }) => {
  // Retrieve the existing array from local storage
  let existingData = JSON.parse(localStorage.getItem("bookshelf")) || [];

  const checkedData = existingData.filter(
    (item) => item.isbn[0] !== data.isbn[0]
  );
  // Add the new data to the array
  checkedData.push(data);

  // Store the updated array back to local storage
  localStorage.setItem("bookshelf", JSON.stringify(checkedData));

  console.log("Data stored successfully:", checkedData);
};

export const deleteStoredLocally = (id) => {
  let existingData = JSON.parse(localStorage.getItem("bookshelf")) || [];

  const updatedData = existingData.filter((item) => item.isbn[0] !== id);

  localStorage.setItem("bookshelf", JSON.stringify(updatedData));

  console.log("Data after deletion:", updatedData);
};

export const truncateString = (str) => {
  if (str.length > 20) {
    return str.substring(0, 20) + "...";
  }
  return str;
};
