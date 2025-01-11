const n8nWebhookUrl = 'https://your-n8n-instance.com/webhook/generate-summary';

async function processVideo(url) {
  const response = await fetch(n8nWebhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ youtubeUrl: url }),
  });

  const data = await response.json();
  return data.summary;
}