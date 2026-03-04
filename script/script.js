const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // promise
     .then((res) => res.json())
     .then((json) => displayLesson(json.data));
};

const displayLesson = (lessons) => {

   
    // 1. get the container & empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // 2. get into evey lessons
    for (let lesson of lessons) {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `<button class=" btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
            </button>`;
            levelContainer.append(btnDiv);
    }

   
};

loadLessons();