  // get the element with id "level"
  let element = document.getElementById("level");

  let levelCount = 1; // start from the element itself
  let parent = element.parentElement;

  // loop until we reach the root <html> element
  while (parent) {
    levelCount++;          // increment for each parent
    parent = parent.parentElement;