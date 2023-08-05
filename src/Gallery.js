import Profile from "./Profile"

export default function Gallery() {
    return (
      <div>
        <h1>Notable Scientists</h1>
        <Profile
            size="70"
            person={{
                name: "Maria Skłodowska-Curie",
                imageId: "szV5sdG",
            }}
            info={{
                profession: "physicist and chemist",
                awards: {
                number: "4",
                name: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
                },
                discovered: "polonium (element)",
            }}
        />
        <Profile
            size="70"
            person={{
                name: "Katsuko Saruhashi",
                imageId: "YfeOqp2",
            }}
            info={{
                profession: "geochemist",
                awards: {
                number: "2",
                name: "(Miyake Prize for geochemistry, Tanaka Prize)",
                },
                discovered: "a method for measuring carbon dioxide in seawater",
            }}
        />
      </div>
    );
  }