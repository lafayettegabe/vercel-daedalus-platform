import Image from 'next/image';
import logo from 'src/Images/logo.png'

export default function Logo( { collapsed } : { collapsed: boolean } ) {
    return (
    <div style={{ textAlign: 'center' }}>
            {!collapsed ? (
              <Image src={logo} alt="Company Logo" width={120} height={120}
                className='transition-all duration-1000 ease-in-out' 
                style={{ visibility: collapsed ? 'hidden' : 'visible' }} />
            ) : (
              <Image src={logo} alt="Company Logo" width={50} height={50} 
                className='transition-all duration-1000 ease-in-out' 
                style={{ visibility: !collapsed ? 'hidden' : 'visible' }} />
            )}
    </div>
    )
}