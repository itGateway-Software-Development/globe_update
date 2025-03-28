<template>
    <div class="loading-container">
      <div class="flex flex-col content-center items-center">
        <div class="loader"></div>
        <div class="loader-2"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  .loading-container {
    background: #ededed;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .loader {
    position: relative;
    width: 120px;
    height: 120px;
    /* background-color: rgba(0, 0, 0, 0.5); */
    overflow: hidden;
  }
  .loader:after {
    content: "";
    position: absolute;
    inset: 10px;
    margin: auto;
    background-image: url("@/assets/images/logo.png");
    background-size: 100%;
  }
  
  /* HTML: <div class="loader"></div> */
  /* HTML: <div class="loader"></div> */
  .loader-2 {
    width: 60px;
    aspect-ratio: 4;
    --_g: no-repeat radial-gradient(circle closest-side, #23b5de 90%, #0000);
    background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
    background-size: calc(100% / 3) 100%;
    animation: l7 1s infinite linear;
  }
  @keyframes l7 {
    33% {
      background-size: calc(100% / 3) 0%, calc(100% / 3) 100%, calc(100% / 3) 100%;
    }
    50% {
      background-size: calc(100% / 3) 100%, calc(100% / 3) 0%, calc(100% / 3) 100%;
    }
    66% {
      background-size: calc(100% / 3) 100%, calc(100% / 3) 100%, calc(100% / 3) 0%;
    }
  }
  /* .loader:before {
    content: "";
    position: absolute;
    inset: -15px;
    margin: auto;
    background: #23b5de;
    animation: diamondLoader 2s linear infinite;
  } */
  @keyframes diamondLoader {
    0%,
    10% {
      transform: translate(-64px, -64px) rotate(-45deg);
    }
    90%,
    100% {
      transform: translate(0px, 0px) rotate(-45deg);
    }
  }
  </style>
  