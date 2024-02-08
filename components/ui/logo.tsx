import Image from "next/image"
import Link from "next/link"
import InsightLogo from '../../assets/iNsightLogo.webp'
const Logo = () => {
  return (
    <Link href='/'>
        <Image
    src={InsightLogo}
    height={50}
    width={150}
    alt="Insight Classes Logo"
    ></Image>
    </Link>
    
  )
}

export default Logo