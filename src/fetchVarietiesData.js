// Define a function to fetch varieties data from the server
const fetchVarietiesData = async () => {
    try {
      const response = await fetch('http://localhost:5000/fetch-varieties-data', {
        method: 'POST', // Use POST method
        headers: {
          'Content-Type': 'application/json' // Specify JSON content type
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch varieties data');
      }
  
      const data = await response.json(); // Parse JSON response
      return data; // Return the fetched data
    } catch (error) {
      console.error('Error fetching varieties data:', error);
      return []; // Return an empty array if there's an error
    }
  };
  
  export default fetchVarietiesData;
  