import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";

function readArticle(path) {
	const file = readFileSync("articles/" + path);
	const matterResult = matter(file);
	const metadata = matterResult.data;
	const content = matterResult.content;
	return {
		metadata,
		content,
	};
}

export function getAllArticles() {
	const articles_paths = readdirSync("articles");
	const articles = articles_paths.map((path) => readArticle(path));
	return articles;
}

export function getArticleBySlug(slug) {
	const articles = getAllArticles();
	return articles.find((article) => article.metadata.slug == slug);
}
