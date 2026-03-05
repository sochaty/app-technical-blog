import { User, Home, Github, Bell } from 'lucide-react';
import Link from 'next/link';

interface PostHeaderProps {
    onSubscribeClick: () => void;
    title: string;
}

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