const apiUrl = 'localhost:8000';

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
