//your JS code here. If required.
// Select all "learn more" links
const learnMoreLinks = document.querySelectorAll(".learn-more");

// Add click event to each link
learnMoreLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        // Prevent the link from navigating
        event.preventDefault();

        // Find the heading of the current card
        const cardTitle = link
            .closest(".ad-card, .green-floor")
            ?.querySelector("h3")
            ?.textContent;

        // Show message
        alert(`You clicked "learn more" for ${cardTitle || "this section"}.`);
    });
});