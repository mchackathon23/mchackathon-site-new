<script>
    let faqItems = [
      { question: "How much is it to enter the hackathon?", answer: "Nothing! MC Hackathon is completely free!", expanded: false },
      { question: "Do we need to bring food?", answer: "No! There will be free pizza, snacks, and water for everyone!", expanded: false},
      { question: "How many members per group?", answer: "Up to 4", expanded: false},
      { question: "What if we have more questions that aren't here?", answer: "Join the discord!", expanded: false}
    ];
  
    function toggleAnswer(index) {
      faqItems[index].expanded = !faqItems[index].expanded;
    }
</script>

<style lang="scss">
    /* Your existing SCSS styles */
  
    .faq-item {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 20px; /* Increased padding for a bigger box */
      margin-bottom: 20px; /* Increased margin for better separation */
      cursor: pointer;
      display: flex;
      flex-direction: column;
      width: 85%; /* Adjusted width to be slightly bigger */
      margin: 0 auto; /* Centered the FAQ items */
    }
  
    .faq-answer {
      height: 0;
      overflow: hidden;
      transition: height 0.5s ease;
      color: #fff;
      font-family: 'Orbitron', sans-serif;
      font-size: 1.2rem;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 10px;
      border-radius: 5px;
      margin-top: 5px;
      display: none; /* Initially hiding answer */
    }
  
    .faq-answer.open {
      height: auto;
      transition: height 0.5s ease;
      display: block; /* Display answer when expanded */
    }
  
    .question {
      font-family: 'Orbitron', sans-serif;
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .arrow {
      font-size: 1.2rem;
      transition: transform 0.3s ease;
    }
  
    .arrow.down {
      transform: rotate(180deg);
    }
  </style>
  
  <div class="schedule-page">
    <div class="schedule-page-content">
      <div class="faq">
        {#each faqItems as item, index}
          <div class="faq-item" on:click={() => toggleAnswer(index)}>
            <div class="question">
              {item.question}
              <span class="arrow" class:down={item.expanded}>&#9660;</span>
            </div>
            <div class="faq-answer" class:open={item.expanded}>
              {#if item.expanded}
                {item.answer}
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div class="bg-fade top"></div>
    <div class="bg-fade bot"></div>
  </div>