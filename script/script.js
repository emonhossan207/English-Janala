const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // promise
     .then((res) => res.json())
     .then((json) => displayLesson(json.data));
};
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
   fetch(url)
   .then(res => res.json())
   .then(data => console.log(data));

};

const displayLevelWord = (word) =>{
    const wordContainer = document.getElementById("word-container");
    // wordContainer.innerHTML = "";

    words.forEach((word) => {
        console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
        <p>cat</p>
        `;
        wordContainer.append(card);
    });


};

const displayLesson = (lessons) => {

   
    // 1. get the container & empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // 2. get into evey lessons
    for (let lesson of lessons) {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `<button onclick="loadLevelWord(${lesson.level_no})" class=" btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
            </button>`;
            levelContainer.append(btnDiv);
    }

   
};

loadLessons();