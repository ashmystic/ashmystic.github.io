---
layout: default
title: Mushroom Temple Meditation Portal
permalink: /mushroom-temple-lightbox/
day_video_url: "https://youtu.be/lmtunWbJhPM?si=73aLI5wM_VfVaZmL"
night_video_url: "https://youtu.be/Nc-yLCf0h_Q?si=psddcbDLSYKF22ts"
day_thumbnail: "/assets/images/portfolio-items/ancient_origins.jpg"
night_thumbnail: "/assets/images/portfolio-items/ancient_accumulator.jpg"
---

<!-- Custom CSS for this specific page features -->
<link rel="stylesheet" href="{{ '/assets/css/mushroom-temple-lightbox.css' | relative_url }}">

<!-- Page Header (replacing standard Hero) -->

{% include mushroom-temple-lightbox/hero.html %}

<!-- Main Content Area -->
<div class="mushroom-temple-content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        {% include mushroom-temple-lightbox/toggle.html %}
        {% include mushroom-temple-lightbox/video-preview.html %}
      </div>
    </div>
  </div>
</div>

<!-- Page specific Script -->
<script src="{{ '/assets/js/mushroom-temple-lightbox.js' | relative_url }}"></script>
