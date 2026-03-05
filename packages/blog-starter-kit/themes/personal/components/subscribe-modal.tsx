import { useState } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

export const SubscribeModal = ({ show, onClose, publicationId }: { show: boolean; onClose: () => void; publicationId: string }) => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [email, setEmail] = useState('');

    if (!show) return null;

    const subscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Using the modern GQL endpoint instead of the old form action
            const response = await fetch('https://gql.hashnode.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `
                        mutation SubscribeToNewsletter($publicationId: ObjectId!, $email: String!) {
                            subscribeToNewsletter(input: { publicationId: $publicationId, email: $email }) {
                                status
                            }
                        }
                    `,
                    variables: { publicationId, email },
                }),
            });

            const result = await response.json();
            if (result.errors) throw new Error();
            setStatus('success');
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <div className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-[#0f172a] p-8 shadow-2xl">
                <button onClick={onClose} className="absolute right-4 top-4 text-slate-500 hover:text-white"><X size={20} /></button>

                {status === 'success' ? (
                    <div className="text-center py-6 animate-in fade-in zoom-in">
                        <CheckCircle2 className="mx-auto text-[#38bdf8] mb-4" size={48} />
                        <h3 className="text-2xl font-bold text-white">You&apos;re in!</h3>
                        <p className="mt-2 text-slate-400">Check your inbox to confirm your subscription to the AI Lab.</p>
                        <button onClick={onClose} className="mt-6 text-[#38bdf8] font-bold hover:underline">Back to reading</button>
                    </div>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold text-white">Join the <span className="text-[#38bdf8]">AI Lab</span></h3>
                        <p className="mt-2 text-sm text-slate-400">Get technical deep-dives on LLMs and Cloud Architecture.</p>

                        <form onSubmit={subscribe} className="mt-6 space-y-4">
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="sourish@example.com" 
                                required 
                                className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white focus:border-[#38bdf8] outline-none transition-all"
                            />
                            <button 
                                type="submit" 
                                disabled={status === 'loading'}
                                className="flex w-full items-center justify-center rounded-lg bg-[#38bdf8] py-3 font-bold text-[#020617] hover:bg-white transition-all disabled:opacity-50"
                            >
                                {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'Subscribe Now'}
                            </button>
                            {status === 'error' && <p className="text-xs text-red-400 text-center">Something went wrong. Please try again.</p>}
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};