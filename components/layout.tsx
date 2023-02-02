import { FunctionComponent, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({
    children
}) => {
    return (
        <div className='max-w-6xl mx-auto p-5 my-8'>
            {children}
        </div>
    )
}
export default Layout;