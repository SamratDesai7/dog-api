let img = document.getElementById("img");
let errorModal = document.getElementById("errorModal");
async function dogimg() {
  try {
    let url = "https://dog.ceo/api/breeds/image/random";
    let res = await axios.get(url);
    img.setAttribute("src", res.data.message);
  } catch (err) {
    console.log(err);

    errorModal.style.visibility = "visible";
  }
}
e = () => {
  errorModal.style.visibility = "hidden";
};
