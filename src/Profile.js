import { getImageUrl } from "./utils.js";

function Information({ info }) {
  return (
    <ul>
      <li>
        <b>Profession: </b>
        {info.profession}
      </li>
      <li>
        <b>Awards: {info.awards.number} </b>
        {info.awards.name}
      </li>
      <li>
        <b>Discovered: </b>
        {info.discovered}
      </li>
    </ul>
  );
}
function Avatar({ size, person }) {
  return (
    <>
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person.imageId)}
        alt={person.name}
        width={size}
        height={size}
      />
    </>
  );
}

function Profile({ size, person, info }) {
  return (
    <section className="profile">
      <Avatar size={size} person={person} />
      <Information info={info} />
    </section>
  );
}

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
