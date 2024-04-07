const intersectionCallback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade');
      }
    }
  }
  
  const observer = new IntersectionObserver(intersectionCallback);
  
  const items = document.querySelectorAll('p, h2, img');
  console.log(items);
  for (const item of items) {
    observer.observe(item);
  }
  