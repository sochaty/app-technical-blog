import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
    return (
        <div className="dark"> {/* Add the dark class here */}
            <Meta />
            <Scripts />
            {/* Change bg-white to our navy-950 */}
            <div className="min-h-screen bg-navy-950 text-slate-300">
                <main>{children}</main>
            </div>
            <Analytics />
            <Integrations />
        </div>
    );
};
