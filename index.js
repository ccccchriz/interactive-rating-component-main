class Rating {
  constructor() {
    this.rating = -1;
  }

  setScore = (event) => {
    this.rating = parseInt(event.target.id);
  };

  submitScore = () => {
    if (this.rating == -1) return console.log("Please select a score");

    document.getElementsByClassName("user_rating")[0].innerText = this.rating;

    rating_div.classList.replace("visible", "hidden");
    thank_you_div.classList.replace("hidden", "visible");

    //do stuff with rating
    console.log(this.rating);

    //reset rating
    this.rating = -1;
  };
}

const rating = new Rating();

const rating_div = document.getElementsByClassName("rating")[0];
const thank_you_div = document.getElementsByClassName("thank_you")[0];
const scores = document.getElementsByClassName("score_num");

document
  .getElementsByClassName("submit_button")[0]
  .addEventListener("click", rating.submitScore);

for (let score of scores) {
  score.addEventListener("click", rating.setScore);
  score.addEventListener(
    "keypress",
    (e) => e.key == "Enter" && rating.submitScore()
  );
}
