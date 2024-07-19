import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useGoogleLogin, googleLogout } from '@react-oauth/google'
import { Tenant } from '@utils/constants'
import { jwtDecode } from 'jwt-decode'

const Header = () => {
    const [tenant, setTenant] = useState<Tenant | null>(null)

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      const userObject = jwtDecode(codeResponse.access_token) as Tenant
      setTenant(userObject)
      localStorage.setItem('google_user', JSON.stringify(userObject))
    },
    onError: error => console.log('Login Failed:', error)
   })
  
  const logOut = () => {
    googleLogout()
    setTenant(null)
    localStorage.removeItem('google_user')
  }

  useEffect(() => {
  const storedUser = localStorage.getItem('google_user')
  if (storedUser) setTenant(JSON.parse(storedUser))
  }, [])



  return (
        <header className="bg-gray-800 text-white p-4 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              {tenant ? (
                <div>
                  <Image
                    src={tenant.picture as string}
                    alt={tenant.name as string}
                    width={32}
                    height={32}
                  />
                  <span className="mr-4">{tenant.name}</span>
                  <button
                    onClick={logOut}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => login()}
                  >
                  Sign in with Google
                </button>
              )}
            </div>
          </div>
        </header>
  );
}

export default Header