import { createEl } from "../js/utils.js";

export const ImagePosterComponent = (content) => {
    const wrapper = createEl("a");
    wrapper.classList.add('image-poster__wrapper');

    const ImagePoster = createEl("div");
    const Image = createEl("img");
    const ImageTitle = createEl("h2");
    const ImageSubscription = createEl("span");

    ImagePoster.classList.add("image-poster");
    Image.classList.add("image-poster__img");
    ImageTitle.classList.add("image-poster__title");
    ImageSubscription.classList.add("image-poster__subscription");

    Image.style.backgroundImage = `url(${content.img})`;
    ImageTitle.textContent = content.title;
    ImageSubscription.textContent = content.subscriptions;

    ImagePoster.appendChild(Image);
    ImagePoster.appendChild(ImageTitle);
    ImagePoster.appendChild(ImageSubscription);
    wrapper.appendChild(ImagePoster);

    return wrapper;
}