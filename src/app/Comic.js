
export default function Comic() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            ग्राम श्री - अपना बाज़ार
          </h1>
          
        </div>

        {/* Comic Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Panel 1 - Top Left */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
            <div className="relative aspect-video">
              <img
                src="/images/7.png"
                alt="Comic Panel 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-orange-100">
              <p className="text-center text-sm font-medium text-gray-800">
                Panel 1: The Beginning
              </p>
            </div>
          </div>

          {/* Panel 2 - Top Right */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
            <div className="relative aspect-video">
              <img
                src="/images/8.png"
                alt="Comic Panel 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-orange-100">
              <p className="text-center text-sm font-medium text-gray-800">
                Panel 2: Taking Action
              </p>
            </div>
          </div>

          {/* Panel 3 - Bottom Left */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
            <div className="relative aspect-video">
              <img
                src="/images/9.png"
                alt="Comic Panel 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-orange-100">
              <p className="text-center text-sm font-medium text-gray-800">
                Panel 3: Learning Together
              </p>
            </div>
          </div>

          {/* Panel 4 - Bottom Right */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
            <div className="relative aspect-video">
              <img
                src="/images/10.png"
                alt="Comic Panel 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-orange-100">
              <p className="text-center text-sm font-medium text-gray-800">
                Panel 4: Community Success
              </p>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}