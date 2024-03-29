
const Header = () => {
  return (
    <header className="flex flex-col items-center mt-24">
        <img className="w-[20%]" src="/images/logo.svg" alt="ping" />
        <h1 className="md:text-5xl text-3xl font-extralight mt-10 gray-text">We are launching <span className="font-bold very-dark-blue-text">soon!</span></h1>
        <p className="mt-3 very-dark-blue-text font-normal md:text-base text-sm">Subscribe and get notified</p>
    </header>
  )
}

export default Header