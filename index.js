const ONES = [
	"",
	"Bir",
	"İki",
	"Üç",
	"Dört",
	"Beş",
	"Altı",
	"Yedi",
	"Sekiz",
	"Dokuz",
];
const TENS = [
	"",
	"On",
	"Yirmi",
	"Otuz",
	"Kırk",
	"Elli",
	"Altmış",
	"Yetmiş",
	"Seksen",
	"Doksan",
];

const EXPONENTS = [
	"",
	"Bin",
	"Milyon",
	"Milyar",
	"Trilyon",
	"Katrilyon",
	"Kentilyon",
	"Sekstilyon",
	"Septilyon",
];
const convert = (number) => {
	if (typeof number === "string") {
		number = number.replace(/[, ]/g, "");
	}
	if (
		(typeof number === "number" && number > Number.MAX_SAFE_INTEGER) ||
		number < Number.MIN_SAFE_INTEGER
	) {
		throw `The numbers greater than MAX SAFE INTEGER or lower than MIN SAFE INTEGER must be used as a string`;
	}
	if (isNaN(Number(number))) {
		throw new Error("Please enter a valid number or a convertible number");
	}
	if (typeof number === "number") {
		number = String(parseInt(number));
	}
	if (parseInt(number) === 0 || parseInt(number) === "-0") {
		return "Sıfır";
	}

	let symbol = "";
	if (number.charAt(0) === "-") {
		symbol = "Eksi";
		number = number.substring(1, number.length);
	} else if (number.charAt(0) === "+") {
		number = number.substring(1, number.length);
	}

	let triplets = [];
	let tripletCount = Math.floor(number.length / 3);
	while (tripletCount > 0) {
		triplets.unshift(number.slice(-3));
		number = number.substring(0, number.length - 3);

		tripletCount -= 1;
	}
	if (number.length) {
		triplets.unshift("0".repeat(3 - number.length) + String(number));
	}

	let string = "";
	for (let i = triplets.length - 1; i >= 0; i--) {
		const currentTriplet = triplets[i];

		let tempString = "";
		for (let j = 0; j < 3; j++) {
			if (j == 0 && currentTriplet[0] != 0) {
				tempString +=
					currentTriplet[0] > 1 ? ONES[currentTriplet[0]] + " Yüz " : " Yüz ";
			} else if (j == 1 && currentTriplet[1] != 0) {
				tempString += TENS[currentTriplet[1]];
			} else if (j == 2 && currentTriplet[2] != 0) {
				if (currentTriplet[0] == 0 && currentTriplet[1] == 0) {
					if (i == triplets.length - 2) {
						tempString +=
							currentTriplet[2] > 1 ? " " + ONES[currentTriplet[2]] : "";
					} else {
						tempString += " " + ONES[currentTriplet[2]];
					}
				} else {
					tempString += " " + ONES[currentTriplet[2]];
				}
			}
		}
		if (currentTriplet != "000") {
			tempString += " " + EXPONENTS[Math.abs(i - triplets.length + 1)];
		}
		string = tempString + " " + string;
	}

	return symbol + string.replace(/\s+/g, " ");
};

module.exports = convert;
