//Define a React functional component named `Header`
const Header = () => {
  return (
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Powered By
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Cutting-Edge
              <br className="hidden md:block" />
              Blockchain{' '}
              <span className="inline-block text-deep-purple-accent-400">
                Technology
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              A platform that allows investors to invest in tokens that represent a share of
              the overall investment in transportation-related services.
              These services could include freight and logistics, delivery services, ride-sharing and public transportation.
              Investors can earn returns based on the profit generated by these services,
              as well as the appreciation in the value of their tokens.
            </p>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-30 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYmBJtPm0pvagm6ZV9OSA65Fc4GfnyzJUnwtKlNzWRKIf7Qs&s"
          alt=""
        />
      </div>
    </div>
  );

}
export default Header