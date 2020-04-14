<template>
<client-only>
  <body class="profile-page">
    <nav class="navbar navbar-expand-lg fixed-top navbar-transparent" color-on-scroll="100">
      <div class="container">
        <div class="navbar-translate">
          <a
            class="navbar-brand"
            href="#"
            rel="tooltip"
            title
            data-placement="bottom"
            data-original-title="Designed and Coded by Creative Tim. All Rights Reserved"
          >
            <span>ME •</span> ADEFIRMANF
          </a>
          <button
            class="navbar-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navigation">
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <a>BLK•</a>
              </div>
              <div class="col-6 collapse-close text-right">
                <button
                  type="button"
                  class="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navigation"
                  aria-controls="navigation-index"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="tim-icons icon-simple-remove"></i>
                </button>
              </div>
            </div>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item p-0">
              <a
                class="nav-link"
                rel="tooltip"
                title
                data-placement="bottom"
                href="https://twitter.com/CreativeTim"
                target="_blank"
                data-original-title="Follow us on Twitter"
              >
                <i class="fab fa-twitter"></i>
                <p class="d-lg-none d-xl-none">Twitter</p>
              </a>
            </li>
            <li class="nav-item p-0">
              <a
                class="nav-link"
                rel="tooltip"
                title
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim"
                target="_blank"
                data-original-title="Like us on Facebook"
              >
                <i class="fab fa-facebook-square"></i>
                <p class="d-lg-none d-xl-none">Facebook</p>
              </a>
            </li>
            <li class="nav-item p-0">
              <a
                class="nav-link"
                rel="tooltip"
                title
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial"
                target="_blank"
                data-original-title="Follow us on Instagram"
              >
                <i class="fab fa-instagram"></i>
                <p class="d-lg-none d-xl-none">Instagram</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../index.html">Back to Kit</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://github.com/creativetimofficial/blk-design-system/issues"
              >Have an issue?</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="squares square-1"></div>
      <div class="squares square-3"></div>
      <div class="squares square-4"></div>
      <div class="wrapper">
        <div class="page-header">
          <img src="~/assets/img/path4.png" class="path" />
          <div class="container align-items-center">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <h1 class="profile-title text-left">Ade Firman Fauzi</h1>
                <h5 class="text-on-back">01</h5>
                <p class="profile-description">
                  Love Coding and Art. Several years become
                  <b>Software Engineer</b> and publish some arts into
                  <b>Pixiv</b>. Focused on
                  <b>Backend Engineer</b> with
                  <b>Node.Js</b> and
                  <b>Golang</b> tech.
                </p>
                <p>Curious about me? Teleport to this portal to see my profile</p>
                <div class="btn-wrapper profile pt-3">
                  <a
                    target="_blank"
                    href="https://github.com/adefirmanf/"
                    class="btn btn-icon btn-instagram btn-round"
                    data-toggle="tooltip"
                    data-original-title="Explore my projects"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/adefirmanf/"
                    class="btn btn-icon btn-instagram btn-round"
                    data-toggle="tooltip"
                    data-original-title="More info about me?"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/adefirmanf_98/"
                    class="btn btn-icon btn-instagram btn-round"
                    data-toggle="tooltip"
                    data-original-title="Curious about my picture"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</client-only>
</template>
<style>
.square-1 {
  height: 300px;
  width: 300px;
  background-image: url("~assets/img/square1.png");
  top: 80px;
  left: 100px;
  opacity: 0.3;
  animation-duration: 5s;
}
.square-3 {
  animation: a 5s infinite;
  height: 100px;
  width: 100px;
  opacity: 0.8;
  left: -5%;
  bottom: 0;
}
.squares.square-4 {
  animation: a 10s infinite;
  height: 100px;
  width: 100px;
  opacity: 0.9;
  right: 27%;
  top: 70%;
}
.squares {
  animation: a 5s infinite;
  background: #ba54f5;
  background: linear-gradient(0deg, #ba54f5, #e14eca);
  position: absolute;
  transition: 0.5s ease-out;
  overflow: hidden;
  border-radius: 20%;
}
.profile-page .page-header .path {
  max-width: 65%;
  right: 0;
  top: 100px;
}
.path {
  position: absolute;
  opacity: 0.02;
}
</style>