import FrontAnnouncement from "@/components/front/announcement"
import FrontNavbar from "@/components/front/navbar"
import FrontFooter from "@/components/front/footer"

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