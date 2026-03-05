import Link from 'next/link';
import { PostFragment } from '../generated/graphql';

// 1. Define the interface to include 'context'
interface MinimalPostsProps {
	posts: PostFragment[];
	context?: string; // Adding context as an optional prop to satisfy TS(2322)
}

export const MinimalPosts = ({ posts, context }: MinimalPostsProps) => {

	return (
		<section className="flex flex-col gap-2">
			{posts.map((post) => {
				// Format the date properly since 'date' doesn't exist on PostFragment
				const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
					month: 'short',
					day: 'numeric',
					year: 'numeric',
				});

				return (
					<article
						key={post.id}
						className="group relative rounded-xl border border-slate-800 bg-[#0f172a] p-8 transition-all hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.1)]"
					>
						<div className="mb-4 flex flex-wrap items-center justify-between gap-3">
							<span className="rounded bg-[#0ea5e9]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#38bdf8] border border-[#38bdf8]/20">
								{context === 'home' ? 'Latest Insight' : 'Technical Insight'}
							</span>
							<time className="text-xs font-medium text-slate-500">{formattedDate}</time>
						</div>

						<h2 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#38bdf8]">
							<Link href={`/${post.slug}`}>{post.title}</Link>
						</h2>

						<p className="mt-4 line-clamp-3 text-base leading-relaxed text-slate-400">
							{post.brief}
						</p>

						<div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#38bdf8]">
							Read Full Insight
							<span className="transition-transform group-hover:translate-x-1">→</span>
						</div>
					</article>
				);
			})}
		</section>
	);
};
