import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { PublicationNavbarItem } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { ToggleTheme } from './toggle-theme';
import { Bell } from 'lucide-react';
import { SubscribeModal } from './subscribe-modal';
import { useState } from 'react';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

interface PostHeaderProps {
	onSubscribeClick: () => void;
	title: string;
}

export const PersonalHeader = ({ onSubscribeClick }: { onSubscribeClick: () => void }) => {

	// FIX: Extract publication from the context here
	const { publication } = useAppContext();
	return (
		<header className="rounded-xl border border-slate-800 bg-navy-900 p-8 shadow-2xl mb-12">
			<div className="flex flex-col items-center gap-2 md:flex-row md:items-end">
				{/* Glowing Profile Image Wrapper */}
				<div className="relative shrink-0">
					<div className="absolute -inset-1 rounded-lg bg-accent opacity-25 blur"></div>
					<img
						className="relative h-32 w-32 rounded-lg border-2 border-slate-700 object-cover"
						alt={publication.author.name}
						src={resizeImage(publication.author.profilePicture ?? '', { w: 400, h: 400, c: 'face' })}
					/>
				</div>

				<div className="flex-1 text-center md:text-left">
					<h1 className="text-4xl font-extrabold tracking-tight text-white">
						Sourish Chakraborty{/*<span className="text-accent"></span> */}
					</h1>
					<p className="mt-3 text-sm font-medium leading-relaxed text-slate-400 max-w-2xl">
						AI Engineering & Modern Data Platforms | Cloud-native Architecture | Platform Engineering
					</p>
					<nav className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
						{/* Back to Portfolio Button */}
						<a
							href="https://sourishchakraborty.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800/40 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#38bdf8] transition-all hover:bg-slate-700 hover:border-[#38bdf8]/50"
						>
							Main Portfolio
						</a>

						{/* Blog Home Button */}
						<Link
							href="/"
							className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800/40 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 transition-all hover:bg-slate-700 hover:text-white"
						>
							🏠 Blog Home
						</Link>

						{/* GitHub Repo Button */}
						<a
							href="https://github.com/sochaty?tab=repositories"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800/40 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 transition-all hover:bg-slate-700 hover:text-white"
						>
							📂 GitHub Repos
						</a>
						{/* 4. Subscribe Button - Main Action */}
						<button
							onClick={onSubscribeClick}
							className="flex items-center gap-2 rounded-xl bg-[#38bdf8] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#020617] transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] active:scale-95"
						>
							<Bell size={16} />
							<span className="hidden sm:inline">Subscribe</span>
						</button>
					</nav>
				</div>
			</div>
		</header>
	);
};
