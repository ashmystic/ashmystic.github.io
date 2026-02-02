---
layout: default
title: Mushroom Temple Meditation Portal
permalink: /mushroom-temple-lightbox/
day_video_url: "https://youtu.be/lmtunWbJhPM?si=73aLI5wM_VfVaZmL"
night_video_url: "https://youtu.be/Nc-yLCf0h_Q?si=psddcbDLSYKF22ts"
day_thumbnail: "/assets/images/mushroom_temple-lightbox/mushroom_temple_lightbox_day.jpg"
night_thumbnail: "/assets/images/mushroom_temple-lightbox/mushroom_temple_lightbox_night.jpg"
---

<!-- Custom CSS for this specific page features -->
<link rel="stylesheet" href="{{ '/assets/css/mushroom-temple-lightbox.css' | relative_url }}">

<!-- Page Header (replacing standard Hero) -->

{% include mushroom-temple-lightbox/hero.html %}

<!-- Main Content Area -->
<div class="mushroom-temple-content">
  <div class="container-fluid">
    <br>
    <br>
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6" style="text-align: center;">
        <h4 style="font-style: italic; line-height: 1.5;">Choose a time of day to experience the temple’s unique light and soundscape, then click below to begin your journey.</h4>
      </div>
      <div class="col-sm-3"></div>
    </div>
    <div class="row">
      <div class="col-sm-12" style="text-align: center;">
        {% include mushroom-temple-lightbox/toggle.html %}
        {% include mushroom-temple-lightbox/video-preview.html %}
      </div>
    </div>

    <br>
    <br>
    <!-- About Section-->
    <div class="row">
      <div class="col-sm-12" style="text-align: center;">
        <h3>About This Piece</h3>
        <div style="display: inline-block; max-width: 600px; text-align: center;">
          <p>This 3D paper-cut light box combines watercolor art with illuminated layers to create depth and atmosphere. Each layer reveals sacred geometry, mushrooms, and natural elements surrounding a mystical temple at the center.</p>
          <p>Use these videos for meditation, relaxation, or peaceful background ambiance.</p>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- Page specific Script -->
<script src="{{ '/assets/js/mushroom-temple-lightbox.js' | relative_url }}"></script>
