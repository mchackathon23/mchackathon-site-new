<script>
    let faqItems = [
      { question: "How much is it to enter the hackathon?", answer: "MC Hackathon is completely free!", expanded: false }
    ];
  
    function toggleAnswer(index) {
      faqItems[index].expanded = !faqItems[index].expanded;
    }
</script>

<style lang="scss">
    /* Your existing SCSS styles */
  
    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      color: #fff;
      font-family: 'Orbitron', sans-serif;
      font-size: 1.2rem;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 10px;
      border-radius: 1rem;
      margin-top: 5px;
    }
  
    .faq-answer.open {
      max-height: 200px; /* Adjust the value based on your content */
      transition: max-height 0.3s ease;
    }
  
    .question {
      cursor: pointer;
      font-family: 'Orbitron', sans-serif;
      font-size: 1.5rem;
      color: #ffcc00;
      margin-bottom: 10px;
    }
  </style>
  
  <div class="schedule-page">
      <div class="schedule-page-content">
          <h1 class="glitch" id="faq">Frequently Asked Questions</h1>
          <div class="faq">
              {#each faqItems as item, index}
                <div class="faq-item" on:click={() => toggleAnswer(index)}>
                  <div class="question">{item.question}</div>
                  <div class="faq-answer" class:open={item.expanded}>{item.answer}</div>
                </div>
              {/each}
          </div>
      </div>
      <div class="bg-fade top" />
      <div class="bg-fade bot" />
  </div>