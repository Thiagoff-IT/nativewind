export const fetchInformacoes = async () => {
  try {
    const response = await fetch('https://sturdy-doodle-7w9j495r6v4cr4p4-3001.app.github.dev/informacoes');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};
