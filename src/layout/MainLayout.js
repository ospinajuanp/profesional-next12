import Header from "@/components/Header";
import Nav from "@/common/nav";

export default function MainLayout ({children}){
    
    return(
        <>
            <div className="min-h-full">
                <Header/>
                <Nav/>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}