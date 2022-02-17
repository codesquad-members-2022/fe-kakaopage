import { createEl } from "../js/utils.js";

export const ImagePosterComponent = (contents) => {
    const wrapper = createEl("div");
    wrapper.classList.add('image-poster__wrapper');

    for(let i = 0; i < contents.length; i++) {
        const ImagePoster = createEl("div");
        const Image = createEl("img");
        const ImageTitle = createEl("h2");
        const ImageSubscription = createEl("span");

        ImagePoster.classList.add("image-poster");
        Image.classList.add("image-poster__img");
        ImageTitle.classList.add("image-poster__title");
        ImageSubscription.classList.add("image-poster__subscription");

        Image.style.backgroundImage = `url(${contents[i].img})`;
        ImageTitle.textContent = contents[i].title;
        ImageSubscription.textContent = contents[i].subscriptions;

        ImagePoster.appendChild(Image);
        ImagePoster.appendChild(ImageTitle);
        ImagePoster.appendChild(ImageSubscription);
        wrapper.appendChild(ImagePoster);
    }

    return wrapper.outerHTML;
}