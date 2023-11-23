const apiUrl = 'https://funky-pleasantly-ferret.ngrok-free.app';

export const fetchData = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/data`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (postData) => {
  try {
    const response = await fetch(`${apiUrl}/api/post_data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
