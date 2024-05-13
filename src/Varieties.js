const Varieties = async () => {
  try {
    const response = await fetch('http://localhost:5000/varieties');
    if (!response.ok) {
      throw new Error('Failed to fetch varieties data');
    }
    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching varieties data:', error);
    return []; // Return an empty array if there's an error
  }
};

export default Varieties;
