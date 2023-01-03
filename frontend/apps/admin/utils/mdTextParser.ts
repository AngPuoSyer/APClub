import { marked } from "marked";

export const mdTextParser = (mdString: string) => {
  const htmlString = marked(mdString);
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const walker = document.createTreeWalker(doc, NodeFilter.SHOW_TEXT);

  const textList = [];
  let currentNode = walker.currentNode;

  while (currentNode) {
    textList.push(currentNode.textContent);
    currentNode = walker.nextNode() as Node;
  }

  return textList.filter((a) => !!a && !["\n", "\t"].includes(a)).join(" ");
};
