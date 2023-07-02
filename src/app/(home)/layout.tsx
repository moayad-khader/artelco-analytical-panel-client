

interface LobbyLayoutProps {
  children: React.ReactNode
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {


  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden bg-white">
    {children}

    </div>
  )
}