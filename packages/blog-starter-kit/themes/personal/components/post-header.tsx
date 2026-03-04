// import { User, Home, Github, Bell } from 'lucide-react';
// import Link from 'next/link';

// export const PostHeader = ({ onSubscribeClick }: { onSubscribeClick: () => void },{ title, date, readTime }: { title: string; date: string; readTime: number }) => {
//     return (
//         <nav className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#0f172a]/80 p-3 backdrop-blur-md sticky top-5 z-40 shadow-xl">
//             <div className="flex items-center gap-2">
//                 <a href="https://sourishchakraborty.com" title="Portfolio" className="p-2 text-[#38bdf8] hover:bg-slate-800 rounded-lg transition-all">
//                     <User size={20} />
//                 </a>
//                 <Link href="/" title="Blog Home" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
//                     <Home size={20} />
//                 </Link>
//                 <a href="https://github.com/sochaty" target="_blank" title="GitHub" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
//                     <Github size={20} />
//                 </a>
//             </div>

//             {/* The Main Title - Bold and White */}
//             <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
//                 {title}
//             </h1>

//             {/* Centered Metadata - Muted Slate */}
//             <div className="flex items-center gap-3 text-sm font-medium text-slate-400">
//                 <div className="flex items-center gap-1">
//                     {/* <span className="opacity-70">Published</span>
//                     <time className="text-slate-300">{date}</time> */}
//                 </div>
//                 {/* <span className="text-slate-600">•</span> */}
//                 {/* <div className="flex items-center gap-1">
//                     <span className="text-slate-300">{readTime} min read</span>
//                 </div> */}
//             </div>

//             <button 
//                 onClick={onSubscribeClick}
//                 className="flex items-center gap-2 rounded-xl bg-[#38bdf8] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#020617] hover:bg-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
//             >
//                 <Bell size={14} />
//                 Subscribe
//             </button>
//         </nav>
//     );
// };

import { User, Home, Github, Bell } from 'lucide-react';
import Link from 'next/link';

interface PostHeaderProps {
    onSubscribeClick: () => void;
    title: string;
}

// export const PostHeader = ({ onSubscribeClick, title }: PostHeaderProps) => {
//     return (
//         <nav className="sticky top-5 z-40 flex w-full items-center rounded-2xl border border-slate-800 bg-[#0f172a]/80 p-2 backdrop-blur-md shadow-xl lg:p-3">
            
//             {/* 1. LEFT SECTION: Icons spaced out slightly */}
//             <div className="flex flex-1 items-center justify-start gap-4 pl-2 md:gap-6">
//                 <a href="https://sourishchakraborty.com" title="Portfolio" className="text-[#38bdf8] transition-all hover:scale-110">
//                     <User size={20} />
//                 </a>
//                 <Link href="/" title="Blog Home" className="text-slate-400 transition-all hover:text-white hover:scale-110">
//                     <Home size={20} />
//                 </Link>
//                 <a href="https://github.com/sochaty" target="_blank" title="GitHub" className="text-slate-400 transition-all hover:text-white hover:scale-110">
//                     <Github size={20} />
//                 </a>
//             </div>

//             {/* 2. CENTER SECTION: Title as a spacer and context */}
//             <div className="hidden flex-[2] items-center justify-center px-4 lg:flex">
//                 <span className="line-clamp-1 text-xs font-bold uppercase tracking-widest text-slate-500 opacity-50">
//                     {title}
//                 </span>
//             </div>

//             {/* 3. RIGHT SECTION: Subscribe Button */}
//             <div className="flex flex-1 items-center justify-end pr-1">
//                 <button 
//                     onClick={onSubscribeClick}
//                     className="flex items-center gap-2 rounded-xl bg-[#38bdf8] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#020617] transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] md:px-6 md:py-2.5 md:text-xs"
//                 >
//                     <Bell size={14} />
//                     <span className="hidden sm:inline">Subscribe</span>
//                 </button>
//             </div>
//         </nav>
//     );
// };

export const PostHeader = ({ onSubscribeClick }: { onSubscribeClick: () => void }) => {
    // Common style for the icon buttons to ensure even sizing
    const iconBtnStyle = "flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 p-2.5 text-slate-400 transition-all hover:border-[#38bdf8] hover:text-[#38bdf8] hover:bg-[#38bdf8]/10 shadow-sm";

    return (
        <nav className="sticky top-5 z-40 flex w-full items-center justify-between rounded-2xl border border-slate-800 bg-[#0f172a]/80 p-2 backdrop-blur-md shadow-xl lg:px-6 lg:py-3">
            
            {/* 1. Portfolio Button */}
            <a href="https://sourishchakraborty.com" title="Portfolio" className={iconBtnStyle}>
                <User size={20} />
            </a>

            {/* 2. Blog Home Button */}
            <Link href="/" title="Blog Home" className={iconBtnStyle}>
                <Home size={20} />
            </Link>

            {/* 3. GitHub Button */}
            <a href="https://github.com/sochaty?tab=repositories" target="_blank" title="GitHub" className={iconBtnStyle}>
                <Github size={20} />
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
    );
};