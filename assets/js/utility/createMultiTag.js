export function createMultiTag(tag, list,id, content){
  let subContainer= document.createDocumentFragment();
  const target = document.querySelector(id);

  list.forEach(item => {
    const newTag = document.createElement(tag);
    newTag.innerHTML = content(item);
    subContainer.appendChild(newTag);
  });
  target.append(subContainer);
}

function createTag() {
  
}