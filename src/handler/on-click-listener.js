export const onClickListener = (targetTag, callback) => {
  targetTag.addEventListener("click", (evt) => {
    callback(evt);
  });
};
