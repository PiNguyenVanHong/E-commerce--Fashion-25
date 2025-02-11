export const splitText = (el: HTMLElement) => {
    const text = el.textContent?.trim();
    if (!text) return [];
  
    el.textContent = "";
  
    const spans: HTMLSpanElement[] = [];
  
    text.split(" ").forEach((word, index, array) => {
      const span = document.createElement("span");
      span.textContent = word;
      span.style.display = "inline-block";
      el.appendChild(span);
      spans.push(span);
  
      if (index < array.length - 1) {
        el.appendChild(document.createTextNode(" "));
      }
    });
  
    return spans;
  };
  