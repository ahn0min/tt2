// const reviewTwits = {};

const openGraphs = {
  title: "",
  image: "",
};

// const IFrame = () => {
const $reviewTwitThread = document.getElementById("review_twits_thread");
const $iframe = document.createElement("iframe");

//
const queryParams = new URLSearchParams(window.location.search);
const projectName = queryParams.get("projectName");

const attributes = {
  id: "reviewtwits",
  src: `https://reviewtwits.shop/review?projectName=${projectName}&productURL=${window.location.href}&title=${openGraphs.title}&image=${openGraphs.image}`,
  width: "100%",
  height: "700px",
  // ...iframeAttributes,
};

// set $iframe
$iframe.title = "reviewTwits";

Object.entries(attributes).forEach(([key, attribute]) =>
  $iframe.setAttribute({key, attribute})
);

$reviewTwitThread.appendChild($iframe);
// };
