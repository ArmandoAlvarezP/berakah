import { getYear } from "@/utils"

export const Footer = () => {
    return (
        <footer className="flex flex-row justify-between w-full">
            <span className='mx-10 mb-3'>Folio Mercantil N-2025065010</span>
            <span className='mx-10 mb-3'>&copy; {getYear} Berakah Consultoria para la Profesionalización SA de CV</span>
        </footer>
    )
}
