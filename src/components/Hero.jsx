const Hero = ({ title = 'Become a React Dev', subtitle ='Find the React job that fits your skillset'}) => { // props is an object that holds the values passed from the parent component. In this case, title and subtitle. You can call it anything you want, since it's a parameter.
  // Instead of specifying props, you can also destructure it like this: const Hero = ({ title, subtitle }) => {
  // In this case, you can directly use {title} and {subtitle} instead of {props.title} and {props.subtitle}
  // You can also set default values for props like this: ({ title = 'Default Title', subtitle = 'Default Subtitle' })
  // If you pass props from the parent component, those values will override the default values.
    return (
    <section className="bg-indigo-700 py-20 mb-4">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
                >
                    <div className="text-center">
                        <h1
                            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
                        >
                            { title }
                        </h1>
                        <p className="my-4 text-xl text-white">
                            { subtitle }
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Hero