const frontEndEl = document.querySelector(".front-end");
const backEndEl = document.querySelector(".back-end");
const fullStackEl = document.querySelector(".full-stack");

frontEndEl.addEventListener("mouseover", function () {
  document.querySelector(".tech-list-front").innerHTML = `<ul>
    <li>HTML5</li>
    <li>CSS3 / Bootstrap</li>
    <li>JavaScript / jQuery</li>
    <li>React / Material UI</li>
  </ul>`;
});

frontEndEl.addEventListener("mouseout", function () {
  document.querySelector(".tech-list-front").innerHTML = "";
});

backEndEl.addEventListener("mouseover", function () {
  document.querySelector(".tech-list-back").innerHTML = `<ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>mySQL / Sequelize</li>
    <li>mongoDB / Mongoose</li>
  </ul>`;
});

backEndEl.addEventListener("mouseout", function () {
  document.querySelector(".tech-list-back").innerHTML = "";
});

fullStackEl.addEventListener("mouseover", function () {
  document.querySelector(".tech-list-full").innerHTML = `<ul>
    <li>Rest API's</li>
    <li>PWA</li>
    <li>MERN Stack</li>
    <li>Accessiblity</li>
  </ul>`;
});

fullStackEl.addEventListener("mouseout", function () {
  document.querySelector(".tech-list-full").innerHTML = "";
});

const feedbackEl = document.querySelector(".feedback-list");

feedbackEl.textContent = feedback.join(" - ");

// document.addEventListener("DOMContentLoaded", function () {
//   //set DOM variables
//   var realContent = document.querySelector("#feedback");

//   //set scrolling variables
//   var scrollDelta = 2;
//   var scrollOffset = -1000;

//set offset variables
//   var offsetTopRealContent = realContent.offsetTop;
//   var realContentHeight = realContent.offsetHeight;
//   var offsetBottomRealContent = offsetTopRealContent + realContentHeight;

//   console.log(offsetTopRealContent);
//   console.log(realContentHeight);

//   window.addEventListener("wheel", function () {
//     var currentTop = window.scrollTop;
//     console.log(currentTop);

//     if (
//       currentTop >= offsetTopRealContent + scrollOffset &&
//       currentTop <= offsetBottomRealContent
//     ) {
//       // requestAnimationFrame
//       titleAnimation(currentTop);
//     }
//   });

//   function titleAnimation(currentTop) {
//     var transformNegativeTranslate =
//       "translate(-" + currentTop / scrollDelta + "px, 0)";
//     var transformNegativeFasterTranslate =
//       "translate(-" + currentTop / (scrollDelta + 2) + "px, 0)";
//     //transformPositiveTranslate = "translate(+" + currentTop/scrollDelta + "px, 0)";

//     realContent.css({
//       "-moz-transform": transformNegativeFasterTranslate,
//       "-webkit-transform": transformNegativeFasterTranslate,
//     });
//     // $titleBackMedia.css({"-moz-transform" : transformNegativeTranslate, "-webkit-transform" : transformNegativeTranslate});
//   }
// });
