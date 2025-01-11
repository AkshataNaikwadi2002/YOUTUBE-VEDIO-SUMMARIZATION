document.getElementById('videoForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const youtubeUrl = document.getElementById('youtubeUrl').value;

  const response = await fetch('/process-url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: youtubeUrl }),
  });

  const result = await response.json();
  displaySummary(result.summary);
});