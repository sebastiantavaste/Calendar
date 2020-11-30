const button = document.querySelector(".btn-start");
const calenderContainer = document.querySelector(".container");

const calenderMonths = 24;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url("${path}")`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#333";
}

const createCalender = ()=> {
    console.log("test");

    for(let i = 0; i < calenderMonths; i++){
        const calenderDoor = document.createElement("div");
        calenderDoor.classList.add("image");
        calenderDoor.style.gridArea = "door" + (i + 1);

        const calenderDoorText = document.createElement("div");
        calenderDoorText.classList.add("text");

        calenderDoor.appendChild(calenderDoorText);
        calenderContainer.appendChild(calenderDoor);

        let picNumber = i + 1;
        let picPath = `./img/pic${picNumber}.jpg`;
        console.log(picPath);

        calenderDoorText.addEventListener("click", openDoor.bind(null, picPath));
    }
}

button.addEventListener("click", createCalender)
