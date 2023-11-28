<script>
    let faqItems = [
      { question: "How much is it to enter the hackathon?", answer: "MC Hackathon is completely free!", expanded: false }
    ];
  
    function toggleAnswer(index) {
      faqItems[index].expanded = !faqItems[index].expanded;
    }
</script>

<style lang="scss">
    
  
    .faq-item {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease; 
      color: #fff;
      font-family: 'Orbitron', sans-serif;
      font-size: 1.2rem;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 10px;
      border-radius: 5px;
      margin-top: 5px;
    }
  
    .faq-answer.open {
      max-height: 200px; 
      transition: max-height 0.5s ease; 
    }
  
    .question {
      font-family: 'Orbitron', sans-serif;
      font-size: 1.5rem;
      color: #ff9900;
      margin-bottom: 5px;
    }
  
    .arrow {
      font-size: 1.2rem;
      transition: transform 0.3s ease;
      margin-left: 10px;
    }
  
    .arrow.down {
      transform: rotate(180deg);
    }
  </style>
  
  <div class="schedule-page">
      <div class="schedule-page-content">
          <h1 class="glitch" id="faq">Frequently Asked Questions</h1>
          <div class="faq">
              {#each faqItems as item, index}
                <div class="faq-item" on:click={() => toggleAnswer(index)}>
                  <div class="question">{item.question}</div>
                  <span class="arrow" class:down={item.expanded}>&#9660;</span>
                  <div class="faq-answer" class:open={item.expanded}>{item.answer}</div>
                </div>
              {/each}
          </div>
      </div>
      <div class="bg-fade top" />
      <div class="bg-fade bot" />
  </div>