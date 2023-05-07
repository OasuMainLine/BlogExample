export function getRandomPost() {
	const INTROS = [
		"Let's",
		"How to",
		"It's time to",
		"Hey, ",
		"In my opinion we should",
	];
	const VERBS = ["make", "prepare", "watch", "enjoy"];
	const NOUNS = [
		"cake",
		"blogs",
		"videos",
		"origami",
		"apps",
		"trees",
		"water-powered cyborg suits for dogs",
	];

	const title = `${INTROS[Math.floor(Math.random() * INTROS.length)]} ${
		VERBS[Math.floor(Math.random() * VERBS.length)]
	} ${NOUNS[Math.floor(Math.random() * NOUNS.length)]}`;

	const date = new Date(Date.now() - Math.floor(Math.random() * 1000000000));

	return { title, date };
}
