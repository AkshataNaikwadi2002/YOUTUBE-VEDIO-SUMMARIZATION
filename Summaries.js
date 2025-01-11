// function displaySummary(summary) {
//   const summaryList = document.getElementById('summaryList');
//   const card = document.createElement('div');
//   card.className = 'card';
//   card.innerHTML = `
//     <div class="card-body">
//       <p>${summary}</p>
//     </div>
//   `;
//   summaryList.appendChild(card);
// }
fetch('https://your-n8n-instance/summarize-youtube', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ youtubeUrl: '<https://youtu.be/QWpEeJ-vT7s?si=HTsz03PWo-bmVfsG>' }),
})
.then((response) => response.json())
.then((data) => {
  console.log('Summary:', data.summary);
});