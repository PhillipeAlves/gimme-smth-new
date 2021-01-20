export const generatePageRange = (currentPage, lastPage) => {
  const delta = 2;
  const range = [];
  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(lastPage - 1, currentPage + delta);
    i += 1
  ) {
    range.push(i);
  }
  if (currentPage - delta > 2) {
    range.unshift('...');
  }
  if (currentPage + delta < lastPage - 1) {
    range.push('...');
  }
  range.unshift(1);
  if (lastPage !== 1) range.push(lastPage);

  return range;
};

export const limitTextLength = (text, len) => {
  if (text.length > len && text.length > 0) {
    let shortText = text + ' ';
    shortText = text.substr(0, len);
    shortText = text.substr(0, shortText.lastIndexOf(' '));
    shortText = shortText.length > 0 ? shortText : text.substr(0, len);
    return shortText + '...';
  }
  return text;
};
