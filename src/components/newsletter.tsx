const Newsletter = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-2xl">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <form className="mx-auto mt-6 max-w-md">
            <div className="flex gap-x-4">
              <input
                type="email"
                placeholder="YOUR EMAIL HERE..."
                className="min-w-0 flex-auto"
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
