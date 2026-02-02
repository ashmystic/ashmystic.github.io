document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-option");
  const body = document.body;
  const dayThumb = document.getElementById("thumb-day");
  const nightThumb = document.getElementById("thumb-night");
  const videoTitle = document.getElementById("video-title");
  const playButton = document.getElementById("play-button");
  const aboutTrigger = document.querySelector(".about-trigger");
  const aboutContent = document.querySelector(".about-content");

  // Video Data from data attributes on the preview container
  const previewContainer = document.querySelector(".video-preview");
  const dayVideoUrl = previewContainer.dataset.dayUrl || "#";
  const nightVideoUrl = previewContainer.dataset.nightUrl || "#";

  const titles = {
    day: "Day Meditation - Birds & Forest Sounds",
    night: "Night Meditation - Crickets & Evening Calm",
  };

  function setMode(mode) {
    // Body Class
    body.classList.remove("mode-day", "mode-night");
    body.classList.add(`mode-${mode}`);

    // Toggle Active State
    toggleButtons.forEach((btn) => {
      if (btn.dataset.mode === mode) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      }
    });

    // Thumbnails
    if (mode === "day") {
      dayThumb.classList.add("active");
      nightThumb.classList.remove("active");
    } else {
      dayThumb.classList.remove("active");
      nightThumb.classList.add("active");
    }

    // Title Transition
    videoTitle.classList.add("fade-out");
    setTimeout(() => {
      videoTitle.textContent = titles[mode];
      videoTitle.classList.remove("fade-out");
    }, 300);

    // Play Button Aria
    playButton.setAttribute("aria-label", `Play ${mode} meditation video`);

    // Play Button class for styling if needed (though CSS handles mostly via body class,
    // but specific button overrides might rely on body class)
  }

  // Toggle Click Listeners
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setMode(btn.dataset.mode);
    });
  });

  // Play Button Listener
  playButton.addEventListener("click", () => {
    const isDay = body.classList.contains("mode-day");
    const url = isDay ? dayVideoUrl : nightVideoUrl;
    window.open(url, "_blank");
  });

  // About Toggle
  if (aboutTrigger && aboutContent) {
    aboutTrigger.addEventListener("click", () => {
      const isExpanded = aboutContent.classList.contains("expanded");
      if (isExpanded) {
        aboutContent.classList.remove("expanded");
        aboutTrigger.setAttribute("aria-expanded", "false");
        aboutTrigger.textContent = "About This Piece ↓";
      } else {
        aboutContent.classList.add("expanded");
        aboutTrigger.setAttribute("aria-expanded", "true");
        aboutTrigger.textContent = "About This Piece ↑";
      }
    });
  }

  // Initialize (default to day)
  setMode("day");
});
