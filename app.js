<script>

// MTN Category  name
		var category1 = "Category 1";
		var category2 = "Category 2";

		// Function to change the category name
		function editNames() {
			category1 = prompt("Change category1 name");
			category2 = prompt("Change category2 name");

			document.querySelector("p.Category1")
							.innerHTML = category1;
							
			document.querySelector("p.Category2")
							.innerHTML = category2;
		}

		// Function to roll the dice
		function rollTheDice() {
			setTimeout(function () {
				var randomNumber1 = Math.floor(Math.random() * 6) + 1;
				var randomNumber2 = Math.floor(Math.random() * 6) + 1;

				document.querySelector(".img1").setAttribute("src",
					"dice" + randomNumber1 + ".png");

				document.querySelector(".img2").setAttribute("src",
					"dice" + randomNumber2 + ".png");

				if (randomNumber1 === randomNumber2) {
					document.querySelector("h1").innerHTML = "Draw!";
				}

				else if (randomNumber1 < randomNumber2) {
					document.querySelector("h1").innerHTML
						= (category2 + " WINS!");
				}

				else {
					document.querySelector("h1").innerHTML
						= (category1 + " WINS!");
				}
			}, 1000000)
		}
	</script>
</body>

</html>