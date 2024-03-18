//constants
// Render images
const urls = [
  {
    link: "https://images.unsplash.com/photo-1606503809729-40646b716a36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3VhdGVtYWxhfGVufDB8fDB8fHww",
    alt: "Atitlan Lake photo",
  },
  {
    link: "https://images.unsplash.com/photo-1528543010705-e7e75169b717?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3VhdGVtYWxhfGVufDB8fDB8fHww",
    alt: "Atitlan lake photo from a dock",
  },
  {
    link: "https://images.unsplash.com/photo-1508035460735-91088c495500?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEd1YXRlbWFsYXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Tikal, Petén photo",
  },
  {
    link: "https://images.unsplash.com/photo-1584908917822-6799d69a72cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fEd1YXRlbWFsYXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Antigua Guatemala photo",
  },
];
const container = document.querySelector(
  ".container-lg.themed-container.text-center"
);
const rowTemplate = document.querySelector("#rowTemplate");
// View mode
const expandIcons = document.querySelectorAll(".fa-solid.fa-expand");

// Render 20 images
for (let i = 0; i < 5; i++) {
  // Render a single row
  const rowClone = rowTemplate.content.cloneNode(true);
  const imageLabels = rowClone.querySelectorAll(".image-label");

  // Set the image URLs for the labels
  imageLabels.forEach((label, index) => {
    if (index < urls.length) {
      const imgUrl = urls[index].link;
      label.style.backgroundImage = `url(${imgUrl})`;
      label.setAttribute("aria-label", urls[index].alt);
    }
  });

  // Append the row to the container
  container.appendChild(rowClone);
}

// View mode logic
document.addEventListener("DOMContentLoaded", function () {
  const imageViewSection = document.querySelector(".image-view");
  const imageViewImage = document.querySelector(".image-view__image");
  const closeButton = document.querySelector(".image-view__close-button");
  const expandIcons = document.querySelectorAll(".fa-solid.fa-expand");

  expandIcons.forEach((icon) => {
    icon.addEventListener("click", function (evt) {
      const parentColumn = evt.target.closest(".col-md-3.themed-grid-col");
      const imageLabel = parentColumn.querySelector(".image-label");
      const clickedImageSrc = imageLabel.style.backgroundImage
        .slice(4, -1)
        .replace(/"/g, "");

      imageViewImage.src = clickedImageSrc;
      imageViewSection.classList.toggle("image-view_active");
    });
  });

  closeButton.addEventListener("click", function () {
    imageViewSection.classList.remove("image-view_active");
  });
});
