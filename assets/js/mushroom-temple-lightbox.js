document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-option");
  const body = document.body;
  const dayThumb = document.getElementById("thumb-day");
  const nightThumb = document.getElementById("thumb-night");
  const videoTitle = document.getElementById("video-title");
  const playButton = document.getElementById("play-button");

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
  }

  // Toggle Click Listeners
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setMode(btn.dataset.mode);
    });
  });

  // Play Button & Thumbnail Listener
  const openVideo = () => {
    const isDay = body.classList.contains("mode-day");
    const url = isDay ? dayVideoUrl : nightVideoUrl;
    window.open(url, "_blank");
  };

  playButton.addEventListener("click", openVideo);

  const thumbnailContainer = document.querySelector(".thumbnail-container");
  if (thumbnailContainer) {
    thumbnailContainer.addEventListener("click", openVideo);
  }

  // Initialize (default to day)
  setMode("day");
});
