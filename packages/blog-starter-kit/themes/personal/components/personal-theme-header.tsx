import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { PublicationNavbarItem } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { ToggleTheme } from './toggle-theme';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

// export const PersonalHeader = () => {
//     const { publication } = useAppContext();

//     const navbarItems = publication.preferences.navbarItems.filter(hasUrl);
//     const visibleItems = navbarItems.slice(0, 2);
//     const hiddenItems = navbarItems.slice(2);

//     const navList = (
//         <ul className="flex list-none flex-row items-center gap-4 text-xs font-bold uppercase tracking-tight text-neutral-600 dark:text-neutral-300">
//             {/* Added an explicit link back to your portfolio */}
//             <li>
//                 <a href="https://sourishchakraborty.com" className="text-[#007acc] hover:underline">
//                     ← Portfolio
//                 </a>
//             </li>
//             {visibleItems.map((item) => (
//                 <li key={item.url}>
//                     <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
//                         {item.label}
//                     </a>
//                 </li>
//             ))}

//             {hiddenItems.length > 0 && (
//                 <li>
//                     <DropdownMenu.Root>
//                         <DropdownMenu.Trigger asChild>
//                             <button className="hover:underline">More</button>
//                         </DropdownMenu.Trigger>
//                         <DropdownMenu.Portal>
//                             <DropdownMenu.Content
//                                 className="z-50 flex flex-col items-stretch gap-1 rounded-lg border bg-white text-xs font-semibold uppercase tracking-tight text-neutral-600 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
//                                 sideOffset={5}
//                                 align="end"
//                             >
//                                 {hiddenItems.map((item) => (
//                                     <DropdownMenu.Item asChild key={item.url}>
//                                         <a
//                                             href={item.url}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="block w-full p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800"
//                                         >
//                                             {item.label}
//                                         </a>
//                                     </DropdownMenu.Item>
//                                 ))}
//                             </DropdownMenu.Content>
//                         </DropdownMenu.Portal>
//                     </DropdownMenu.Root>
//                 </li>
//             )}
//         </ul>
//     );

//     return (
//         <header className="mb-12 border-b border-neutral-100 py-10 dark:border-neutral-800">
//             <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
//                 {/* Larger, Professional Profile Image */}
//                 <Link href="/" className="shrink-0">
//                     <img
//                         className="h-24 w-24 rounded-full border-2 border-neutral-200 object-cover shadow-sm dark:border-neutral-700"
//                         alt={publication.author.name}
//                         src={resizeImage(publication.author.profilePicture, {
//                             w: 400,
//                             h: 400,
//                             c: 'face',
//                         })}
//                     />
//                 </Link>

//                 <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
//                     <div className="flex w-full items-center justify-between">
//                         <Link href="/" className="group">
//                             <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
//                                 Sourish <span className="text-[#007acc]">Chakraborty</span>
//                             </h1>
//                         </Link>
//                         {/* Desktop Theme Toggle */}
//                         <div className="hidden md:block">
//                             <ToggleTheme />
//                         </div>
//                     </div>

//                     <p className="mt-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
//                         AI Engineering & Modern Data Platforms | Cloud-native Architecture
//                     </p>

//                     <div className="mt-6 flex w-full flex-row items-center justify-between gap-4 border-t border-neutral-50 pt-4 dark:border-neutral-900">
//                         <nav>{navList}</nav>
//                         {/* Mobile Theme Toggle */}
//                         <div className="md:hidden">
//                             <ToggleTheme />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

export const PersonalHeader = () => {
	// FIX: Extract publication from the context here
	const { publication } = useAppContext();
	return (
		<header className="rounded-xl border border-slate-800 bg-navy-900 p-8 shadow-2xl mb-12">
			<div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
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
						Sourish <span className="text-accent">Chakraborty</span>
					</h1>
					<p className="mt-3 text-sm font-medium leading-relaxed text-slate-400 max-w-2xl">
						AI Engineering & Modern Data Platforms | LLM Integration | ML Ops |
						Cloud-native Architecture | Platform Engineering
					</p>
					<nav className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
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
					</nav>
				</div>
			</div>
		</header>
	);
};
