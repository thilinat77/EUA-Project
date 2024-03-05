const feedbackC = document.querySelector(".feedback");
const addComment = document.querySelector(".feedback_comment");
const ratings = document.querySelector(".feedback_ratings");
const rating = document.querySelectorAll(".feedback_rating");
const notice = document.querySelector(".feedback_notice");
const noticeContainer = document.querySelector(".feedback-n");

ratings.addEventListener("click", function (e) {
	const clicked = e.target.closest(".feedback_rating");
	console.log(clicked);
	if (!clicked) return;

	rating.forEach((r) => r.classList.remove("rating_active"));
	clicked.classList.add("rating_active");

	const data = clicked.dataset.rate;
	const rateEmoji = clicked.textContent.split(" ")[0];
	const rateText = clicked.textContent.split(" ")[1];
	console.log(rateEmoji);

	noticeContainer.innerHTML = "";
	const html = `<section class="feedback_notice">
				<p> ${
					data < 3
						? `Sorry to heard that ${rateEmoji}! Thank you for the feedback `
						: `${rateText}! Thank you ${rateEmoji}`
				} </p>
			
	
			</section>`;

	noticeContainer.insertAdjacentHTML("afterbegin", html);
});
