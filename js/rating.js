

//=========================RATING======================================================================================================================================================================================================================================================================
//=========================ЕСЛИ НУЖЕН РЕЙТИНГ, НА КОТОРЫ НЕЛЬЗЯ НАЖАТЬ======================================================================================================================================================================================================================================================================
/*
const ratings = document.querySelectorAll(".rating");
if (ratings.length > 0) {
	initRatings();
	
	
	//Основная функция
	function initRatings() {
		let ratingActive, ratingValue;
	
		for (let index = 0; index < ratings.length; index++) {
			const rating = ratings[index];
			initRating(rating);
		}
	}
	//Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);
	
		setRatingActiveWidth();
	}
	//Инициализируем переменные
	function initRatingVars(rating) {
		ratingActive = rating.querySelector(".rating__active");
		ratingValue = rating.querySelector(".rating__value");
	}
	//Измеряем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
}
*/
//==================================ИЛИ ТОТ, С КОТОРЫМ МОЖНО ВЗАИМОДЕЙСТВОВАТЬ=============================================================================================================================================================================================================================================================
const ratings = document.querySelectorAll(".rating");
if (ratings.length > 0) {
	initRatings();


	//Основная функция
	function initRatings() {
		let ratingActive, ratingValue;

		for (let index = 0; index < ratings.length; index++) {
			const rating = ratings[index];
			initRating(rating);
		}
	}
	//Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();
		if (rating.classList.contains("rating__set")) {
			setRating(rating);
		}
	}
	//Инициализируем переменные
	function initRatingVars(rating) {
		ratingActive = rating.querySelector(".rating__active");
		ratingValue = rating.querySelector(".rating__value");
	}
	//Измеряем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
	//Возможость указывать оценку
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll(".rating__item");
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				//Обновляем переменные
				initRatingVars(rating);
				// Обновляем активные звёзды
				setRatingActiveWidth(ratingItem.value)

			})
			ratingItem.addEventListener("mouseleave", function (e) {
				setRatingActiveWidth()

			})
			ratingItem.addEventListener("click", function (e) {
				//Обновляем переменные
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					//"отправить" на сервер
					setRatingValue(ratingItem.value, rating)
				} else {
					//Отобразить указанную оценку

					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth()
				}
			})
		}
	}
}









	//=========================HTML======================================================================================================================================================================================================================================================================
/*
			<div class="rating rating__set">
												<div class="rating__body">
													<div class="rating__active"></div>
													<div class="rating__items"> <input id="rating_1" name="rating"
															class="rating__item" type="radio" value="1" name="rating">
														<input id="rating_2" name="rating" class="rating__item" type="radio" value="2"
															name="rating">
														<input id="rating_3" name="rating" class="rating__item" type="radio" value="3"
															name="rating">
														<input id="rating_4" name="rating" class="rating__item" type="radio" value="4"
															name="rating">
														<input id="rating_5" name="rating" class="rating__item" type="radio" value="5"
															name="rating">
													</div>
												</div>
												<div class="rating__value">
													3.6
												</div>
											</div>
*/

	//=====================================CSS==========================================================================================================================================================================================================================================================
/*
.rating {
	display: flex;
	align-items: flex-end;
	font-size: 24px;
	line-height: 1;
	
	
	
	// .rating__body
	
	&__body {
		position: relative;
	
		&:before {
			content: '★★★★★';
			display: block;
		}
	}
	
	// .rating__active
	
	&__active {
		position: absolute;
		top: 0;
		left: 0;
		width: 0%;
		height: 100%;
		overflow: hidden;
	
		&:before {
			content: '★★★★★';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			color: #eeee36;
	
		}
	}
	
	// .rating__items
	
	&__items {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	
	}
	
	// .rating__item
	
	&__item {
		flex: 0 0 20%;
		height: 100%;
		opacity: 0;
	}
	
	&__value {
		font-size: 50%;
		line-height: 1;
		margin: 0px 10px 0px 4px;
	}
}
*/




