const article = document.querySelector("article");

if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);

    const wordCount = [...words].length;
    const readingTime = Math.max(1, Math.round(wordCount / 200)); // Ensure at least 1 min read
    const badge = document.createElement("p");

    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    const heading = article.querySelector("h1"); // Find the main heading
    const date = article.querySelector("time")?.parentNode; // Find the date if available

    // ✅ Ensure there is a valid insertion point
    if (date) {
        date.insertAdjacentElement("afterend", badge);
    } else if (heading) {
        heading.insertAdjacentElement("afterend", badge);
    } else {
        console.warn("No suitable place to insert reading time badge.");
    }
}
