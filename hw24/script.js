const btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
  if (!event.target.href.includes("https")) {
    event.preventDefault();
    let href = event.target.href;
    let ind = href.lastIndexOf('/');
    let correctHref = href.slice(ind + 1);
    event.target.href = `https://${correctHref}`
  }
});
