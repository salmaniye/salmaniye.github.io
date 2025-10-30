import { useState } from "react";
import { photos, type PhotoEntry } from "../data/photography";

const dateFormatter = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" });

const Photography = () => {
  const [activePhoto, setActivePhoto] = useState<PhotoEntry | null>(null);

  return (
    <>
      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700">
        <section className="space-y-12">
          <div className="border-t border-orange-100 pt-8 space-y-4">
            <h1 className="text-2xl font-semibold text-orange-700">Photography</h1>
            <p className="leading-relaxed">
              A running gallery of shots I’m experimenting with—click anything to see the story.
            </p>
          </div>

          <div className="-mx-4 border-t border-orange-100 pt-8">
            <div className="columns-1 gap-6 space-y-6 px-4 md:columns-2">
              {photos.map((photo) => (
                <article key={photo.title} className="break-inside-avoid">
                  <button
                    type="button"
                    onClick={() => setActivePhoto(photo)}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="block w-full h-auto"
                    />
                    <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-lg bg-black/60 px-3 py-2 text-left text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <p className="font-medium">{photo.title}</p>
                      <p className="text-xs text-gray-200">
                        {dateFormatter.format(new Date(photo.datePosted))}
                      </p>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 rounded-full bg-orange-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-orange-700"
            >
              Close
            </button>

            <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,_3fr)_minmax(0,_2fr)]">
              <div className="overflow-hidden rounded-xl bg-gray-50 p-4">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="mx-auto h-full max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-4 rounded-xl border border-orange-100 bg-white p-5 text-gray-700">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-orange-700">
                    {activePhoto.title}
                  </h2>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm text-gray-600">
                    <dt className="font-medium text-orange-600">Taken</dt>
                    <dd>
                      {dateFormatter.format(new Date(activePhoto.dateTaken))}
                    </dd>
                    <dt className="font-medium text-orange-600">Posted</dt>
                    <dd>
                      {dateFormatter.format(new Date(activePhoto.datePosted))}
                    </dd>
                  </dl>
                </div>
                <p className="text-sm leading-relaxed">
                  {activePhoto.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Photography;
