import FrontAnnouncement from "@/components/front/announcement"
import FrontNavbar from "@/components/front/Navbar"
import FrontFooter from "@/components/front/Footer"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <FrontAnnouncement />
            <FrontNavbar />
            {children}
            <FrontFooter />
        </>
    )
}