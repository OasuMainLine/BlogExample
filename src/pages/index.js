import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

export const getStaticProps = async (ctx) => {
	const articles = getAllArticles();

	const formattedArticles = articles.map((article) => ({
		metadata: {
			...article.metadata,
			date: article.metadata.date.toJSON(),
		},
		content: article.content,
	}));
	return {
		props: {
			articles: formattedArticles,
		},
	};
};

export default function Home({ articles }) {
	return (
		<main className="grid grid-cols-1 m-auto w-screen h-screen place-items-center font-sans">
			<div className="flex flex-col gap-5 w-1/3">
				<span className="w-40 h-40 rounded-full bg-slate-500"></span>
				<h1 className="text-5xl font-bold my-8">Hey, World</h1>

				{articles.map(({ metadata }) => (
					<ArticleCard
						key={metadata.title}
						slug={metadata.slug}
						title={metadata.title}
						date={new Date(metadata.date)}
					/>
				))}
			</div>
		</main>
	);
}
