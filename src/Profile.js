import { useContext } from 'react'
import { ThemeContext } from "./ThemeContext";
import { getImageUrl } from "./utils.js";
import "./Profile.css"

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

export default function Profile({ size, person, info }) {
  const contextTheme = useContext(ThemeContext)
  return (
    <section className={`${contextTheme.theme} profile`}>
      <Avatar size={size} person={person} />
      <Information info={info} />
    </section>
  );
}
