import { bohemia } from "./assets/books.js";
const bookName = document.getElementById("book-name");
const chapterNumber = document.getElementById("chapter-number");
const chunkContent = document.getElementById("chunk-content");
const bookContent = document.getElementById("book-content");

function moveThroughLines(line) {
  const words = line.split(" ");
}

function chapterToLines(chapter) {
  return chapter
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length !== 0);
}

function loadBook() {
  const chapters = Object.values(bohemia[1]);
  chapters.forEach((chapter) => {
    const lines = chapterToLines(chapter);
    console.log(lines);
  });
}

loadBook();
