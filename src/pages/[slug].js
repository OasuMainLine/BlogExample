import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import React from "react";
import ReactMarkdown from "react-markdown";

export async function getStaticProps(ctx) {
	const slug = ctx.params.slug;
	const article = getArticleBySlug(slug);
	if (article == undefined) {
		return { notFound: true };
	}
	return {
		props: {
			metadata: { ...article.metadata, date: article.metadata.date.toJSON() },
			content: article.content,
		},
	};
}
export async function getStaticPaths() {
	const slugs = getAllArticles().map(({ metadata }) => ({
		params: { slug: metadata.slug },
	}));

	return {
		paths: slugs,
		fallback: false,
	};
}
export default function Article({ metadata, content }) {
	const date = new Date(metadata.date);
	const day = date.toLocaleDateString("en-US", { day: "numeric" });
	const month = date.toLocaleDateString("en-US", { month: "short" });
	const year = date.toLocaleDateString("en-US", { year: "numeric" });
	return (
		<main className="min-w-screen w-full min-h-screen h-full grid place-content-center">
			<div className="min-w-[50vh] h-fit grid grid-cols-1 mt-32">
				<span className="w-16 h-16 bg-slate-500 rounded-full" />
				<article className="mt-20">
					<div id="article-header" className="flex flex-col">
						<h1 className="text-2xl">{metadata.title}</h1>
						<div className="flex gap-6 text-gray-500 text-md">
							<p>{`${month} ${day}, ${year}`}</p>
							<p>{metadata.category}</p>
						</div>
					</div>
					<ReactMarkdown
						children={content}
						className="max-w-prose mt-12 mb-10"
					/>
				</article>
			</div>
		</main>
	);
}
