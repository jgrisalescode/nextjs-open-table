import Header from "./components/Header"

const layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <main>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  )
}

export default layout
