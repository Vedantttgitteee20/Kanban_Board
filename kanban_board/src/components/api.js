const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchData = async () => {
  try {
    //console.log('Fetching data...');
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    //console.log('Data received:', data);

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
